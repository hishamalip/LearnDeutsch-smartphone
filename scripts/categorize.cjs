const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/raw_text.txt'), 'utf8');

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
        i++;
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
const dataRows = parsed.slice(1);

function cleanMarkdown(str) {
  if (!str) return '';
  return str.replace(/\*\*/g, '').trim();
}

function splitLines(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return { head: '', example: '' };
  if (lines.length === 1) return { head: cleanMarkdown(lines[0]), example: '' };
  return {
    head: cleanMarkdown(lines[0]),
    example: cleanMarkdown(lines.slice(1).join(' / '))
  };
}

// Category keyword / pattern sets
const familyTerms = new Set([
  'die Familie, -n', 'der Familienname', 'der Familienstand', 'die Eltern (pl.)',
  'der Vater, -ä', 'die Mutter, -ü', 'der Sohn, -ö, e', 'die Tochter, -ö',
  'der Bruder, -ü', 'die Schwester, -n', 'die Geschwister (pl.)',
  'die Großeltern (pl.)', 'die Großmutter', 'der Großvater', 'die Oma, -s', 'der Opa, -s',
  'das Baby, -s', 'das Kind, -er', 'der Junge, -n', 'das Mädchen, –',
  'der Mann, -ä, er', 'die Frau', 'die Frauen', 'die Ehefrau, -en', 'der Ehemann, ä, er',
  'heiraten', 'verheiratet', 'ledig', 'die Hochzeit', 'der Verwandte, -n',
  'der Partner, -/', 'die Partnerin, -nen', 'der Freund, -e', 'die Freundin',
  'der Erwachsene, -n', 'der Jugendliche, -n', 'der Mensch, -en', 'die Leute (pl.)',
  'geboren', 'das Geburtsjahr', 'der Geburtsort', 'der Geburtstag', 'das Alter'
]);

const workTerms = new Set([
  'arbeiten', 'die Arbeit, -en', 'arbeitslos', 'der Arbeitsplatz, -ä, e', 'der Beruf, -e',
  'der Chef -s / die Chefin -nen', 'der Kollege, -n', 'die Firma', 'das Praktikum',
  'verdienen', 'der Beamte, -n', 'der Verkäufer, –', 'der Kunde, -n', 'die Stelle, -n',
  'der Job, -s', 'der Lehrer, –', 'die Schule', 'der Schüler, –', 'die Klasse',
  'der Student, -en', 'studieren', 'das Studium', 'der Unterricht', 'die Hausaufgabe,-n',
  'die Prüfung', 'der Test', 'der Bogen', 'das Wörterbuch, -ü, er', 'der Bleistift, -e',
  'der Kugelschreiber', 'das Papier', 'die Papiere (pl.)', 'der Computer, –',
  'der Drucker, –', 'drucken', 'das Fax, -e', 'das Formular, -e', 'ausfüllen',
  'unterschreiben', 'die Unterschrift', 'der Feierabend', 'der Feiertag', 'selbstständig'
]);

const foodTerms = new Set([
  'der Apfel, -Ä', 'die Banane, -n', 'die Birne, -n', 'das Brot, -e', 'das Brötchen, –',
  'die Butter', 'das Bier', 'der Wein', 'der Saft', 'das Wasser', 'der Kaffee', 'der Tee',
  'das Fleisch', 'der Fisch, -e', 'das Ei, -er', 'das Gemüse', 'die Kartoffel, -n',
  'der Salat', 'das Salz', 'das Öl', 'der Kuchen', 'das Hähnchen, -', 'der Schinken, –',
  'die Milch', 'das Obst', 'die Pommes frites (pl.)', 'der Reis', 'die Tomate, -n',
  'essen', 'das Essen', 'trinken', 'das Getränk, -e', 'der Appetit', 'der Hunger',
  'der Durst', 'frühstücken', 'das Frühstück', 'kochen', 'der Herd', 'der Kühlschrank',
  'grillen', 'schmecken', 'bitter', 'das Restaurant, -s', 'das Café, -s', 'die Speisekarte',
  'die Karte, -n', 'das Glas, -ä, er', 'die Flasche, -n', 'die Bäckerei'
]);

const outsideTerms = new Set([
  'das Auto, -s', 'die Autobahn, -en', 'der Bus, -se', 'das Taxi, -s', 'die Bahn',
  'der Bahnhof', 'der Bahnsteig', 'das Gleis, -e', 'der Zug, -ü, e', 'die S-Bahn',
  'die Straßenbahn', 'das Fahrrad, -ä, er', 'Rad fahren', 'fahren', 'der Fahrer',
  'die Fahrkarte, -n', 'das Ticket, -s', 'der Automat', 'der Schalter', 'abfahren',
  'die Abfahrt', 'ankommen', 'die Ankunft', 'einsteigen', 'aussteigen', 'halten',
  'die Haltestelle', 'fliegen', 'abfliegen', 'der Abflug', 'der Flughafen',
  'das Flugzeug', 'der Koffer, –', 'das Gepäck', 'der Pass, -ä, e', 'der Ausweis',
  'der Zoll', 'die Reise', 'reisen', 'das Reisebüro, -s', 'der Reiseführer',
  'der Ausflug', 'wandern', 'das Hotel, -s', 'die Rezeption', 'das Doppelzimmer',
  'das Einzelzimmer', 'die Halbpension', 'übernachten', 'der Urlaub', 'die Führung',
  'die Sehenswürdigkeit, -en', 'der Stadtplan', 'der Plan, -ä, e', 'die Straße, -n',
  'der Weg', 'die Ecke, -n', 'die Kreuzung', 'die Brücke', 'der Platz, -ä, e',
  'der Baum, -ä, e', 'der Garten', 'der See', 'das Meer', 'der Berg',
  'der Norden', 'der Süden', 'der Westen', 'der Osten', 'Deutschland',
  'Europa', 'das Land, -ä, er', 'das Ausland', 'der Ausländer, - / die Ausländerin -nen',
  'ausländisch', 'die Stadt, -ä, e', 'das Dorf, -ö, er', 'draußen', 'die Natur',
  'die Sonne', 'der Regen', 'regnen', 'der Wind', 'das Wetter', 'Grad (Celsius)',
  'ein Grad unter Null/minus ein Grad', 'vier Grad über Null/plus vier Grad',
  'zweihundert Kilometer', 'weit', 'die Welt'
]);

const everydayTerms = new Set([
  'das Haus, -ä, er', 'die Wohnung, -en', 'das Zimmer, –', 'das Bad', 'baden',
  'die Dusche', '(sich) duschen', '(sich) waschen', 'das Bett, -en', 'das Sofa',
  'der Schrank, -ä, e', 'der Tisch, -e', 'die Küche', 'der Herd', 'der Kühlschrank',
  'der Balkon', 'der Aufzug, -ü, e', 'die Treppe, -n', 'die Tür', 'das Fenster',
  'das Licht', 'der Schlüssel, –', 'mieten', 'die Miete', 'vermieten', 'der Vermieter',
  'umziehen', 'wohnen', 'das Apartment, -s', 'zu Hause', 'nach Hause', 'die Kleidung',
  'die Jacke, -n', 'der Schuh, -e', 'die Hose', '(sich) anziehen', 'ausziehen',
  'sich ausziehen', 'kaputt', 'reparieren', 'die Reparatur', 'das Problem, -e',
  'die Lösung, -en', 'sauber', 'die Maschine, -n', 'die Zigarette, -n', 'rauchen',
  'der Hund, -e', 'die Katze', 'die Blume, -n', 'schlafen', 'müde', 'aufstehen',
  'der Arm, -e', 'das Bein, -e', 'das Auge, -n', 'der Kopf', 'der Mund',
  'die Hand, -ä, e', 'der Fuß, -ü, e', 'das Haar, -e', 'der Bauch', 'weh tun',
  'krank', 'das Fieber', 'der Arzt, -Ä, e', 'der Doktor', 'die Praxis', 'die Apotheke',
  'das Medikament', 'der Termin, -e', 'der Sport', 'der Fußball', 'schwimmen',
  'das Schwimmbad', 'die Disco', 'das Kino, -s', 'der Film, -e', 'die Party',
  'das Hobby, -s', 'das Geschenk, -e', 'feiern', 'die Freizeit', 'das Lied, -er',
  'die CD, -s', 'das Foto, -s', 'der Verein', 'glücklich', 'das Glück', 'böse',
  'lustig', 'zufrieden', 'der Nachbar, -n', 'das Telefon', 'telefonieren',
  'das Handy, -s', 'der Anruf, -e', 'anrufen', 'der Anrufbeantworter', 'die E-Mail, -s',
  'der Brief, -e', 'die Briefmarke, -n', 'der Absender', 'der Empfänger, –',
  'die Post', 'die Postleitzahl', 'die Adresse,-en', 'das Geschäft, -e', 'der Laden, -ä',
  'der Kiosk', 'das Kaufhaus', 'einkaufen', 'kaufen', 'verkaufen', 'das Angebot, -e'
]);

function getCategory(germanHead, index, row) {
  const g = germanHead.trim();

  // Basic (first 108 rows are numbers, dates, times, units, nationalities, colors, directions, basic phrases)
  if (index < 108) {
    if (g === 'Deutschland' || g === 'Europa' || g.includes('Türkei') || g.includes('Deutsche') || g.includes('Norden') || g.includes('Süden') || g.includes('Westen') || g.includes('Osten')) {
      return 'outside';
    }
    return 'basic';
  }

  // Greetings, basic courtesy, basic indicators
  if ([
    'Achtung', 'all-', 'allein', 'also', 'auch', 'bitte', 'die Bitte, -n', 'bitten',
    'danken', 'der Dank', 'danke', 'Entschuldigung', 'entschuldigen', 'hallo',
    'tschüss', 'das Wiedersehen', 'das Wiederhören', 'willkommen', 'ja', 'nein',
    'kein', 'nicht', 'nichts', 'klar', 'wunderbar', 'Herzlichen Glückwunsch',
    'der Glückwunsch', 'gratulieren', 'herzlich', 'gut', 'schlecht', 'schön',
    'groß', 'klein', 'alt', 'neu', 'jung', 'kurz', 'lang', 'billig', 'teuer',
    'leicht', 'schwer', 'einfach', 'richtig', 'falsch', 'frei', 'besetzt',
    'normal', 'wichtig', 'fertig', 'offen', 'geöffnet', 'geschlossen', 'die Ordnung',
    'das Ding', 'das Wort, -ö, er/-e', 'der Buchstabe, -n', 'buchstabieren',
    'die Sprache, -n', 'der Name, -n', 'der Vorname, -n'
  ].some(term => g === term || g.startsWith(term + ' ') || g.startsWith(term + ','))) {
    return 'basic';
  }

  // Family
  for (const term of familyTerms) {
    if (g === term || g.startsWith(term) || g.includes(term)) {
      return 'family';
    }
  }

  // Work
  for (const term of workTerms) {
    if (g === term || g.startsWith(term) || g.includes(term)) {
      return 'work';
    }
  }

  // Food
  for (const term of foodTerms) {
    if (g === term || g.startsWith(term) || g.includes(term)) {
      return 'food';
    }
  }

  // Outside
  for (const term of outsideTerms) {
    if (g === term || g.startsWith(term) || g.includes(term)) {
      return 'outside';
    }
  }

  // Everyday
  for (const term of everydayTerms) {
    if (g === term || g.startsWith(term) || g.includes(term)) {
      return 'everyday';
    }
  }

  // Question words, adverbs, prepositions, connectors
  const adverbPreps = [
    'ab', 'aber', 'an', 'auf', 'aus', 'bei', 'bei uns', 'bis', 'da', 'daneben',
    'dann', 'denn', 'dort', 'dorthin', 'dorther', 'durch', 'für', 'gegen',
    'gerade', 'geradeaus', 'gern(e)', 'gestern', 'heute', 'morgen', 'hier',
    'hinten', 'oben', 'unten', 'in', 'immer', 'jetzt', 'lange', 'langsam',
    'leider', 'leise', 'laut', 'links', 'rechts', 'nach', 'nie', 'noch', 'nur',
    'oft', 'ohne', 'pünktlich', 'sehr', 'seit', 'so', 'sofort', 'spät', 'später',
    'über', 'um', 'unter', 'viel', 'vielleicht', 'von', 'vor', 'wann', 'warum',
    'was', 'was für ein', 'weit', 'weiter', 'wenig', 'wer', 'wie', 'wie viel',
    'wie bitte', 'wo', 'woher', 'wohin', 'zusammen', 'zwischen', 'zurück', 'zu',
    'zurzeit', 'erst', 'bald', 'circa/ca.', 'einmal', 'noch einmal', 'früher'
  ];
  if (adverbPreps.some(term => g === term || g.startsWith(term + ' ') || g.startsWith(term + ','))) {
    return 'adverb';
  }

  // Pronouns
  if (['ich', 'du', 'er', 'sie', 'Sie', 'es', 'wir', 'ihr', 'sie', 'mein', 'dein-', 'sein', 'ihr', 'unser-', 'euer', 'man', 'sich', 'dich', 'dir', 'ihm/ihr', 'ihn', 'dies-', 'jed-', 'welch-'].some(term => g === term || g.startsWith(term))) {
    return 'basic';
  }

  // Verbs check (infinitives or prefixes)
  const isVerb = g.endsWith('en') || g.endsWith('eln') || g.endsWith('ern') ||
    g.startsWith('(sich)') || g.startsWith('an ') || g.startsWith('aus ') ||
    g.startsWith('auf ') || g.includes(' sein') || g.includes(' tun') ||
    [
      'anbieten', 'anfangen', 'anklicken', 'ankommen', 'ankreuzen', 'anmachen',
      '(sich) anmelden', 'anrufen', 'antworten', 'arbeiten', 'aufhören', 'aufstehen',
      'ausfüllen', 'ausmachen', 'aussehen', 'aussteigen', 'ausziehen', 'bedeuten',
      'beginnen', 'bekommen', 'benutzen', 'besichtigen', 'bestellen', 'besuchen',
      'bezahlen', 'bleiben', 'brauchen', 'bringen', 'danken', 'dauern', 'drücken',
      'dürfen', 'einladen', 'einsteigen', 'empfehlen', 'enden', 'entschuldigen',
      'erklären', 'erlauben', 'erzählen', 'essen', 'fahren', 'fehlen', 'feiern',
      'fernsehen', 'finden', 'fliegen', 'fragen', '(sich) freuen', 'fühlen',
      'geben', 'gefallen', 'gehen', 'gehören', 'gewinnen', 'glauben', 'haben',
      'halten', 'heißen', 'helfen', 'holen', 'hören', 'kaufen', 'kennen',
      'kennenlernen', 'kochen', 'kommen', 'können', 'kosten', 'kriegen',
      'lachen', 'lassen', 'laufen', 'leben', 'legen', 'lernen', 'lesen',
      'lieben', 'liegen', 'machen', 'mieten', 'mitbringen', 'mitkommen',
      'mitmachen', 'mitnehmen', 'möchten', 'mögen', 'müssen', 'nehmen',
      'öffnen', 'rauchen', 'regnen', 'reisen', 'reparieren', 'riechen',
      'sagen', 'schlafen', 'schließen', 'schmecken', 'schreiben', 'schwimmen',
      'sehen', 'sein', 'sitzen', 'sollen', 'spielen', 'sprechen', 'stehen',
      'stellen', 'studieren', 'suchen', 'tanzen', 'tragen', '(sich) treffen',
      'trinken', 'tun', 'übernachten', 'überweisen', 'unterschreiben',
      'verdienen', 'verkaufen', 'vermieten', 'verstehen', 'wandern',
      'warten', 'waschen', 'werden', 'wiederholen', 'wissen', 'wohnen',
      'wollen', 'zahlen', 'zeigen'
    ].some(v => g === v || g.startsWith(v + ' '));

  if (isVerb && !g.startsWith('der ') && !g.startsWith('die ') && !g.startsWith('das ')) {
    return 'verb';
  }

  // Nouns check (starts with article der/die/das)
  if (g.startsWith('der ') || g.startsWith('die ') || g.startsWith('das ') || /^[A-ZÄÖÜ]/.test(g)) {
    return 'noun';
  }

  return 'basic';
}

const categorizedCards = [];
const categoryCounts = {};

dataRows.forEach((row, index) => {
  const qLines = splitLines(row[0] || '');
  const aLines = splitLines(row[1] || '');

  const germanHead = qLines.head;
  const germanExample = qLines.example;
  const englishHead = aLines.head;
  const englishExample = aLines.example;

  const category = getCategory(germanHead, index, row);
  categoryCounts[category] = (categoryCounts[category] || 0) + 1;

  // Extract article if present
  let article = null;
  const cleanHead = germanHead.trim();
  if (cleanHead.startsWith('der ') || cleanHead.startsWith('der/')) article = 'der';
  else if (cleanHead.startsWith('die ') || cleanHead.startsWith('die/')) article = 'die';
  else if (cleanHead.startsWith('das ') || cleanHead.startsWith('das/')) article = 'das';

  categorizedCards.push({
    id: `card-${index + 1}`,
    index: index + 1,
    german: germanHead,
    germanExample: germanExample,
    english: englishHead,
    englishExample: englishExample,
    category: category,
    article: article,
    rawQuestion: row[0],
    rawAnswer: row[1]
  });
});

console.log('Category Counts:', categoryCounts);
let sum = 0;
for (const k in categoryCounts) sum += categoryCounts[k];
console.log('Sum of cards:', sum);

fs.writeFileSync(path.join(__dirname, 'categorized_summary.json'), JSON.stringify(categoryCounts, null, 2));
