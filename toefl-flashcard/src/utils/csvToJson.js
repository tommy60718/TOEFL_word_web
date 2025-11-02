// Utility to convert CSV data to JSON flashcard format
// This can be run as a Node script or imported for processing

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

export function csvToJson(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) return null;

  // Parse header
  const header = parseCSVLine(lines[0]);
  
  // Parse data rows
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};
    
    header.forEach((key, index) => {
      row[key] = values[index] || '';
    });
    
    data.push(row);
  }

  return data;
}

export function groupByType(csvData) {
  const grouped = {
    Prefix: [],
    Root: [],
    Suffix: [],
  };

  csvData.forEach(row => {
    const type = row.Type?.trim();
    if (grouped[type]) {
      grouped[type].push(row);
    }
  });

  return grouped;
}

export function transformToFlashcards(csvData, type, deckId, deckName) {
  return csvData.map((row, index) => {
    // Clean and process examples
    const examplesStr = row.Examples || '';
    const examples = examplesStr
      .split(',')
      .map(ex => ex.trim())
      .filter(ex => ex.length > 0)
      .slice(0, 4); // Limit to 4 examples for display

    // Create slug ID from root/prefix/suffix
    const slug = row['Root_Prefix_Suffix']
      .toLowerCase()
      .replace(/[,\s]+/g, '-')
      .replace(/-+/g, '-');

    return {
      id: slug,
      root: row['Root_Prefix_Suffix'],
      type: type,
      meaning: row.Meaning,
      examples: examples,
    };
  });
}

export function createDecksJson(csvData) {
  const grouped = groupByType(csvData);

  const decks = [
    {
      id: 'prefix-deck',
      name: 'Prefixes',
      type: 'Prefix',
      totalWords: grouped.Prefix.length,
      words: transformToFlashcards(grouped.Prefix, 'Prefix', 'prefix-deck', 'Prefixes'),
    },
    {
      id: 'root-deck',
      name: 'Roots',
      type: 'Root',
      totalWords: grouped.Root.length,
      words: transformToFlashcards(grouped.Root, 'Root', 'root-deck', 'Roots'),
    },
    {
      id: 'suffix-deck',
      name: 'Suffixes',
      type: 'Suffix',
      totalWords: grouped.Suffix.length,
      words: transformToFlashcards(grouped.Suffix, 'Suffix', 'suffix-deck', 'Suffixes'),
    },
  ];

  return { decks };
}
