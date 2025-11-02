import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { csvToJson, createDecksJson } from '../src/utils/csvToJson.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.join(__dirname, '../../References/contents_in_table/words.csv');
const outputPath = path.join(__dirname, '../src/data/words.json');

try {
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const csvData = csvToJson(csvContent);
  const decksJson = createDecksJson(csvData);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(decksJson, null, 2));
  console.log(`✓ Generated words.json with ${decksJson.decks.reduce((sum, deck) => sum + deck.totalWords, 0)} total words`);
  decksJson.decks.forEach(deck => {
    console.log(`  - ${deck.name}: ${deck.totalWords} words`);
  });
} catch (error) {
  console.error('Error generating words.json:', error.message);
  process.exit(1);
}
