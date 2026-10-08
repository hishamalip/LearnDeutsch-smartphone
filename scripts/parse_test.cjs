const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/raw_text.txt'), 'utf8');

// Parse CSV with quotes
function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentField = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(currentField);
      currentField = '';
      if (row.length > 1 || (row.length === 1 && row[0].trim() !== '')) {
        lines.push(row);
      }
      row = [];
    } else {
      currentField += char;
    }
  }
  if (currentField || row.length > 0) {
    row.push(currentField);
    if (row.length > 1 || (row.length === 1 && row[0].trim() !== '')) {
      lines.push(row);
    }
  }
  return lines;
}

const parsed = parseCSV(content);
const header = parsed[0];
const dataRows = parsed.slice(1);

console.log('Header:', header);
console.log('Total rows parsed:', dataRows.length);

// Analyze words and category assignments
// Categories:
// 1. Basic & Numbers (numbers, colors, units, greetings, directions, time of day/dates)
// 2. Family & People
// 3. Everyday Life & Home
// 4. Food & Drink
// 5. Work & Education
// 6. Outside & Travel
// 7. Verbs
// 8. Adverbs & Connectors
// 9. Nouns & General

fs.writeFileSync(path.join(__dirname, 'test_parsed_count.json'), JSON.stringify({ count: dataRows.length, sample: dataRows.slice(0, 5) }, null, 2));
