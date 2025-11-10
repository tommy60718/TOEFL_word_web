import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the anki400.json file
const ankiFilePath = path.join(__dirname, '../../References/contents_in_table/anki400.json');
const wordsFilePath = path.join(__dirname, '../src/data/words.json');

const ankiData = JSON.parse(fs.readFileSync(ankiFilePath, 'utf-8'));
const wordsData = JSON.parse(fs.readFileSync(wordsFilePath, 'utf-8'));

// Convert anki400 lessons to new decks
const newDecks = Object.entries(ankiData).map(([lessonKey, lessonData], index) => {
  const lessonNumber = index + 1;
  const deckId = `anki-lesson-${lessonNumber}`;
  
  // Extract words from the lesson
  const words = lessonData.vocabulary.map((vocab, wordIndex) => {
    // Parse the word and pronunciation
    const wordParts = vocab.word.split('[');
    const root = wordParts[0].trim();
    const pronunciation = wordParts[1] ? `[${wordParts[1]}` : '';
    
    // Parse the chinese definition - extract main meaning and part of speech
    const lines = vocab.chinese.split('\n').filter(line => line.trim());
    const firstLine = lines[0] || '';
    
    // Extract examples if they start with "Ex:"
    const examples = [];
    lines.forEach(line => {
      if (line.includes('Ex:')) {
        const exText = line.split('Ex:')[1]?.trim();
        if (exText) examples.push(exText);
      }
    });
    
    return {
      id: `${deckId}-${wordIndex + 1}`,
      root: root,
      type: 'Vocabulary',
      meaning: firstLine.replace(/\(.*?\).*?:/g, '').trim().substring(0, 150),
      examples: examples.slice(0, 2) // Limit to 2 examples
    };
  });

  return {
    id: deckId,
    name: `Anki Lesson ${lessonNumber}`,
    type: 'Vocabulary',
    totalWords: words.length,
    words: words
  };
});

// Append new decks to existing decks
wordsData.decks.push(...newDecks);

// Write the updated words.json
fs.writeFileSync(wordsFilePath, JSON.stringify(wordsData, null, 2));

console.log(`✓ Added ${newDecks.length} new decks from anki400.json`);
console.log(`Total decks now: ${wordsData.decks.length}`);
newDecks.forEach(deck => {
  console.log(`  - ${deck.name}: ${deck.totalWords} words`);
});

