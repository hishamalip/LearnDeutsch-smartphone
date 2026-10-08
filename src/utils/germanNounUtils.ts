/**
 * Utility to parse German noun flashcard terms and extract
 * the clean singular word and its plural form.
 * 
 * Example:
 *   "das Fahrrad, -ä, er" -> { singular: "das Fahrrad", plural: "Fahrräder" }
 *   "die Sekunde, -n"      -> { singular: "die Sekunde", plural: "Sekunden" }
 *   "der Tag, -e"          -> { singular: "der Tag", plural: "Tage" }
 *   "das Zimmer, –"        -> { singular: "das Zimmer", plural: "Zimmer" }
 */

const NOUN_OVERRIDES: Record<string, string> = {
  'eine Million': 'Millionen',
  'eine Milliarde': 'Milliarden',
  'die Nacht': 'Nächte',
  'der/die Deutsche': 'Deutsche',
  'der/die Bekannte': 'Bekannte',
  '(Kredit)-Karte': '(Kredit)-Karten',
  'der Partner': 'Partner',
  'die Partnerin': 'Partnerinnen',
  'das Wort': 'Wörter / Worte',
  'die Woche': 'Wochen',
  'das Ergebnis': 'Ergebnisse',
  'die Hausaufgabe': 'Hausaufgaben',
  'die Adresse': 'Adressen',
  'das Bett': 'Betten',
  'das Café': 'Cafés',
  'das Dorf': 'Dörfer',
  'die Ehefrau': 'Ehefrauen',
  'der Ehemann': 'Ehemänner',
  'der Lkw': 'Lkws',
  'der Mann': 'Männer',
  'das Museum': 'Museen',
  'der Kollege': 'Kollegen',
  'der Herr': 'Herren',
  'der Junge': 'Jungen',
  'der Kunde': 'Kunden',
  'der Name': 'Namen',
  'der Beamte': 'Beamten',
  'der Erwachsene': 'Erwachsenen',
  'der Jugendliche': 'Jugendlichen',
  'der Verwandte': 'Verwandten',
  'das Auge': 'Augen',
  'das Zimmer': 'Zimmer',
  'das Brötchen': 'Brötchen',
  'der Computer': 'Computer',
  'der Drucker': 'Drucker',
  'der Empfänger': 'Empfänger',
  'der Fehler': 'Fehler',
  'der Koffer': 'Koffer',
  'der Lehrer': 'Lehrer',
  'das Mädchen': 'Mädchen',
  'der Schinken': 'Schinken',
  'der Schlüssel': 'Schlüssel',
  'der Schüler': 'Schüler',
  'der Verkäufer': 'Verkäufer',
  'das Hähnchen': 'Hähnchen',
};

function applyUmlaut(str: string): string {
  // Replace the stem vowel (last occurrence of au, a, o, or u)
  if (/au/i.test(str)) {
    return str.replace(/au(?!.*au)/i, (m) => (m === 'AU' ? 'ÄU' : m === 'Au' ? 'Äu' : 'äu'));
  }
  if (/a/i.test(str)) {
    return str.replace(/a(?!.*a)/i, (m) => (m === 'A' ? 'Ä' : 'ä'));
  }
  if (/o/i.test(str)) {
    return str.replace(/o(?!.*o)/i, (m) => (m === 'O' ? 'Ö' : 'ö'));
  }
  if (/u/i.test(str)) {
    return str.replace(/u(?!.*u)/i, (m) => (m === 'U' ? 'Ü' : 'ü'));
  }
  return str;
}

export function parseNounPlural(rawGerman: string): { singular: string; plural: string | null } {
  if (!rawGerman) {
    return { singular: '', plural: null };
  }

  // Known phrases or non-noun entries with commas
  if (['Berlin, 12. April 2002', 'Land, Bewohner, Nationalität z. B.'].includes(rawGerman)) {
    return { singular: rawGerman, plural: null };
  }

  const commaIdx = rawGerman.indexOf(',');
  if (commaIdx === -1) {
    return { singular: rawGerman, plural: null };
  }

  const singular = rawGerman.substring(0, commaIdx).trim();
  const rawPlural = rawGerman.substring(commaIdx + 1).trim();

  // Special card handling
  if (rawGerman.startsWith('der Ausländer')) {
    return { singular: 'der Ausländer / die Ausländerin', plural: 'Ausländer / Ausländerinnen' };
  }
  if (rawGerman.startsWith('der Partner, -/')) {
    return { singular: 'der Partner', plural: 'Partner' };
  }

  if (NOUN_OVERRIDES[singular] !== undefined) {
    return { singular, plural: NOUN_OVERRIDES[singular] };
  }

  let baseWord = singular;
  const matchArt = singular.match(/^(der|die|das|eine|ein)\s+(.+)$/i);
  if (matchArt) {
    baseWord = matchArt[2];
  }

  const norm = rawPlural.replace(/^[–\-]\s*/, '').trim();

  let p = '';
  if (norm === '' || norm === '–' || norm === '-') {
    p = baseWord;
  } else if (norm === 'n') {
    p = baseWord + 'n';
  } else if (norm === 'en') {
    if (baseWord.endsWith('in')) {
      p = baseWord + 'nen';
    } else if (baseWord.endsWith('e')) {
      p = baseWord + 'n';
    } else {
      p = baseWord + 'en';
    }
  } else if (norm === 'e') {
    p = baseWord.endsWith('e') ? baseWord : baseWord + 'e';
  } else if (norm === 's') {
    p = baseWord + 's';
  } else if (norm === 'er') {
    p = baseWord + 'er';
  } else if (norm === 'ä' || norm === 'Ä' || norm === 'ö' || norm === 'Ö' || norm === 'ü' || norm === 'Ü') {
    p = applyUmlaut(baseWord);
  } else if (/^[äÄ],\s*er$/.test(norm) || /^[äÄ]\s*er$/.test(norm)) {
    p = applyUmlaut(baseWord) + 'er';
  } else if (/^[äÄ],\s*e$/.test(norm) || /^[äÄ]\s*e$/.test(norm) || norm === '¨-e') {
    p = applyUmlaut(baseWord) + 'e';
  } else if (/^[öÖ],\s*er$/.test(norm)) {
    p = applyUmlaut(baseWord) + 'er';
  } else if (/^[öÖ],\s*e$/.test(norm)) {
    p = applyUmlaut(baseWord) + 'e';
  } else if (/^[üÜ],\s*er$/.test(norm)) {
    p = applyUmlaut(baseWord) + 'er';
  } else if (/^[üÜ],\s*e$/.test(norm)) {
    p = applyUmlaut(baseWord) + 'e';
  } else if (norm === 'se') {
    p = baseWord + 'se';
  } else if (norm === 'nen') {
    p = baseWord + 'nen';
  } else {
    p = baseWord + norm;
  }

  return { singular, plural: p };
}
