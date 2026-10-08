/**
 * German A1 Flashcards Dataset
 * Total words: 965
 */

export type FlashcardCategory =
  | 'basic'
  | 'everyday'
  | 'noun'
  | 'verb'
  | 'adverb'
  | 'family'
  | 'work'
  | 'outside'
  | 'food';

export type CategoryFilter = 'all' | FlashcardCategory;
export type MasteryFilter = 'all' | 'mastered' | 'unmastered';

export interface Flashcard {
  id: string;
  index: number;
  german: string;
  germanExample: string;
  english: string;
  englishExample: string;
  category: FlashcardCategory;
  article: 'der' | 'die' | 'das' | null;
}

export interface CategoryInfo {
  id: CategoryFilter;
  label: string;
  count: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    "id": "all",
    "label": "All",
    "count": 965
  },
  {
    "id": "basic",
    "label": "Basic & Essentials",
    "count": 265
  },
  {
    "id": "everyday",
    "label": "Everyday Life",
    "count": 113
  },
  {
    "id": "noun",
    "label": "Nouns",
    "count": 92
  },
  {
    "id": "verb",
    "label": "Verbs & Actions",
    "count": 129
  },
  {
    "id": "adverb",
    "label": "Adverbs & Prepositions",
    "count": 134
  },
  {
    "id": "family",
    "label": "Family & People",
    "count": 44
  },
  {
    "id": "work",
    "label": "Work & Study",
    "count": 46
  },
  {
    "id": "outside",
    "label": "Outside & Travel",
    "count": 86
  },
  {
    "id": "food",
    "label": "Food & Drink",
    "count": 56
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    "id": "card-1",
    "index": 1,
    "german": "eins",
    "germanExample": "",
    "english": "one",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-2",
    "index": 2,
    "german": "zwei",
    "germanExample": "",
    "english": "two",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-3",
    "index": 3,
    "german": "drei",
    "germanExample": "",
    "english": "three",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-4",
    "index": 4,
    "german": "vier",
    "germanExample": "",
    "english": "four",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-5",
    "index": 5,
    "german": "fünf",
    "germanExample": "",
    "english": "five",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-6",
    "index": 6,
    "german": "sechs",
    "germanExample": "",
    "english": "six",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-7",
    "index": 7,
    "german": "sieben",
    "germanExample": "",
    "english": "seven",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-8",
    "index": 8,
    "german": "acht",
    "germanExample": "",
    "english": "eight",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-9",
    "index": 9,
    "german": "neun",
    "germanExample": "",
    "english": "nine",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-10",
    "index": 10,
    "german": "zehn",
    "germanExample": "",
    "english": "ten",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-11",
    "index": 11,
    "german": "elf",
    "germanExample": "",
    "english": "eleven",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-12",
    "index": 12,
    "german": "zwölf",
    "germanExample": "",
    "english": "twelve",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-13",
    "index": 13,
    "german": "dreizehn",
    "germanExample": "",
    "english": "thirteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-14",
    "index": 14,
    "german": "vierzehn",
    "germanExample": "",
    "english": "fourteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-15",
    "index": 15,
    "german": "fünfzehn",
    "germanExample": "",
    "english": "fifteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-16",
    "index": 16,
    "german": "sechzehn",
    "germanExample": "",
    "english": "sixteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-17",
    "index": 17,
    "german": "siebzehn",
    "germanExample": "",
    "english": "seventeen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-18",
    "index": 18,
    "german": "achtzehn",
    "germanExample": "",
    "english": "eighteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-19",
    "index": 19,
    "german": "neunzehn",
    "germanExample": "",
    "english": "nineteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-20",
    "index": 20,
    "german": "zwanzig",
    "germanExample": "",
    "english": "twenty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-21",
    "index": 21,
    "german": "einundzwanzig",
    "germanExample": "",
    "english": "twenty one",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-22",
    "index": 22,
    "german": "dreißig",
    "germanExample": "",
    "english": "thirty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-23",
    "index": 23,
    "german": "vierzig",
    "germanExample": "",
    "english": "fourty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-24",
    "index": 24,
    "german": "fünfzig",
    "germanExample": "",
    "english": "fifty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-25",
    "index": 25,
    "german": "sechzig",
    "germanExample": "",
    "english": "sixty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-26",
    "index": 26,
    "german": "siebzig",
    "germanExample": "",
    "english": "seventy",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-27",
    "index": 27,
    "german": "achtzig",
    "germanExample": "",
    "english": "eighty",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-28",
    "index": 28,
    "german": "neunzig",
    "germanExample": "",
    "english": "ninety",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-29",
    "index": 29,
    "german": "(ein)hundert",
    "germanExample": "",
    "english": "(one) hundred",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-30",
    "index": 30,
    "german": "hunderteins",
    "germanExample": "",
    "english": "one hundred and one",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-31",
    "index": 31,
    "german": "zweihundert",
    "germanExample": "",
    "english": "two hundred",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-32",
    "index": 32,
    "german": "(ein)tausend",
    "germanExample": "",
    "english": "(one) thousand",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-33",
    "index": 33,
    "german": "eine Million, -en",
    "germanExample": "",
    "english": "one million",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-34",
    "index": 34,
    "german": "eine Milliarde, -en",
    "germanExample": "",
    "english": "one billion",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-35",
    "index": 35,
    "german": "erste",
    "germanExample": "",
    "english": "first",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-36",
    "index": 36,
    "german": "zweite",
    "germanExample": "",
    "english": "second",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-37",
    "index": 37,
    "german": "dritte",
    "germanExample": "",
    "english": "third",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-38",
    "index": 38,
    "german": "vierte",
    "germanExample": "",
    "english": "fourth",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-39",
    "index": 39,
    "german": "ein halb; halb",
    "germanExample": "",
    "english": "one half; half",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-40",
    "index": 40,
    "german": "ein Viertel; Viertel",
    "germanExample": "",
    "english": "one quarter; quarter",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-41",
    "index": 41,
    "german": "neunzehnhundertneunundneunzig",
    "germanExample": "",
    "english": "nineteen ninety nine",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-42",
    "index": 42,
    "german": "zweitausendvierzehn",
    "germanExample": "",
    "english": "two thousand and fourteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-43",
    "index": 43,
    "german": "heute ist der 1. März",
    "germanExample": "",
    "english": "heute ist der erste März/der erste Dritte",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-44",
    "index": 44,
    "german": "Berlin, 12. April 2002",
    "germanExample": "",
    "english": "Berlin, zwölfter Vierter zweitausendzwei",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-45",
    "index": 45,
    "german": "null Uhr drei",
    "germanExample": "",
    "english": "time: 00:03",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-46",
    "index": 46,
    "german": "sieben Uhr fünfzehn",
    "germanExample": "",
    "english": "time: 07:15",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-47",
    "index": 47,
    "german": "dreizehn Uhr siebzehn",
    "germanExample": "",
    "english": "time: 13:17",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-48",
    "index": 48,
    "german": "vierundzwanzig Uhr",
    "germanExample": "",
    "english": "time: 24:00",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-49",
    "index": 49,
    "german": "ein Uhr",
    "germanExample": "",
    "english": "one o'clock",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-50",
    "index": 50,
    "german": "fünf Minuten vor/nach eins (ein Uhr)",
    "germanExample": "",
    "english": "five to/past one (one o’clock)",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-51",
    "index": 51,
    "german": "Viertel vor/nach zwei (zwei Uhr)",
    "germanExample": "",
    "english": "quarter to/past two (two o’clock)",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-52",
    "index": 52,
    "german": "halb drei",
    "germanExample": "",
    "english": "half past two",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-53",
    "index": 53,
    "german": "die Sekunde, -n",
    "germanExample": "",
    "english": "second",
    "englishExample": "",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-54",
    "index": 54,
    "german": "die Minute, -n",
    "germanExample": "",
    "english": "minute",
    "englishExample": "",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-55",
    "index": 55,
    "german": "die Stunde, -n",
    "germanExample": "",
    "english": "hour",
    "englishExample": "",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-56",
    "index": 56,
    "german": "der Tag, -e",
    "germanExample": "",
    "english": "day",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-57",
    "index": 57,
    "german": "die Woche, -e",
    "germanExample": "",
    "english": "week",
    "englishExample": "",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-58",
    "index": 58,
    "german": "das Jahr, -e",
    "germanExample": "",
    "english": "year",
    "englishExample": "",
    "category": "basic",
    "article": "das"
  },
  {
    "id": "card-59",
    "index": 59,
    "german": "der Wochentag, -e",
    "germanExample": "",
    "english": "weekday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-60",
    "index": 60,
    "german": "der Sonntag",
    "germanExample": "",
    "english": "Sunday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-61",
    "index": 61,
    "german": "der Montag",
    "germanExample": "",
    "english": "Monday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-62",
    "index": 62,
    "german": "der Dienstag",
    "germanExample": "",
    "english": "Tuesday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-63",
    "index": 63,
    "german": "der Mittwoch",
    "germanExample": "",
    "english": "Wednesday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-64",
    "index": 64,
    "german": "der Donnerstag",
    "germanExample": "",
    "english": "Thursday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-65",
    "index": 65,
    "german": "der Freitag",
    "germanExample": "",
    "english": "Friday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-66",
    "index": 66,
    "german": "der Samstag/Sonnabend",
    "germanExample": "",
    "english": "Saturday  Sonnabend is outmoded.",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-67",
    "index": 67,
    "german": "das Wochenende",
    "germanExample": "",
    "english": "weekend",
    "englishExample": "",
    "category": "basic",
    "article": "das"
  },
  {
    "id": "card-68",
    "index": 68,
    "german": "am Wochenende",
    "germanExample": "",
    "english": "on the weekend",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-69",
    "index": 69,
    "german": "der Tag",
    "germanExample": "",
    "english": "day",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-70",
    "index": 70,
    "german": "der Morgen",
    "germanExample": "",
    "english": "morning",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-71",
    "index": 71,
    "german": "der Vormittag,-e",
    "germanExample": "",
    "english": "morning",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-72",
    "index": 72,
    "german": "der Mittag",
    "germanExample": "",
    "english": "midday",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-73",
    "index": 73,
    "german": "der Nachmittag,-e",
    "germanExample": "",
    "english": "afternoon",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-74",
    "index": 74,
    "german": "der Abend,-e",
    "germanExample": "",
    "english": "evening",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-75",
    "index": 75,
    "german": "die Nacht,¨-e",
    "germanExample": "",
    "english": "night",
    "englishExample": "",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-76",
    "index": 76,
    "german": "der Januar",
    "germanExample": "",
    "english": "January",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-77",
    "index": 77,
    "german": "der Februar",
    "germanExample": "",
    "english": "February",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-78",
    "index": 78,
    "german": "der März",
    "germanExample": "",
    "english": "March",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-79",
    "index": 79,
    "german": "der April",
    "germanExample": "",
    "english": "April",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-80",
    "index": 80,
    "german": "der Mai",
    "germanExample": "",
    "english": "May",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-81",
    "index": 81,
    "german": "der Juni",
    "germanExample": "",
    "english": "June",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-82",
    "index": 82,
    "german": "der Juli",
    "germanExample": "",
    "english": "July",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-83",
    "index": 83,
    "german": "der August",
    "germanExample": "",
    "english": "August",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-84",
    "index": 84,
    "german": "der September",
    "germanExample": "",
    "english": "September",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-85",
    "index": 85,
    "german": "der Oktober",
    "germanExample": "",
    "english": "October",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-86",
    "index": 86,
    "german": "der November",
    "germanExample": "",
    "english": "November",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-87",
    "index": 87,
    "german": "der Dezember",
    "germanExample": "",
    "english": "December",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-88",
    "index": 88,
    "german": "der Frühling/das Frühjahr",
    "germanExample": "",
    "english": "spring",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-89",
    "index": 89,
    "german": "der Sommer",
    "germanExample": "",
    "english": "summer",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-90",
    "index": 90,
    "german": "der Herbst",
    "germanExample": "",
    "english": "autumn",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-91",
    "index": 91,
    "german": "der Winter",
    "germanExample": "",
    "english": "winter",
    "englishExample": "",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-92",
    "index": 92,
    "german": "1 Euro",
    "germanExample": "",
    "english": "100 Cent",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-93",
    "index": 93,
    "german": "ein Meter",
    "germanExample": "",
    "english": "one metre",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-94",
    "index": 94,
    "german": "ein Zentimeter",
    "germanExample": "",
    "english": "one centimetre",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-95",
    "index": 95,
    "german": "ein Meter fünfzehn",
    "germanExample": "",
    "english": "one metre fifteen",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-96",
    "index": 96,
    "german": "zweihundert Kilometer",
    "germanExample": "",
    "english": "two hundred kilometres",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-97",
    "index": 97,
    "german": "ein Quadratmeter",
    "germanExample": "",
    "english": "one square metre",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-98",
    "index": 98,
    "german": "ein Grad unter Null/minus ein Grad",
    "germanExample": "",
    "english": "one degree below zero/minus one degree",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-99",
    "index": 99,
    "german": "vier Grad über Null/plus vier Grad",
    "germanExample": "",
    "english": "four degrees above zero/plus four degrees",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-100",
    "index": 100,
    "german": "ein Prozent",
    "germanExample": "",
    "english": "one percent",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-101",
    "index": 101,
    "german": "ein Liter",
    "germanExample": "",
    "english": "one litre",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-102",
    "index": 102,
    "german": "ein Gramm",
    "germanExample": "",
    "english": "one gram",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-103",
    "index": 103,
    "german": "ein Pfund",
    "germanExample": "",
    "english": "one pound",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-104",
    "index": 104,
    "german": "ein Kilo(gramm)",
    "germanExample": "",
    "english": "one kilo(gram)",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-105",
    "index": 105,
    "german": "Deutschland",
    "germanExample": "",
    "english": "Germany",
    "englishExample": "",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-106",
    "index": 106,
    "german": "der/die Deutsche, -n",
    "germanExample": "",
    "english": "the German",
    "englishExample": "",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-107",
    "index": 107,
    "german": "ein Deutscher",
    "germanExample": "eine Deutsche / Deutsche / deutsch",
    "english": "a German",
    "englishExample": "a German / German / German",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-108",
    "index": 108,
    "german": "Europa",
    "germanExample": "Europäer / europäisch",
    "english": "Europe",
    "englishExample": "European / European",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-109",
    "index": 109,
    "german": "Land, Bewohner, Nationalität z. B.",
    "germanExample": "Türkei, Türke/Türkin, -nen, türkisch / Finnland, Finne/Finnin, -nen, finnisch / Mexiko, Mexikaner/Mexikanerin, -nen, mexikanisch",
    "english": "Country, resident, nationality e.g.",
    "englishExample": "Turkey, Turk, Turkish / Finland, Finn, Finnish / Mexico, Mexican, Mexican",
    "category": "noun",
    "article": null
  },
  {
    "id": "card-110",
    "index": 110,
    "german": "schwarz",
    "germanExample": "",
    "english": "black",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-111",
    "index": 111,
    "german": "grau",
    "germanExample": "",
    "english": "grey",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-112",
    "index": 112,
    "german": "blau",
    "germanExample": "",
    "english": "blue",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-113",
    "index": 113,
    "german": "grün",
    "germanExample": "",
    "english": "green",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-114",
    "index": 114,
    "german": "weiß",
    "germanExample": "",
    "english": "white",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-115",
    "index": 115,
    "german": "rot",
    "germanExample": "",
    "english": "red",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-116",
    "index": 116,
    "german": "gelb",
    "germanExample": "",
    "english": "yellow",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-117",
    "index": 117,
    "german": "braun",
    "germanExample": "",
    "english": "brown",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-118",
    "index": 118,
    "german": "der Norden",
    "germanExample": "",
    "english": "north",
    "englishExample": "",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-119",
    "index": 119,
    "german": "der Süden",
    "germanExample": "",
    "english": "south",
    "englishExample": "",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-120",
    "index": 120,
    "german": "der Westen",
    "germanExample": "",
    "english": "west",
    "englishExample": "",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-121",
    "index": 121,
    "german": "der Osten",
    "germanExample": "",
    "english": "east",
    "englishExample": "",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-122",
    "index": 122,
    "german": "ab",
    "germanExample": "Ab morgen muss ich arbeiten.",
    "english": "(starting) from",
    "englishExample": "Starting from tomorrow I have to work.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-123",
    "index": 123,
    "german": "aber",
    "germanExample": "Ich bin oft im Büro, aber nur für wenige Stunden.",
    "english": "but",
    "englishExample": "I'm often in the office, but only for a few hours.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-124",
    "index": 124,
    "german": "abfahren",
    "germanExample": "Wir fahren um zwölf Uhr ab.",
    "english": "to depart, to leave",
    "englishExample": "We leave at twelve o'clock.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-125",
    "index": 125,
    "german": "die Abfahrt",
    "germanExample": "Vor der Abfahrt rufe ich an.",
    "english": "I'll call before I leave. (lit. Before the departure, I call.)",
    "englishExample": "",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-126",
    "index": 126,
    "german": "abgeben",
    "germanExample": "Ich muss meine Schlüssel abgeben.",
    "english": "to hand sth. in, to give sth. in",
    "englishExample": "I have to hand in my keys.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-127",
    "index": 127,
    "german": "abholen",
    "germanExample": "Wann kann ich den Schrank bei dir abholen?",
    "english": "to pick up, to fetch",
    "englishExample": "When can I pick up the cabinet from you?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-128",
    "index": 128,
    "german": "der Absender",
    "germanExample": "Da ist ein Brief für dich ohne Absender.",
    "english": "sender, shipper",
    "englishExample": "There's a letter for you without a return address.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-129",
    "index": 129,
    "german": "Achtung",
    "germanExample": "Achtung! Das dürfen Sie nicht tun.",
    "english": "attention, look out, caution",
    "englishExample": "Attention! You must not do this.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-130",
    "index": 130,
    "german": "die Adresse,-en",
    "germanExample": "Können Sie mir seine Adresse sagen?",
    "english": "address",
    "englishExample": "Can you tell me his address?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-131",
    "index": 131,
    "german": "all-",
    "germanExample": "Alles Gute! / Das ist alles. / Sind alle da? / Alle Freunde kommen. / Hast du alles?",
    "english": "all, everything, everyone",
    "englishExample": "All the best! / That's all. / Is everyone here? / All your friends are coming. / Have you got everything?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-132",
    "index": 132,
    "german": "allein",
    "germanExample": "Er kommt allein.",
    "english": "alone",
    "englishExample": "He's coming alone.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-133",
    "index": 133,
    "german": "also",
    "germanExample": "Also, es ist so: ... / Er hat Zeit, also muss er uns helfen.",
    "english": "so, thus",
    "englishExample": "Well, it's like this: ... / He has time, so he has to help us.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-134",
    "index": 134,
    "german": "alt",
    "germanExample": "Wie alt sind Sie? / Sie sehen aber nicht so alt aus. / Mein Auto ist schon sehr alt. / Wir wohnen in einem sehr alten Haus. / Köln ist eine alte Stadt.",
    "english": "old",
    "englishExample": "How old are you? / You don't look that old. / My car is already very old. / We live in a very old house. / Cologne is an old city.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-135",
    "index": 135,
    "german": "das Alter",
    "germanExample": "Alter: 26 Jahre.",
    "english": "age",
    "englishExample": "Age: 26 years",
    "category": "family",
    "article": "das"
  },
  {
    "id": "card-136",
    "index": 136,
    "german": "an",
    "germanExample": "Fahren Sie an der nächsten Straße nach rechts. / Wir treffen uns am Bahnhof. / Am nächsten Montag geht es leider nicht. / Ich denke oft an dich. / Hast du das Bild an der Wand gesehen?",
    "english": "on, upon, at, to, in, of",
    "englishExample": "Turn right at the next street. / Meet us at the station. / Unfortunately we can't make it next Monday. / I often think of you. / Did you see the picture on the wall?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-137",
    "index": 137,
    "german": "anbieten",
    "germanExample": "Was darf ich dir anbieten?",
    "english": "to offer",
    "englishExample": "What can I offer you?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-138",
    "index": 138,
    "german": "das Angebot, -e",
    "germanExample": "Heute sind Sportschuhe im Angebot.",
    "english": "offer, promotion, sale",
    "englishExample": "Sports shoes are on sale today.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-139",
    "index": 139,
    "german": "ander-",
    "germanExample": "WiIlst du diese Jacke? / – Nein, ich möchte die andere.",
    "english": "other",
    "englishExample": "Do you want this jacket? / - No, I want the other one.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-140",
    "index": 140,
    "german": "anfangen",
    "germanExample": "Hier fängt die Bahnhofstraße an. / Der Unterricht fängt gleich an.",
    "english": "to begin, to start",
    "englishExample": "This is where Bahnhofstrasse begins. / Classes are about to start.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-141",
    "index": 141,
    "german": "der Anfang",
    "germanExample": "Sie wohnt am Anfang der Straße. / Wir machen Anfang Juli Urlaub. / Ich habe den Anfang des Films verpasst.",
    "english": "the beginning, the start",
    "englishExample": "She lives at the beginning of the street. / We go on vacation at the beginning of July. / I missed the start of the movie.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-142",
    "index": 142,
    "german": "anklicken",
    "germanExample": "Da musst du dieses Wort anklicken.",
    "english": "to click",
    "englishExample": "You have to click on this word.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-143",
    "index": 143,
    "german": "ankommen",
    "germanExample": "Wann kommt dieser Zug in Hamburg an?",
    "english": "to arrive",
    "englishExample": "When does this train arrive in Hamburg?",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-144",
    "index": 144,
    "german": "die Ankunft",
    "germanExample": "Auf diesem Plan steht nur die Ankunft(-szeit) der Züge.",
    "english": "arrival",
    "englishExample": "This plan only shows the arrival (time) of the trains.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-145",
    "index": 145,
    "german": "ankreuzen",
    "germanExample": "Auf dem Formular müssen Sie an mehreren Stellen / etwas ankreuzen.",
    "english": "to tick",
    "englishExample": "There are several places on the form where you tick something.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-146",
    "index": 146,
    "german": "anmachen",
    "germanExample": "Mach bitte das Licht an!",
    "english": "to switch/turn on",
    "englishExample": "Please turn the light on!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-147",
    "index": 147,
    "german": "(sich) anmelden",
    "germanExample": "Wo kann ich mich anmelden?",
    "english": "to register, to sign up",
    "englishExample": "Where can I register?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-148",
    "index": 148,
    "german": "die Anmeldung",
    "germanExample": "Eine Anmeldung für diesen Kurs ist nicht mehr möglich.",
    "english": "registration",
    "englishExample": "Registration for this course is no longer possible.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-149",
    "index": 149,
    "german": "die Anrede",
    "germanExample": "Schreiben Sie auch eine Anrede und einen Gruß.",
    "english": "salutation",
    "englishExample": "Also write a salutation and a greeting.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-150",
    "index": 150,
    "german": "anrufen",
    "germanExample": "Kann man Sie anrufen? / Peter ruft kurz seine Freundin an.",
    "english": "to call",
    "englishExample": "Can I call you? / Peter calls his girlfriend briefly.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-151",
    "index": 151,
    "german": "der Anruf, -e",
    "germanExample": "Sie bekommt viele Anrufe auf ihrem Handy.",
    "english": "to receive, to get",
    "englishExample": "She gets a lot of calls on her cell phone.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-152",
    "index": 152,
    "german": "der Anrufbeantworter",
    "germanExample": "Wir sind im Moment nicht da. Sprechen Sie bitte auf den Anrufbeantworter.",
    "english": "answering machine",
    "englishExample": "We are not available at the moment. Please leave a message on the answering machine.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-153",
    "index": 153,
    "german": "die Ansage, -n",
    "germanExample": "Hören Sie auf die Ansagen.",
    "english": "announcement",
    "englishExample": "Listen to the announcements.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-154",
    "index": 154,
    "german": "der Anschluss, -ü, e",
    "germanExample": "In Mannheim haben Sie Anschluss nach Saarbrücken.",
    "english": "connection",
    "englishExample": "In Mannheim you have a connection to Saarbrücken.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-155",
    "index": 155,
    "german": "der Anschluss, -ü, e",
    "germanExample": "Ist das die Anmeldung für einen Telefonanschluss?",
    "english": "connection",
    "englishExample": "Is that the application for a telephone connection?",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-156",
    "index": 156,
    "german": "an sein",
    "germanExample": "Heute Nacht war das Licht an.",
    "english": "to be (switched) on",
    "englishExample": "The light was on tonight.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-157",
    "index": 157,
    "german": "antworten",
    "germanExample": "Er antwortet nicht.",
    "english": "to answer",
    "englishExample": "He isn’t answering.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-158",
    "index": 158,
    "german": "die Antwort, -en",
    "germanExample": "Er gibt leider keine Antwort.",
    "english": "answer",
    "englishExample": "Unfortunately he isn't giving an answer.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-159",
    "index": 159,
    "german": "die Anzeige, -n",
    "germanExample": "Ich habe Ihre Anzeige in der Zeitung gelesen.",
    "english": "advert",
    "englishExample": "I read your advert in the newspaper.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-160",
    "index": 160,
    "german": "(sich) anziehen",
    "germanExample": "Ich muss mich noch anziehen.",
    "english": "to get dressed",
    "englishExample": "I still need to get dressed.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-161",
    "index": 161,
    "german": "das Apartment, -s",
    "germanExample": "Wir haben ein Apartment gemietet.",
    "english": "apartment",
    "englishExample": "We rented an apartment.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-162",
    "index": 162,
    "german": "der Apfel, -Ä",
    "germanExample": "Ein Pfund Äpfel bitte.",
    "english": "apple",
    "englishExample": "One pound of apples, please.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-163",
    "index": 163,
    "german": "der Appetit",
    "germanExample": "Guten Appetit!",
    "english": "appetite",
    "englishExample": "Bon appetit!",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-164",
    "index": 164,
    "german": "arbeiten",
    "germanExample": "Wo arbeiten Sie?",
    "english": "to work",
    "englishExample": "Where do you work?",
    "category": "work",
    "article": null
  },
  {
    "id": "card-165",
    "index": 165,
    "german": "die Arbeit, -en",
    "germanExample": "Mein Bruder sucht Arbeit.",
    "english": "work",
    "englishExample": "My brother is looking for work.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-166",
    "index": 166,
    "german": "arbeitslos",
    "germanExample": "Es gibt bei uns viele Leute, die schon lange arbeitslos sind.",
    "english": "unemployed",
    "englishExample": "We have a lot of people who have been unemployed for a long time.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-167",
    "index": 167,
    "german": "der Arbeitsplatz, -ä, e",
    "germanExample": "An meinem Arbeitsplatz fehlt ein Drucker.",
    "english": "workplace",
    "englishExample": "There is no printer at my workplace.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-168",
    "index": 168,
    "german": "der Arm, -e",
    "germanExample": "Mein Arm tut weh.",
    "english": "arm",
    "englishExample": "My arm hurts.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-169",
    "index": 169,
    "german": "der Arzt, -Ä, e",
    "germanExample": "Morgen habe ich einen Termin bei meiner Ärztin.",
    "english": "doctor",
    "englishExample": "Tomorrow I have an appointment with my doctor.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-170",
    "index": 170,
    "german": "auch",
    "germanExample": "Ich bin auch Spanier.",
    "english": "also",
    "englishExample": "I am also Spanish.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-171",
    "index": 171,
    "german": "auf",
    "germanExample": "Die Kinder spielen auf der Straße.",
    "english": "on",
    "englishExample": "The children play on the street.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-172",
    "index": 172,
    "german": "auf",
    "germanExample": "Auf Wiedersehen.",
    "english": "until",
    "englishExample": "goodbye (in person; lit. 'until we see each other again')",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-173",
    "index": 173,
    "german": "auf",
    "germanExample": "Wie heißt das auf Deutsch? / Der Schlüssel ist auf dem Tisch.",
    "english": "in, up, on",
    "englishExample": "What’s that called in German? / The key is on the table.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-174",
    "index": 174,
    "german": "die Aufgabe, -n",
    "germanExample": "Das ist eine schwere Aufgabe.",
    "english": "task",
    "englishExample": "That is a difficult task.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-175",
    "index": 175,
    "german": "aufhören",
    "germanExample": "Der Kurs hört in einer Woche auf.",
    "english": "to end",
    "englishExample": "The course ends in a week.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-176",
    "index": 176,
    "german": "aufhören",
    "germanExample": "Hier hört die Bahnhofstraße auf.",
    "english": "to end",
    "englishExample": "Bahnhofstraße ends here.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-177",
    "index": 177,
    "german": "auf sein",
    "germanExample": "Du brauchst den Schlüssel nicht. Die Wohnung ist auf.",
    "english": "to be open",
    "englishExample": "You don’t need the key. The flat is open.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-178",
    "index": 178,
    "german": "aufstehen",
    "germanExample": "Ich muss immer um vier Uhr aufstehen.",
    "english": "to get up",
    "englishExample": "I always need to get up at 4 am.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-179",
    "index": 179,
    "german": "aufstehen",
    "germanExample": "Soll ich aufstehen?",
    "english": "to get up",
    "englishExample": "Should I get up?",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-180",
    "index": 180,
    "german": "der Aufzug, -ü, e",
    "germanExample": "In diesem Haus gibt es keinen Aufzug.",
    "english": "lift",
    "englishExample": "There is no lift in this building.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-181",
    "index": 181,
    "german": "das Auge, -n",
    "germanExample": "Er hat blaue Augen.",
    "english": "eye",
    "englishExample": "He has blue eyes.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-182",
    "index": 182,
    "german": "aus",
    "germanExample": "Er kommt aus Brasilien.",
    "english": "from",
    "englishExample": "He comes from Brazil.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-183",
    "index": 183,
    "german": "der Ausflug",
    "germanExample": "Morgen machen wir einen Ausflug nach Heidelberg.",
    "english": "excursion",
    "englishExample": "Tomorrow we are going on an excursion to Heidelberg.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-184",
    "index": 184,
    "german": "ausfüllen",
    "germanExample": "Füllen Sie bitte dieses Formular aus.",
    "english": "to fill out",
    "englishExample": "Please fill out this form.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-185",
    "index": 185,
    "german": "der Ausgang",
    "germanExample": "Wo ist der Ausgang?",
    "english": "exit",
    "englishExample": "Where is the exit?",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-186",
    "index": 186,
    "german": "die Auskunft, -ü, e",
    "germanExample": "Können Sie mir eine Auskunft geben?",
    "english": "information/details",
    "englishExample": "Can you give me some information?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-187",
    "index": 187,
    "german": "das Ausland",
    "germanExample": "Fahren Sie ins Ausland?",
    "english": "abroad/overseas",
    "englishExample": "Do you travel abroad?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-188",
    "index": 188,
    "german": "der Ausländer, - / die Ausländerin -nen",
    "germanExample": "Sind Sie Ausländerin?",
    "english": "foreigner",
    "englishExample": "Are you a foreigner? (A little offensive.)",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-189",
    "index": 189,
    "german": "ausländisch",
    "germanExample": "Leider habe ich nur ausländisches Geld.",
    "english": "foreign",
    "englishExample": "Unfortunately I only have foreign money.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-190",
    "index": 190,
    "german": "ausmachen",
    "germanExample": "Mach bitte das Licht aus!",
    "english": "to switch off",
    "englishExample": "Please switch off the light!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-191",
    "index": 191,
    "german": "die Aussage, -n",
    "germanExample": "Ist die Aussage richtig oder falsch?",
    "english": "statement",
    "englishExample": "Is the statement true or false?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-192",
    "index": 192,
    "german": "aussehen",
    "germanExample": "Das sieht schön aus.",
    "english": "to look",
    "englishExample": "That looks beautiful.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-193",
    "index": 193,
    "german": "aus sein",
    "germanExample": "Das Licht ist aus.",
    "english": "to be (switched) off",
    "englishExample": "The light is off.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-194",
    "index": 194,
    "german": "aus sein",
    "germanExample": "Die Schule ist aus.",
    "english": "to be out",
    "englishExample": "School is out.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-195",
    "index": 195,
    "german": "aussteigen",
    "germanExample": "Wo muss ich aussteigen?",
    "english": "to get off, to alight, to disembark",
    "englishExample": "Where do I need to get off?",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-196",
    "index": 196,
    "german": "der Ausweis",
    "germanExample": "Hier ist mein Ausweis.",
    "english": "identity card",
    "englishExample": "Here is my identity card.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-197",
    "index": 197,
    "german": "ausziehen",
    "germanExample": "Zieh die Schuhe aus, bitte!",
    "english": "to take off",
    "englishExample": "Please take off your shoes!",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-198",
    "index": 198,
    "german": "sich ausziehen",
    "germanExample": "Ich ziehe mich aus.",
    "english": "to get undressed",
    "englishExample": "I am getting undressed.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-199",
    "index": 199,
    "german": "das Auto, -s",
    "germanExample": "Er kommt mit dem Auto.",
    "english": "car",
    "englishExample": "He’s coming by car.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-200",
    "index": 200,
    "german": "die Autobahn, -en",
    "germanExample": "Wo geht‘s hier bitte zur Autobahn?",
    "english": "motorway",
    "englishExample": "How do I get to the motorway?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-201",
    "index": 201,
    "german": "der Automat",
    "germanExample": "Die Fahrkarten gibt es nur am Automaten.",
    "english": "(vending) machine",
    "englishExample": "Tickets are only available from the machine.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-202",
    "index": 202,
    "german": "automatisch",
    "germanExample": "Du musst nichts machen. Das geht automatisch.",
    "english": "automatic",
    "englishExample": "You don’t need to do anything. It's automatic.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-203",
    "index": 203,
    "german": "das Baby, -s",
    "germanExample": "Mein Kind ist noch ein Baby.",
    "english": "baby",
    "englishExample": "My child is still a baby.",
    "category": "family",
    "article": "das"
  },
  {
    "id": "card-204",
    "index": 204,
    "german": "die Bäckerei",
    "germanExample": "Ich geh mal schnell zur Bäckerei.",
    "english": "bakery",
    "englishExample": "I’m just popping to the bakery.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-205",
    "index": 205,
    "german": "das Bad",
    "germanExample": "Wir haben kein großes Bad.",
    "english": "bath, bathroom",
    "englishExample": "We don’t have a large bathroom.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-206",
    "index": 206,
    "german": "baden",
    "germanExample": "Ich bade nicht so gern, ich dusche lieber.",
    "english": "to bathe",
    "englishExample": "I don’t like bathing so much, I prefer to shower.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-207",
    "index": 207,
    "german": "die Bahn",
    "germanExample": "Wir fahren lieber mit der Bahn.",
    "english": "train",
    "englishExample": "We prefer to travel by train.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-208",
    "index": 208,
    "german": "die Bahn",
    "germanExample": "Ich nehme die nächste Bahn.",
    "english": "train",
    "englishExample": "I’ll take the next train.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-209",
    "index": 209,
    "german": "der Bahnhof",
    "germanExample": "Komme ich hier zum Bahnhof?",
    "english": "train station",
    "englishExample": "Is this the way to the train station?",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-210",
    "index": 210,
    "german": "der Bahnsteig",
    "germanExample": "Auf welchem Bahnsteig fährt der Zug?",
    "english": "platform",
    "englishExample": "From which platform does the train depart?",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-211",
    "index": 211,
    "german": "bald",
    "germanExample": "Ich komme bald.",
    "english": "soon",
    "englishExample": "I’m coming soon.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-212",
    "index": 212,
    "german": "der Balkon",
    "germanExample": "Die Wohnung hat auch einen kleinen Balkon.",
    "english": "balcony",
    "englishExample": "The flat also has a small balcony.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-213",
    "index": 213,
    "german": "die Banane, -n",
    "germanExample": "Drei Bananen, bitte!",
    "english": "banana",
    "englishExample": "Three bananas, please!",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-214",
    "index": 214,
    "german": "die Bank",
    "germanExample": "Die Bank schließt schon um vier Uhr.",
    "english": "bank",
    "englishExample": "The bank closes at 4 pm already.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-215",
    "index": 215,
    "german": "die Bank",
    "germanExample": "Er sitzt im Park auf einer Bank und liest.",
    "english": "bench",
    "englishExample": "He’s sits in the park on a bench and reads.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-216",
    "index": 216,
    "german": "bar",
    "germanExample": "Muss ich bar zahlen oder geht‘s auch mit Karte?",
    "english": "cash",
    "englishExample": "Do I have to pay in cash, or can I also pay by card?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-217",
    "index": 217,
    "german": "der Bauch",
    "germanExample": "Seit gestern tut mir der Bauch weh.",
    "english": "stomach",
    "englishExample": "My stomach has been hurting since yesterday.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-218",
    "index": 218,
    "german": "der Baum, -ä, e",
    "germanExample": "Vorsicht, fahr nicht an den Baum!",
    "english": "tree",
    "englishExample": "Careful, don’t drive into the tree!",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-219",
    "index": 219,
    "german": "der Beamte, -n",
    "germanExample": "Fragen Sie die Beamtin an Schalter acht!",
    "english": "official",
    "englishExample": "Ask the official at counter eight!",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-220",
    "index": 220,
    "german": "bedeuten",
    "germanExample": "Was bedeutet das Wort?",
    "english": "to mean",
    "englishExample": "What does that word mean?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-221",
    "index": 221,
    "german": "beginnen",
    "germanExample": "Das Spiel beginnt um 15.30 Uhr.",
    "english": "to begin",
    "englishExample": "The game begins at 3:30 pm.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-222",
    "index": 222,
    "german": "bei",
    "germanExample": "Offenbach liegt bei Frankfurt.",
    "english": "next to",
    "englishExample": "Offenbach is next to Frankfurt.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-223",
    "index": 223,
    "german": "bei",
    "germanExample": "Ich wohne bei meinen Eltern.",
    "english": "at",
    "englishExample": "I live at my parents’ place.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-224",
    "index": 224,
    "german": "bei uns",
    "germanExample": "Bei uns regnet es heute.",
    "english": "here / where we are",
    "englishExample": "It is raining here today. (bei uns = set phrase)",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-225",
    "index": 225,
    "german": "bei",
    "germanExample": "Er arbeitet bei der Polizei.",
    "english": "for",
    "englishExample": "He works for the police.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-226",
    "index": 226,
    "german": "beide",
    "germanExample": "Beide Eltern arbeiten.",
    "english": "both",
    "englishExample": "Both parents work.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-227",
    "index": 227,
    "german": "beide",
    "germanExample": "Wir kommen beide.",
    "english": "both",
    "englishExample": "We are both coming.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-228",
    "index": 228,
    "german": "das Bein, -e",
    "germanExample": "Mein rechtes Bein tut weh.",
    "english": "leg",
    "englishExample": "My right leg hurts.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-229",
    "index": 229,
    "german": "das Beispiel, -e",
    "germanExample": "Kannst du mir ein Beispiel sagen?",
    "english": "example",
    "englishExample": "Can you give me an example?",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-230",
    "index": 230,
    "german": "zum Beispiel/z. B.",
    "germanExample": "Viele meiner Verwandten, z. B. meine beiden Brüder, arbeiten auch hier.",
    "english": "for example",
    "englishExample": "Many of my relatives, for example, both of my brothers, also work here.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-231",
    "index": 231,
    "german": "bekannt",
    "germanExample": "Picasso ist sehr bekannt.",
    "english": "well known",
    "englishExample": "Picasso is very well known.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-232",
    "index": 232,
    "german": "der/die Bekannte, -n",
    "germanExample": "Ein Bekannter von mir heißt Klaus.",
    "english": "acquaintance",
    "englishExample": "An acquaintance of mine is called Klaus.",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-233",
    "index": 233,
    "german": "bekommen",
    "germanExample": "Haben Sie meinen Brief bekommen?",
    "english": "to receive",
    "englishExample": "Did you receive my letter?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-234",
    "index": 234,
    "german": "bekommen",
    "germanExample": "Was bekommen Sie?",
    "english": "to have",
    "englishExample": "What will you have? (for food and drink)",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-235",
    "index": 235,
    "german": "bekommen",
    "germanExample": "Dieses Medikament bekommen Sie in der Apotheke.",
    "english": "to get",
    "englishExample": "You can get this medicine in a pharmacy.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-236",
    "index": 236,
    "german": "benutzen",
    "germanExample": "Die Aufzüge bitte nicht benutzen!",
    "english": "to use",
    "englishExample": "Please don’t use the lifts!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-237",
    "index": 237,
    "german": "der Beruf, -e",
    "germanExample": "Was sind Sie von Beruf?",
    "english": "profession",
    "englishExample": "What is your profession?",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-238",
    "index": 238,
    "german": "der Beruf, -e",
    "germanExample": "Was ist Ihr Beruf?",
    "english": "occupation",
    "englishExample": "What is your occupation?",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-239",
    "index": 239,
    "german": "besetzt",
    "germanExample": "Die Nummer ist immer besetzt.",
    "english": "busy",
    "englishExample": "The number is always busy.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-240",
    "index": 240,
    "german": "besetzt",
    "germanExample": "Der Platz ist besetzt.",
    "english": "taken",
    "englishExample": "The seat is taken.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-241",
    "index": 241,
    "german": "besichtigen",
    "germanExample": "Ich möchte gern den Dom besichtigen.",
    "english": "to visit",
    "englishExample": "I would like to visit the cathedral.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-242",
    "index": 242,
    "german": "besser",
    "germanExample": "Es geht mir schon besser.",
    "english": "better",
    "englishExample": "I'm already feeling better.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-243",
    "index": 243,
    "german": "best-",
    "germanExample": "Am besten treffen wir uns morgen.",
    "english": "best",
    "englishExample": "It's best that we meet tomorrow.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-244",
    "index": 244,
    "german": "bestellen",
    "germanExample": "Wir möchten bestellen, bitte.",
    "english": "to order",
    "englishExample": "We would like to order, please.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-245",
    "index": 245,
    "german": "bestellen",
    "germanExample": "Dieses Buch haben wir nicht – sollen wir es für Sie bestellen?",
    "english": "to order",
    "englishExample": "We don’t have this book, should we order it for you?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-246",
    "index": 246,
    "german": "besuchen",
    "germanExample": "Darf ich dich besuchen?",
    "english": "to visit",
    "englishExample": "May I visit you?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-247",
    "index": 247,
    "german": "das Bett, -en",
    "germanExample": "Wir brauchen noch ein Kinderbett.",
    "english": "bed",
    "englishExample": "We need another children’s bed.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-248",
    "index": 248,
    "german": "bezahlen",
    "germanExample": "Wo muss ich bezahlen?",
    "english": "to pay",
    "englishExample": "Where do I need to pay?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-249",
    "index": 249,
    "german": "das Bier",
    "germanExample": "Noch ein Bier bitte.",
    "english": "beer",
    "englishExample": "Another beer, please.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-250",
    "index": 250,
    "german": "das Bild, -er",
    "germanExample": "Hast du ein Bild von deinem Sohn?",
    "english": "picture",
    "englishExample": "Do you have a picture of your son?",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-251",
    "index": 251,
    "german": "billig",
    "germanExample": "Die Jacke kostet nur 10 Euro! Die ist aber billig!",
    "english": "cheap",
    "englishExample": "The jacket only costs 10 euros! That’s cheap!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-252",
    "index": 252,
    "german": "die Birne, -n",
    "germanExample": "Ein Kilo Birnen, bitte!",
    "english": "pear",
    "englishExample": "One kilogram of pears, please!",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-253",
    "index": 253,
    "german": "bis",
    "germanExample": "Ich fahre nur bis Stuttgart.",
    "english": "to (as far as)",
    "englishExample": "I’m only travelling to Stuttgart.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-254",
    "index": 254,
    "german": "bis",
    "germanExample": "Ich warte bis morgen.",
    "english": "until",
    "englishExample": "I will wait until tomorrow.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-255",
    "index": 255,
    "german": "bisschen",
    "germanExample": "Ich spreche Englisch, Französisch und ein bisschen Deutsch.",
    "english": "(a) little",
    "englishExample": "I speak English, French, and a little German.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-256",
    "index": 256,
    "german": "bitte",
    "germanExample": "Eine Tasse Kaffee, bitte!",
    "english": "please",
    "englishExample": "A cup of coffee, please!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-257",
    "index": 257,
    "german": "bitte",
    "germanExample": "Sprechen Sie bitte leise!",
    "english": "please",
    "englishExample": "Please speak softly!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-258",
    "index": 258,
    "german": "die Bitte, -n",
    "germanExample": "Ich habe noch eine Bitte.",
    "english": "request",
    "englishExample": "I have one more request.",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-259",
    "index": 259,
    "german": "bitten",
    "germanExample": "Darf ich Sie um etwas bitten?",
    "english": "to ask",
    "englishExample": "May I ask something of you?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-260",
    "index": 260,
    "german": "bitter",
    "germanExample": "Der Kaffee schmeckt bitter.",
    "english": "bitter",
    "englishExample": "The coffee tastes bitter.",
    "category": "food",
    "article": null
  },
  {
    "id": "card-261",
    "index": 261,
    "german": "bleiben",
    "germanExample": "Ich bleibe heute zu Hause.",
    "english": "to stay",
    "englishExample": "I'm staying home today.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-262",
    "index": 262,
    "german": "bleiben",
    "germanExample": "Wir bleiben nur bis morgen.",
    "english": "to stay",
    "englishExample": "We are only staying until tomorrow.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-263",
    "index": 263,
    "german": "der Bleistift, -e",
    "germanExample": "Hast du einen Bleistift?",
    "english": "pencil",
    "englishExample": "Do you have a pencil?",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-264",
    "index": 264,
    "german": "der Blick",
    "germanExample": "Von diesem Hotel hat man einen guten Blick auf den Rhein.",
    "english": "view",
    "englishExample": "From this hotel you have a good view of the Rhine.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-265",
    "index": 265,
    "german": "die Blume, -n",
    "germanExample": "Gefallen dir die Blumen?",
    "english": "flower",
    "englishExample": "Do you like the flowers?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-266",
    "index": 266,
    "german": "der Bogen",
    "germanExample": "Schreiben Sie Ihre Lösungen bitte auf den Antwortbogen.",
    "english": "sheet",
    "englishExample": "Write your solutions on the answer sheet.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-267",
    "index": 267,
    "german": "böse",
    "germanExample": "Sie ist böse auf mich.",
    "english": "angry",
    "englishExample": "She is angry with me.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-268",
    "index": 268,
    "german": "brauchen",
    "germanExample": "Brauchst du die Zeitung noch?",
    "english": "to need",
    "englishExample": "Do you still need the newspaper?",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-269",
    "index": 269,
    "german": "breit",
    "germanExample": "Wie breit ist der Schrank?",
    "english": "wide",
    "englishExample": "How wide is the cupboard?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-270",
    "index": 270,
    "german": "der Brief, -e",
    "germanExample": "Haben Sie einen Brief für mich?",
    "english": "letter",
    "englishExample": "Do you have a letter for me?",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-271",
    "index": 271,
    "german": "die Briefmarke, -n",
    "germanExample": "Kaufst du bitte Briefmarken bei der Post?",
    "english": "(postage) stamp",
    "englishExample": "Could you please buy stamps at the post office?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-272",
    "index": 272,
    "german": "bringen",
    "germanExample": "Bringen Sie mir bitte noch einen Kaffee!",
    "english": "to bring",
    "englishExample": "Please bring me another coffee!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-273",
    "index": 273,
    "german": "bringen",
    "germanExample": "Wir müssen ihn zum Arzt bringen.",
    "english": "to take",
    "englishExample": "We need to take him to the doctor.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-274",
    "index": 274,
    "german": "das Brot, -e",
    "germanExample": "Haben Sie auch Weißbrot?",
    "english": "bread",
    "englishExample": "Do you have white bread, too?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-275",
    "index": 275,
    "german": "das Brot, -e",
    "germanExample": "Nimm noch ein paar Brote für die Fahrt mit.",
    "english": "bread",
    "englishExample": "Take another couple of loaves of bread for the journey.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-276",
    "index": 276,
    "german": "das Brötchen, –",
    "germanExample": "Möchtest du Brötchen zum Frühstück?",
    "english": "bread roll",
    "englishExample": "Would you like bread rolls for breakfast?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-277",
    "index": 277,
    "german": "der Bruder, -ü",
    "germanExample": "Sein Bruder arbeitet auch hier.",
    "english": "brother",
    "englishExample": "His brother also works here.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-278",
    "index": 278,
    "german": "das Buch, -ü, er",
    "germanExample": "Gute Bücher sind oft sehr teuer.",
    "english": "book",
    "englishExample": "Good books are often very expensive.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-279",
    "index": 279,
    "german": "das Wörterbuch, -ü, er",
    "germanExample": "In diesem Wörterbuch finden Sie mehr als 20.000 Wörter.",
    "english": "dictionary",
    "englishExample": "You will find more than 20,000 words in this dictionary.",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-280",
    "index": 280,
    "german": "der Buchstabe, -n",
    "germanExample": "Diesen Buchstaben gibt es in meiner Sprache nicht.",
    "english": "letter (character)",
    "englishExample": "We don't have this letter in my language.",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-281",
    "index": 281,
    "german": "buchstabieren",
    "germanExample": "Bitte buchstabieren Sie Ihren Namen.",
    "english": "to spell",
    "englishExample": "Please spell your name.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-282",
    "index": 282,
    "german": "der Bus, -se",
    "germanExample": "Wann kommt der nächste Bus?",
    "english": "bus",
    "englishExample": "When does the next bus arrive?",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-283",
    "index": 283,
    "german": "die Butter",
    "germanExample": "Für mich bitte ein Brötchen mit Butter und Käse.",
    "english": "butter",
    "englishExample": "A bread roll with butter and cheese for me, please.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-284",
    "index": 284,
    "german": "das Café, -s",
    "germanExample": "Sollen wir uns im Café treffen?",
    "english": "cafe",
    "englishExample": "Should we meet at the cafe?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-285",
    "index": 285,
    "german": "die CD, -s",
    "germanExample": "Bring bitte deine Lieblings-CD mit.",
    "english": "CD",
    "englishExample": "Please bring your favourite CD with you.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-286",
    "index": 286,
    "german": "der Chef -s / die Chefin -nen",
    "germanExample": "Wir haben eine neue Chefin.",
    "english": "boss",
    "englishExample": "We have a new boss.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-287",
    "index": 287,
    "german": "circa/ca.",
    "germanExample": "Von Mainz nach Frankfurt sind es circa fünfzig Kilometer.",
    "english": "approximately",
    "englishExample": "From Mainz to Frankfurt it is approximately 50 kilometres.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-288",
    "index": 288,
    "german": "der Computer, –",
    "germanExample": "Wann bekommst du deinen neuen Computer?",
    "english": "computer",
    "englishExample": "When are you getting your new computer?",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-289",
    "index": 289,
    "german": "da",
    "germanExample": "Da hinten ist er ja.",
    "english": "there",
    "englishExample": "He’s back there.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-290",
    "index": 290,
    "german": "da",
    "germanExample": "Wir sprechen gerade über Paul. Da kommt er ja gerade.",
    "english": "here",
    "englishExample": "We are talking about Paul. Here he comes now.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-291",
    "index": 291,
    "german": "da",
    "germanExample": "Ich nehme das da.",
    "english": "there",
    "englishExample": "I’ll take that there.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-292",
    "index": 292,
    "german": "da",
    "germanExample": "Ist Herr Klein schon da?",
    "english": "here",
    "englishExample": "Is Mr Klein already here?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-293",
    "index": 293,
    "german": "die Dame, -n",
    "germanExample": "Damen (an der Toilette)",
    "english": "lady",
    "englishExample": "Ladies (toilet sign)",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-294",
    "index": 294,
    "german": "die Dame, -n",
    "germanExample": "Sehr geehrte Damen und Herren!",
    "english": "lady",
    "englishExample": "Ladies and gentlemen!",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-295",
    "index": 295,
    "german": "daneben",
    "germanExample": "Du kennst doch die Post. Daneben ist die Bank.",
    "english": "next to it",
    "englishExample": "You do know the post office. The bank is next to it.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-296",
    "index": 296,
    "german": "danken",
    "germanExample": "Ich danke Ihnen für die Einladung.",
    "english": "to thank",
    "englishExample": "I thank you for the invitation.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-297",
    "index": 297,
    "german": "der Dank",
    "germanExample": "Vielen Dank!",
    "english": "thanks",
    "englishExample": "Many thanks!",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-298",
    "index": 298,
    "german": "der Dank",
    "germanExample": "Herzlichen Dank!",
    "english": "thanks",
    "englishExample": "Thank you very much!",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-299",
    "index": 299,
    "german": "danke",
    "germanExample": "Soll ich Ihnen helfen? / Nein, danke!",
    "english": "thank you",
    "englishExample": "Can I help you? / No thank you!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-300",
    "index": 300,
    "german": "dann",
    "germanExample": "Ich muss noch schnell zur Post, dann komme ich.",
    "english": "then (afterwards)",
    "englishExample": "I still need to pop to the post office, then I’ll come.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-301",
    "index": 301,
    "german": "das Datum",
    "germanExample": "Bitte schreiben Sie noch das Datum auf das Formular.",
    "english": "date",
    "englishExample": "Please write the date on the form.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-302",
    "index": 302,
    "german": "dauern",
    "germanExample": "Wie lange dauert der Film?",
    "english": "to take (duration)",
    "englishExample": "How long is the film?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-303",
    "index": 303,
    "german": "dein-",
    "germanExample": "Ist das dein Auto?",
    "english": "your",
    "englishExample": "Is that your car?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-304",
    "index": 304,
    "german": "dein-",
    "germanExample": "Ist das deins?",
    "english": "yourself",
    "englishExample": "Is that yours?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-305",
    "index": 305,
    "german": "denn",
    "germanExample": "Ich kann nicht kommen, denn ich bin krank.",
    "english": "because",
    "englishExample": "I can’t come because I’m ill.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-306",
    "index": 306,
    "german": "das",
    "germanExample": "Ich nehme das da.",
    "english": "that",
    "englishExample": "I’ll take that there.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-307",
    "index": 307,
    "german": "das",
    "germanExample": "Ich mag das Buch.",
    "english": "the",
    "englishExample": "I like the book.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-308",
    "index": 308,
    "german": "der",
    "germanExample": "Hier ist der Brief, den du suchst.",
    "english": "the",
    "englishExample": "Here is the letter that you’re looking for.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-309",
    "index": 309,
    "german": "die",
    "germanExample": "Die Fahrkarte bekommst du am Bahnhof.",
    "english": "the",
    "englishExample": "You will get the ticket at the train station.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-310",
    "index": 310,
    "german": "dich",
    "germanExample": "Die Blumen sind für dich.",
    "english": "you (accusative)",
    "englishExample": "The flowers are for you.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-311",
    "index": 311,
    "german": "dies-",
    "germanExample": "Ich nehme lieber diesen Kuchen.",
    "english": "this",
    "englishExample": "I’d prefer to have this cake.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-312",
    "index": 312,
    "german": "dir",
    "germanExample": "Gefallen dir die Blumen?",
    "english": "you (dative)",
    "englishExample": "Do you like the flowers? / (Are the flowers pleasing to you?)",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-313",
    "index": 313,
    "german": "die Disco",
    "germanExample": "Heute abend gehen wir in die Disco tanzen.",
    "english": "disco",
    "englishExample": "This evening we’re going dancing in the disco.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-314",
    "index": 314,
    "german": "der Doktor",
    "germanExample": "Meine Tochter ist krank. Wir gehen zum Doktor.",
    "english": "doctor",
    "englishExample": "My daughter is sick. We are going to the doctor.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-315",
    "index": 315,
    "german": "das Doppelzimmer",
    "germanExample": "Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?",
    "english": "double room",
    "englishExample": "Would you like a double room or a single room?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-316",
    "index": 316,
    "german": "das Dorf, -ö, er",
    "germanExample": "Meine Familie lebt in einem Dorf.",
    "english": "village",
    "englishExample": "My family lives in a village.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-317",
    "index": 317,
    "german": "dort",
    "germanExample": "Dort ist mein Zimmer.",
    "english": "there",
    "englishExample": "There's my room.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-318",
    "index": 318,
    "german": "dorthin",
    "germanExample": "Deine Tasche kannst du dorthin stellen.",
    "english": "there (to that place, in that direction)",
    "englishExample": "You can put your bag there.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-319",
    "index": 319,
    "german": "dorther",
    "germanExample": "Er kommt gerade dorther.",
    "english": "from there",
    "englishExample": "He's just coming from there.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-320",
    "index": 320,
    "german": "draußen",
    "germanExample": "Wollen wir draußen sitzen?",
    "english": "outside",
    "englishExample": "Shall we sit outside? lit. 'do we want to…'",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-321",
    "index": 321,
    "german": "drucken",
    "germanExample": "Bitte drucke das Formular für mich.",
    "english": "to print",
    "englishExample": "Please print the form for me.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-322",
    "index": 322,
    "german": "der Drucker, –",
    "germanExample": "Mein Drucker ist kaputt.",
    "english": "printer",
    "englishExample": "My printer is broken.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-323",
    "index": 323,
    "german": "drücken",
    "germanExample": "Drück hier, dann geht der Computer an.",
    "english": "to press",
    "englishExample": "Press here, then the computer turns on.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-324",
    "index": 324,
    "german": "durch",
    "germanExample": "Am besten gehen Sie durch die Breite Straße.",
    "english": "through",
    "englishExample": "It's best to go through Breite Straße.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-325",
    "index": 325,
    "german": "die Durchsage, -n",
    "germanExample": "Ich habe die Durchsage nicht verstanden.",
    "english": "announcement",
    "englishExample": "I didn’t understand the announcement.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-326",
    "index": 326,
    "german": "dürfen",
    "germanExample": "Sie dürfen hier nicht rauchen.",
    "english": "to be allowed; may",
    "englishExample": "You are not allowed to smoke here.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-327",
    "index": 327,
    "german": "dürfen",
    "germanExample": "Darf ich Sie zu einem Kaffee einladen?",
    "english": "to be allowed; may",
    "englishExample": "May I invite you for a coffee?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-328",
    "index": 328,
    "german": "dürfen",
    "germanExample": "Es darf nicht mehr als 15 Euro kosten.",
    "english": "to be allowed; may",
    "englishExample": "It may not cost more than 15 euros.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-329",
    "index": 329,
    "german": "der Durst",
    "germanExample": "Hast du etwas zu trinken? Ich habe großen Durst.",
    "english": "thirst",
    "englishExample": "Do you have anything to drink? I’m very thirsty.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-330",
    "index": 330,
    "german": "(sich) duschen",
    "germanExample": "Ich bade nicht so gern, ich dusche lieber.",
    "english": "to shower",
    "englishExample": "I don’t like bathing so much, I prefer to shower.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-331",
    "index": 331,
    "german": "die Dusche",
    "germanExample": "Unsere Wohnung hat nur eine Dusche.",
    "english": "shower",
    "englishExample": "Our flat only has a shower.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-332",
    "index": 332,
    "german": "die Ecke, -n",
    "germanExample": "An der nächsten Ecke links.",
    "english": "corner",
    "englishExample": "Left at the next corner.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-333",
    "index": 333,
    "german": "die Ehefrau, -en",
    "germanExample": "Das ist meine (Ehe-) Frau.",
    "english": "wife",
    "englishExample": "That is my wife.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-334",
    "index": 334,
    "german": "der Ehemann, ä, er",
    "germanExample": "Das ist mein (Ehe-) Mann.",
    "english": "husband",
    "englishExample": "That is my husband.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-335",
    "index": 335,
    "german": "das Ei, -er",
    "germanExample": "Möchtest du ein Ei zum Frühstück?",
    "english": "egg",
    "englishExample": "Would you like an egg for breakfast?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-336",
    "index": 336,
    "german": "eilig",
    "germanExample": "Hast du es eilig?",
    "english": "… Are you in a hurry?",
    "englishExample": "es eilig haben = to be in a rush/hurry",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-337",
    "index": 337,
    "german": "ein-",
    "germanExample": "Ich nehme ein Bier. Willst du auch eins?",
    "english": "one / a",
    "englishExample": "I’ll have a beer. Do you want one, too?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-338",
    "index": 338,
    "german": "ein-",
    "germanExample": "Ist hier einer, der das kann?",
    "english": "someone",
    "englishExample": "Is there someone here who can do that? alt: 'Ist hier jemand…'",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-339",
    "index": 339,
    "german": "einfach",
    "germanExample": "Die Prüfung ist ganz einfach.",
    "english": "simple",
    "englishExample": "The test is very simple.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-340",
    "index": 340,
    "german": "einfach",
    "germanExample": "Hin und zurück? / Nein, bitte nur einfach.",
    "english": "easy, simple, simply, just",
    "englishExample": "a single (ticket) Return? / No, just a single, please.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-341",
    "index": 341,
    "german": "einfach",
    "germanExample": "Ich brauche nur ein einfaches Zimmer.",
    "english": "easy, simple, simply, just",
    "englishExample": "I just need a simple room.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-342",
    "index": 342,
    "german": "der Eingang",
    "germanExample": "Der Eingang ist um die Ecke.",
    "english": "entrance",
    "englishExample": "The entrance is round the corner.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-343",
    "index": 343,
    "german": "einkaufen",
    "germanExample": "Ich muss noch für morgen einkaufen.",
    "english": "to go shopping",
    "englishExample": "I still need to go shopping for tomorrow.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-344",
    "index": 344,
    "german": "einladen",
    "germanExample": "Darf ich Sie zu einem Kaffee einladen?",
    "english": "to invite / treat",
    "englishExample": "May I treat you to a coffee?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-345",
    "index": 345,
    "german": "die Einladung",
    "germanExample": "Danke für die Einladung!",
    "english": "invitation",
    "englishExample": "Thank you for the invitation!",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-346",
    "index": 346,
    "german": "noch einmal",
    "germanExample": "Diese Prüfung mache ich nicht noch einmal.",
    "english": "again",
    "englishExample": "I will not take this exam again.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-347",
    "index": 347,
    "german": "einmal",
    "germanExample": "Sie dürfen diese Prüfung nur einmal machen.",
    "english": "once",
    "englishExample": "You may only take this exam once.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-348",
    "index": 348,
    "german": "einsteigen",
    "germanExample": "Schnell, steig ein, der Zug fährt gleich.",
    "english": "to get on (board)",
    "englishExample": "Quick, get on, the train is about to leave!",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-349",
    "index": 349,
    "german": "der Eintritt",
    "germanExample": "Der Preis für den Eintritt ist 5 Euro.",
    "english": "entry",
    "englishExample": "The price for entry is 5 euros.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-350",
    "index": 350,
    "german": "das Einzelzimmer",
    "germanExample": "Haben Sie noch ein Einzelzimmer?",
    "english": "single room",
    "englishExample": "Do you have another single room?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-351",
    "index": 351,
    "german": "die Eltern (pl.)",
    "germanExample": "Meine Eltern leben in Spanien.",
    "english": "parents",
    "englishExample": "My parents live in spain.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-352",
    "index": 352,
    "german": "die E-Mail, -s",
    "germanExample": "Ich habe Ihre E-Mail nicht bekommen.",
    "english": "email",
    "englishExample": "I didn’t receive your email.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-353",
    "index": 353,
    "german": "der Empfänger, –",
    "germanExample": "Auf dem Brief steht dein Name, also bist du der Empfänger.",
    "english": "recipient",
    "englishExample": "Your name is on the letter, therefore you are the recipient.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-354",
    "index": 354,
    "german": "empfehlen",
    "germanExample": "Welchen Wein können Sie mir empfehlen?",
    "english": "to recommend",
    "englishExample": "Which wine can you recommend to me?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-355",
    "index": 355,
    "german": "enden",
    "germanExample": "Die Straße endet hier.",
    "english": "to end",
    "englishExample": "The street ends here.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-356",
    "index": 356,
    "german": "das Ende",
    "germanExample": "Sie wohnt am Ende der Straße.",
    "english": "end",
    "englishExample": "She lives at the end of the street.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-357",
    "index": 357,
    "german": "das Ende",
    "germanExample": "Er bekommt sein Geld am Ende des Monats.",
    "english": "end",
    "englishExample": "He gets his money at the end of the month.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-358",
    "index": 358,
    "german": "entschuldigen",
    "germanExample": "Entschuldigen Sie bitte!",
    "english": "to excuse",
    "englishExample": "Excuse me, please!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-359",
    "index": 359,
    "german": "die Entschuldigung",
    "germanExample": "Entschuldigung! / Bitte.",
    "english": "… Excuse me! / Sure.",
    "englishExample": "",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-360",
    "index": 360,
    "german": "er",
    "germanExample": "Er heißt Ali.",
    "english": "he",
    "englishExample": "He’s called Ali.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-361",
    "index": 361,
    "german": "das Ergebnis, -se",
    "germanExample": "Das Ergebnis des Tests bekommen Sie in zwei Wochen.",
    "english": "result",
    "englishExample": "You will receive the test results in two weeks.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-362",
    "index": 362,
    "german": "erklären",
    "germanExample": "Kannst du mir das erklären?",
    "english": "to explain",
    "englishExample": "Can you explain that to me?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-363",
    "index": 363,
    "german": "erlauben",
    "germanExample": "Rauchen ist hier nicht erlaubt.",
    "english": "allow",
    "englishExample": "Smoking is not allowed here.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-364",
    "index": 364,
    "german": "der Erwachsene, -n",
    "germanExample": "Dieser Film ist nur für Erwachsene.",
    "english": "adult",
    "englishExample": "This film is for adults only.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-365",
    "index": 365,
    "german": "erzählen",
    "germanExample": "Wir müssen euch etwas erzählen!",
    "english": "to tell",
    "englishExample": "We need to tell you something!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-366",
    "index": 366,
    "german": "es",
    "germanExample": "Es regnet.",
    "english": "it",
    "englishExample": "It’s raining.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-367",
    "index": 367,
    "german": "essen",
    "germanExample": "Was gibt es zu essen?",
    "english": "to eat",
    "englishExample": "What is there to eat?",
    "category": "food",
    "article": null
  },
  {
    "id": "card-368",
    "index": 368,
    "german": "das Essen",
    "germanExample": "Das Essen ist heute sehr gut.",
    "english": "food",
    "englishExample": "The food is very good today.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-369",
    "index": 369,
    "german": "euer",
    "germanExample": "Euer Kurs beginnt heute.",
    "english": "your [pl.]",
    "englishExample": "Your course begins today.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-370",
    "index": 370,
    "german": "fahren",
    "germanExample": "Ich fahre mit dem Auto zur Arbeit.",
    "english": "to travel",
    "englishExample": "I go to work by car.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-371",
    "index": 371,
    "german": "der Fahrer",
    "germanExample": "Bitte nicht mit dem Fahrer sprechen!",
    "english": "driver",
    "englishExample": "Please do not speak to the driver!",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-372",
    "index": 372,
    "german": "die Fahrkarte, -n",
    "germanExample": "Hast du schon eine Fahrkarte?",
    "english": "(transport) ticket",
    "englishExample": "Do you already have a ticket?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-373",
    "index": 373,
    "german": "das Fahrrad, -ä, er",
    "germanExample": "Fährst du mit dem Fahrrad oder mit dem Auto?",
    "english": "bicycle",
    "englishExample": "Do you travel by bike or by car?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-374",
    "index": 374,
    "german": "falsch",
    "germanExample": "Das ist falsch.",
    "english": "wrong / incorrect",
    "englishExample": "That is wrong.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-375",
    "index": 375,
    "german": "die Familie, -n",
    "germanExample": "Meine Familie lebt in Spanien.",
    "english": "family",
    "englishExample": "My family lives in Spain.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-376",
    "index": 376,
    "german": "der Familienname",
    "germanExample": "Meine Familiennamen sind García González.",
    "english": "surname",
    "englishExample": "My surname is García González.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-377",
    "index": 377,
    "german": "der Familienstand",
    "germanExample": "Bei „Familienstand' musst du „ledig' ankreuzen.",
    "english": "family/marital status",
    "englishExample": "Under 'family status' you have to tick 'single'.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-378",
    "index": 378,
    "german": "die Farbe, -n",
    "germanExample": "Die Farbe gefällt mir gut.",
    "english": "colour",
    "englishExample": "I like the colour.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-379",
    "index": 379,
    "german": "das Fax, -e",
    "germanExample": "Schicken Sie uns einfach ein Fax!",
    "english": "fax",
    "englishExample": "Just send us a fax!",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-380",
    "index": 380,
    "german": "der Feierabend",
    "germanExample": "Wir machen jetzt Feierabend.",
    "english": "end of work/home time",
    "englishExample": "We are calling it a day now. / We are finishing work for the day now. … machen = set phrase for the end of work/home time",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-381",
    "index": 381,
    "german": "der Feiertag",
    "germanExample": "Am Montag ist Feiertag.",
    "english": "bank holiday",
    "englishExample": "Monday is a bank holiday.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-382",
    "index": 382,
    "german": "feiern",
    "germanExample": "Wir feiern heute meinen Geburtstag.",
    "english": "to celebrate",
    "englishExample": "Today we are celebrating my birthday.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-383",
    "index": 383,
    "german": "fehlen",
    "germanExample": "Herr Müller ist nicht da, er fehlt schon seit drei Tagen.",
    "english": "to be absent",
    "englishExample": "Mr Müller is not here, he’s been absent for three days.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-384",
    "index": 384,
    "german": "fehlen",
    "germanExample": "Was fehlt Ihnen?",
    "english": "to be missing",
    "englishExample": "What are you missing?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-385",
    "index": 385,
    "german": "der Fehler, –",
    "germanExample": "Diesen Fehler mache ich immer.",
    "english": "mistake",
    "englishExample": "I always make this mistake.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-386",
    "index": 386,
    "german": "fernsehen",
    "germanExample": "Wollen wir heute Abend mal fernsehen?",
    "english": "to watch TV",
    "englishExample": "Shall we watch TV this evening? lit. 'do we want to…'",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-387",
    "index": 387,
    "german": "fertig",
    "germanExample": "Bist du fertig?",
    "english": "finished / ready / done",
    "englishExample": "Are you done?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-388",
    "index": 388,
    "german": "fertig",
    "germanExample": "Ist mein Auto schon fertig?",
    "english": "finished / ready / done",
    "englishExample": "Is my car already finished?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-389",
    "index": 389,
    "german": "das Feuer",
    "germanExample": "Haben Sie Feuer?",
    "english": "fire / lighter",
    "englishExample": "Do you have a light?",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-390",
    "index": 390,
    "german": "das Fieber",
    "germanExample": "Mein Mann hat noch immer Fieber.",
    "english": "fever",
    "englishExample": "My husband still has a fever.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-391",
    "index": 391,
    "german": "der Film, -e",
    "germanExample": "Ich möchte gern diesen Film sehen.",
    "english": "film",
    "englishExample": "I would like to see this film.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-392",
    "index": 392,
    "german": "finden",
    "germanExample": "Wir müssen den Schlüssel finden.",
    "english": "to find",
    "englishExample": "We must find the key.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-393",
    "index": 393,
    "german": "die Firma",
    "germanExample": "Er arbeitet jetzt bei einer anderen Firma.",
    "english": "company",
    "englishExample": "He works for another company now.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-394",
    "index": 394,
    "german": "der Fisch, -e",
    "germanExample": "Ich esse gern Fisch. Fleisch mag ich nicht.",
    "english": "fish",
    "englishExample": "I like to eat fish. I don’t like meat.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-395",
    "index": 395,
    "german": "die Flasche, -n",
    "germanExample": "Eine Flasche Bier, bitte.",
    "english": "bottle",
    "englishExample": "A bottle of beer, please.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-396",
    "index": 396,
    "german": "das Fleisch",
    "germanExample": "Fleisch mag ich nicht.",
    "english": "meat",
    "englishExample": "I don’t like meat.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-397",
    "index": 397,
    "german": "fliegen",
    "germanExample": "Ich fliege nicht gern. Deshalb fahre ich mit dem Zug.",
    "english": "to fly",
    "englishExample": "I don’t like to fly. That's why I travel by train.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-398",
    "index": 398,
    "german": "abfliegen",
    "germanExample": "Wann fliegst du ab?",
    "english": "to depart (by air)",
    "englishExample": "When do you depart?",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-399",
    "index": 399,
    "german": "der Abflug",
    "germanExample": "Der Abflug ist um 11.20 Uhr.",
    "english": "(flight) departure",
    "englishExample": "Departure is at 11:20 am.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-400",
    "index": 400,
    "german": "der Flughafen",
    "germanExample": "Kannst du mich zum Flughafen bringen?",
    "english": "airport",
    "englishExample": "Can you take me to the airport?",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-401",
    "index": 401,
    "german": "das Flugzeug",
    "germanExample": "Das Flugzeug aus Berlin kommt heute später an.",
    "english": "aeroplane",
    "englishExample": "The plane from Berlin will arrive later today.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-402",
    "index": 402,
    "german": "das Formular, -e",
    "germanExample": "Sie müssen dieses Formular ausfüllen.",
    "english": "form",
    "englishExample": "You must fill out this form.",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-403",
    "index": 403,
    "german": "das Foto, -s",
    "germanExample": "Darf ich ein Foto machen?",
    "english": "photograph",
    "englishExample": "May I take a photo?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-404",
    "index": 404,
    "german": "fragen",
    "germanExample": "Er möchte Sie etwas fragen. Wann kommen Sie?",
    "english": "to ask",
    "englishExample": "He wants to ask you something. When are you coming?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-405",
    "index": 405,
    "german": "die Frage, -n",
    "germanExample": "Ich habe eine Frage.",
    "english": "question",
    "englishExample": "I have a question.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-406",
    "index": 406,
    "german": "die Frau",
    "germanExample": "Das ist Frau Becker.",
    "english": "Ms; woman; wife",
    "englishExample": "That is Ms Becker.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-407",
    "index": 407,
    "german": "die Frau",
    "germanExample": "Die Frau da drüben ist Eva Schmitt.",
    "english": "Ms; woman; wife",
    "englishExample": "The woman over there is Eva Schmitt.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-408",
    "index": 408,
    "german": "die Frauen",
    "germanExample": "Hier arbeiten mehr Frauen als Männer.",
    "english": "women",
    "englishExample": "More women work here than men.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-409",
    "index": 409,
    "german": "frei",
    "germanExample": "Ist der Platz noch frei?",
    "english": "free",
    "englishExample": "Is this seat still free?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-410",
    "index": 410,
    "german": "die Freizeit",
    "germanExample": "In meiner Freizeit spiele ich oft Fußball.",
    "english": "free time",
    "englishExample": "I often play football in my free time.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-411",
    "index": 411,
    "german": "fremd",
    "germanExample": "Das weiß ich nicht, ich bin fremd hier.",
    "english": "foreign",
    "englishExample": "I don’t know, I’m not from here.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-412",
    "index": 412,
    "german": "(sich) freuen",
    "germanExample": "Ich freue mich auf den Urlaub.",
    "english": "to look forward",
    "englishExample": "I’m looking forward to the holiday.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-413",
    "index": 413,
    "german": "der Freund, -e",
    "germanExample": "Das ist ein Freund von mir.",
    "english": "friend",
    "englishExample": "That is a friend of mine.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-414",
    "index": 414,
    "german": "die Freundin",
    "germanExample": "Das ist meine Freundin.",
    "english": "friend / girlfriend",
    "englishExample": "That is my friend/girlfriend. (Context differentiates between friend/girlfriend)",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-415",
    "index": 415,
    "german": "früher",
    "germanExample": "Früher waren wir oft zusammen im Kino.",
    "english": "earlier / in the past",
    "englishExample": "In the past we often went to the cinema together.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-416",
    "index": 416,
    "german": "frühstücken",
    "germanExample": "Am Sonntag frühstücke ich gern im Bett.",
    "english": "to have breakfast",
    "englishExample": "On Sunday I like to have breakfast in bed.",
    "category": "food",
    "article": null
  },
  {
    "id": "card-417",
    "index": 417,
    "german": "das Frühstück",
    "germanExample": "Möchtest du ein Ei zum Frühstück?",
    "english": "breakfast",
    "englishExample": "Would you like an egg for breakfast?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-418",
    "index": 418,
    "german": "die Führung",
    "germanExample": "Die Führung durch das Haus beginnt in 3 Minuten.",
    "english": "tour",
    "englishExample": "The tour of the house begins in 3 minutes.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-419",
    "index": 419,
    "german": "für",
    "germanExample": "Das ist für Sie.",
    "english": "for",
    "englishExample": "That's for you.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-420",
    "index": 420,
    "german": "für",
    "germanExample": "Das ist der Schlüssel für die Haustür.",
    "english": "for",
    "englishExample": "That's the key for the front door.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-421",
    "index": 421,
    "german": "für",
    "germanExample": "Das ist das Brot für morgen.",
    "english": "for",
    "englishExample": "That's the bread for tomorrow.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-422",
    "index": 422,
    "german": "der Fuß, -ü, e",
    "germanExample": "Der linke Fuß tut mir weh.",
    "english": "foot",
    "englishExample": "My left foot hurts.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-423",
    "index": 423,
    "german": "der Fußball",
    "germanExample": "Spielt ihr gerne Fußball?",
    "english": "football",
    "englishExample": "Do you like playing football?",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-424",
    "index": 424,
    "german": "der Garten",
    "germanExample": "Wir haben leider keinen Garten.",
    "english": "garden",
    "englishExample": "Unfortunately we don't have a garden.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-425",
    "index": 425,
    "german": "der Gast, -ä, e",
    "germanExample": "Am Wochenende haben wir mehrere Gäste.",
    "english": "guest",
    "englishExample": "At the weekend we have several guests.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-426",
    "index": 426,
    "german": "geben",
    "germanExample": "Kannst du mir bitte deinen Kugelschreiber geben?",
    "english": "to give",
    "englishExample": "Can you give me your pen, please?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-427",
    "index": 427,
    "german": "es gibt",
    "germanExample": "Es gibt keine Karten mehr.",
    "english": "there is/are",
    "englishExample": "There are no more tickets.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-428",
    "index": 428,
    "german": "geboren",
    "germanExample": "Ich bin in Zagreb geboren.",
    "english": "born",
    "englishExample": "I was born in Zagreb.",
    "category": "family",
    "article": null
  },
  {
    "id": "card-429",
    "index": 429,
    "german": "das Geburtsjahr",
    "germanExample": "Das Geburtsjahr Ihres Sohnes, bitte?",
    "english": "birth year",
    "englishExample": "Your son's year of birth, please?",
    "category": "family",
    "article": "das"
  },
  {
    "id": "card-430",
    "index": 430,
    "german": "der Geburtsort",
    "germanExample": "Bitte schreiben Sie Ihren Geburtsort auf das Formular.",
    "english": "birthplace",
    "englishExample": "Please write your birthplace on the form.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-431",
    "index": 431,
    "german": "der Geburtstag",
    "germanExample": "Herzlichen Glückwunsch zum Geburtstag!",
    "english": "birthday",
    "englishExample": "'Best wishes on your birthday!' or simply, 'Happy birthday!'",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-432",
    "index": 432,
    "german": "gefallen",
    "germanExample": "Das gefällt mir.",
    "english": "to like",
    "englishExample": "I like that.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-433",
    "index": 433,
    "german": "gegen",
    "germanExample": "Fahr nicht gegen den Baum!",
    "english": "into; against",
    "englishExample": "Don’t drive into the tree!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-434",
    "index": 434,
    "german": "gegen",
    "germanExample": "Ich bin gegen diese Lösung.",
    "english": "into; against",
    "englishExample": "I am against this solution.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-435",
    "index": 435,
    "german": "gegen",
    "germanExample": "Wer spielt gegen wen?",
    "english": "against",
    "englishExample": "Who is playing against whom?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-436",
    "index": 436,
    "german": "gehen",
    "germanExample": "Ich weiß nicht, wie das geht.",
    "english": "to go/work/function",
    "englishExample": "I don’t know how it works./I don't know how to do that.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-437",
    "index": 437,
    "german": "gehen",
    "germanExample": "Wie geht's?",
    "english": "to go/work/function",
    "englishExample": "How is it going?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-438",
    "index": 438,
    "german": "gehen",
    "germanExample": "Jetzt muss ich (aber) leider gehen.",
    "english": "to go/work/function",
    "englishExample": "Unfortunately I need to go now.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-439",
    "index": 439,
    "german": "gehen",
    "germanExample": "Ich muss zum Arzt gehen.",
    "english": "to go/work/function",
    "englishExample": "I need to go to the doctor.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-440",
    "index": 440,
    "german": "gehen",
    "germanExample": "Das geht nicht!",
    "english": "to be okay",
    "englishExample": "That’s not okay!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-441",
    "index": 441,
    "german": "gehören",
    "germanExample": "Wem gehört das?",
    "english": "to belong",
    "englishExample": "To whom does that belong?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-442",
    "index": 442,
    "german": "das Geld",
    "germanExample": "Hast du noch Geld?",
    "english": "money",
    "englishExample": "Do you still have money?",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-443",
    "index": 443,
    "german": "das Gemüse",
    "germanExample": "Gemüse brauchen wir auch noch.",
    "english": "vegetables",
    "englishExample": "We also need vegetables.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-444",
    "index": 444,
    "german": "das Gepäck",
    "germanExample": "Wollen Sie Ihr Gepäck mitnehmen?",
    "english": "luggage",
    "englishExample": "Do you want to take your luggage with you?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-445",
    "index": 445,
    "german": "gerade",
    "germanExample": "Da kommt er ja gerade.",
    "english": "now",
    "englishExample": "There he comes now.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-446",
    "index": 446,
    "german": "geradeaus",
    "germanExample": "Gehen Sie immer geradeaus!",
    "english": "straight ahead",
    "englishExample": "Keep going straight on!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-447",
    "index": 447,
    "german": "gern(e)",
    "germanExample": "Ich gehe gerne einkaufen.",
    "english": "… I like to go shopping. etwas gern tun = to like doing something",
    "englishExample": "",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-448",
    "index": 448,
    "german": "das Geschäft, -e",
    "germanExample": "Die Geschäfte schließen um 18.30 Uhr.",
    "english": "shop",
    "englishExample": "The shops close at 6:30 pm.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-449",
    "index": 449,
    "german": "das Geschenk, -e",
    "germanExample": "Danke für das schöne Geschenk.",
    "english": "present",
    "englishExample": "Thank you for the beautiful present.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-450",
    "index": 450,
    "german": "die Geschwister (pl.)",
    "germanExample": "Ich habe leider keine Geschwister.",
    "english": "sibling",
    "englishExample": "Unfortunately I have no siblings.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-451",
    "index": 451,
    "german": "das Gespräch, -e",
    "germanExample": "Das Gespräch mit Frau Kunz ist um 14 Uhr.",
    "english": "conversation/talk/call",
    "englishExample": "The conversation with Ms Kunz is at 2 pm.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-452",
    "index": 452,
    "german": "gestern",
    "germanExample": "Gestern war ich krank.",
    "english": "yesterday",
    "englishExample": "Yesterday I was ill.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-453",
    "index": 453,
    "german": "gestorben",
    "germanExample": "Meine Katz ist gestern gestorben.",
    "english": "died",
    "englishExample": "My cat died yesterday.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-454",
    "index": 454,
    "german": "das Getränk, -e",
    "germanExample": "Mein Lieblingsgetränk ist Tomatensaft.",
    "english": "drink",
    "englishExample": "My favourite drink is tomato juice.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-455",
    "index": 455,
    "german": "das Gewicht",
    "germanExample": "Bei „Gewicht“ schreibst du: 62 Kilo.",
    "english": "weight",
    "englishExample": "For 'weight', write 62 kg.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-456",
    "index": 456,
    "german": "gewinnen",
    "germanExample": "Wer gewinnt das Spiel?",
    "english": "to win",
    "englishExample": "Who is winning the game?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-457",
    "index": 457,
    "german": "das Glas, -ä, er",
    "germanExample": "Bitte noch ein Glas Wein!",
    "english": "glass",
    "englishExample": "Another glass of wine, please!",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-458",
    "index": 458,
    "german": "das Glas, -ä, er",
    "germanExample": "Wir brauchen noch drei Gläser.",
    "english": "glasses",
    "englishExample": "We need three more glasses.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-459",
    "index": 459,
    "german": "glauben",
    "germanExample": "Sie können mir glauben, es ist so.",
    "english": "to believe",
    "englishExample": "You can believe me, it’s true.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-460",
    "index": 460,
    "german": "glauben",
    "germanExample": "Ich glaube, er kommt gleich.",
    "english": "to think",
    "englishExample": "I think he’ll be here in a moment.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-461",
    "index": 461,
    "german": "gleich",
    "germanExample": "Das ist mir gleich.",
    "english": "same",
    "englishExample": "It’s all the same to me.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-462",
    "index": 462,
    "german": "gleich",
    "germanExample": "Das ist der gleiche Preis.",
    "english": "same",
    "englishExample": "That is the same price.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-463",
    "index": 463,
    "german": "gleich",
    "germanExample": "Ich komme gleich.",
    "english": "now",
    "englishExample": "I’ll be right there.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-464",
    "index": 464,
    "german": "das Gleis, -e",
    "germanExample": "Der ICE nach Berlin hält heute an Gleis 12.",
    "english": "platform",
    "englishExample": "The ICE to Berlin is stopping on platform 12 today.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-465",
    "index": 465,
    "german": "das Glück",
    "germanExample": "Viel Glück!",
    "english": "luck",
    "englishExample": "Good luck!",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-466",
    "index": 466,
    "german": "glücklich",
    "germanExample": "Meine Kinder sind glücklich verheiratet.",
    "english": "happily",
    "englishExample": "My children are happily married.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-467",
    "index": 467,
    "german": "der Glückwunsch",
    "germanExample": "Herzlichen Glückwunsch zum Geburtstag.",
    "english": "congratulations",
    "englishExample": "Best wishes on your birthday!",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-468",
    "index": 468,
    "german": "Grad (Celsius)",
    "germanExample": "Heute haben wir dreißig Grad.",
    "english": "degrees",
    "englishExample": "Today it is thirty degrees.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-469",
    "index": 469,
    "german": "gratulieren",
    "germanExample": "Ich gratuliere dir!",
    "english": "to congratulate",
    "englishExample": "I congratulate you!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-470",
    "index": 470,
    "german": "grillen",
    "germanExample": "Heute grillen wir im Garten.",
    "english": "to (have a) barbecue",
    "englishExample": "Today we are having a barbecue in the garden.",
    "category": "food",
    "article": null
  },
  {
    "id": "card-471",
    "index": 471,
    "german": "groß",
    "germanExample": "Mein Bruder und ich sind gleich groß.",
    "english": "tall",
    "englishExample": "My brother and I are the same height.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-472",
    "index": 472,
    "german": "groß",
    "germanExample": "Frankfurt ist eine große Stadt.",
    "english": "large",
    "englishExample": "Frankfurt is a large town.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-473",
    "index": 473,
    "german": "die Größe",
    "germanExample": "Haben Sie das auch in Größe 40?",
    "english": "size",
    "englishExample": "Do you also have that in size 40?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-474",
    "index": 474,
    "german": "die Großeltern (pl.)",
    "germanExample": "Meine Großeltern leben in Japan.",
    "english": "grandparents",
    "englishExample": "My grandparents live in Japan.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-475",
    "index": 475,
    "german": "die Großmutter",
    "germanExample": "Meine Großmutter heißt Eva.",
    "english": "grandmother",
    "englishExample": "My grandmother is called Eva.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-476",
    "index": 476,
    "german": "der Großvater",
    "germanExample": "Mein Großvater ist schon 80.",
    "english": "grandfather",
    "englishExample": "My grandfather is already 80.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-477",
    "index": 477,
    "german": "die Gruppe, -n",
    "germanExample": "Die erste Gruppe beginnt um 16 Uhr.",
    "english": "group",
    "englishExample": "The first group begins at 4 pm.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-478",
    "index": 478,
    "german": "der Gruß, -ü, e",
    "germanExample": "Viele Grüße an Ihre Frau.",
    "english": "regards",
    "englishExample": "Give my regards to your wife.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-479",
    "index": 479,
    "german": "der Gruß, -ü, e",
    "germanExample": "Mit freundlichen Grüßen",
    "english": "regards",
    "englishExample": "Kind regards.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-480",
    "index": 480,
    "german": "gültig",
    "germanExample": "Der Pass ist nicht mehr gültig.",
    "english": "valid",
    "englishExample": "The passport is no longer valid.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-481",
    "index": 481,
    "german": "günstig",
    "germanExample": "Dort gibt es günstige Angebote.",
    "english": "cheap",
    "englishExample": "There are cheap offers there.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-482",
    "index": 482,
    "german": "gut",
    "germanExample": "Das finde ich gut.",
    "english": "good",
    "englishExample": "I think that’s good.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-483",
    "index": 483,
    "german": "gut",
    "germanExample": "Ich komme um 13 Uhr. / Gut!",
    "english": "good",
    "englishExample": "I will arrive at 1 pm. / Good!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-484",
    "index": 484,
    "german": "gut",
    "germanExample": "Guten Morgen!",
    "english": "good",
    "englishExample": "Good morning!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-485",
    "index": 485,
    "german": "gut",
    "germanExample": "Ein gutes neues Jahr!",
    "english": "… Happy new year!",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-486",
    "index": 486,
    "german": "gut",
    "germanExample": "Guten Appetit!",
    "english": "… Bon appetit!",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-487",
    "index": 487,
    "german": "das Haar, -e",
    "germanExample": "Sie hat lange Haare.",
    "english": "hair",
    "englishExample": "She has long hair.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-488",
    "index": 488,
    "german": "haben",
    "germanExample": "Ich habe ein neues Auto.",
    "english": "to have",
    "englishExample": "I have a new car.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-489",
    "index": 489,
    "german": "das Hähnchen, -",
    "germanExample": "Ein Hähnchen mit Pommes bitte!",
    "english": "chicken",
    "englishExample": "Chicken with chips, please!",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-490",
    "index": 490,
    "german": "die Halbpension",
    "germanExample": "Möchten Sie Vollpension oder Halbpension?",
    "english": "half-board (dining)",
    "englishExample": "Would you like full or half-board?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-491",
    "index": 491,
    "german": "die Halle",
    "germanExample": "Wir treffen uns in Halle B.",
    "english": "hall",
    "englishExample": "We will meet in hall B.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-492",
    "index": 492,
    "german": "hallo",
    "germanExample": "Hallo Inge! Wie geht’s?",
    "english": "hello",
    "englishExample": "Hello Inge! How’s it going?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-493",
    "index": 493,
    "german": "halten",
    "germanExample": "Dieser Zug hält nicht in Rüdesheim.",
    "english": "to stop",
    "englishExample": "This train does not stop in Rüdesheim.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-494",
    "index": 494,
    "german": "die Haltestelle",
    "germanExample": "An der nächsten Haltestelle müssen Sie aussteigen.",
    "english": "(public transport) stop",
    "englishExample": "At the next stop you must alight.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-495",
    "index": 495,
    "german": "die Hand, -ä, e",
    "germanExample": "Er gibt mir die Hand.",
    "english": "hand",
    "englishExample": "He gives me his hand.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-496",
    "index": 496,
    "german": "das Handy, -s",
    "germanExample": "In der Schule bitte die Handys ausmachen!",
    "english": "mobile telephone",
    "englishExample": "Please turn off your mobile phones in school!",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-497",
    "index": 497,
    "german": "das Haus, -ä, er",
    "germanExample": "In welchem Haus wohnst du?",
    "english": "house / building",
    "englishExample": "Which house do you live in?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-498",
    "index": 498,
    "german": "das Haus, -ä, er",
    "germanExample": "Ich gehe jetzt nach Hause.",
    "english": "home",
    "englishExample": "I’m going home now.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-499",
    "index": 499,
    "german": "das Haus, -ä, er",
    "germanExample": "Paul ist nicht zu Hause.",
    "english": "home",
    "englishExample": "Paul is not home.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-500",
    "index": 500,
    "german": "die Hausaufgabe,-n",
    "germanExample": "Kannst du mir bei den Hausaufgaben helfen?",
    "english": "homework",
    "englishExample": "Can you help me with the homework?",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-501",
    "index": 501,
    "german": "die Hausfrau, -en",
    "germanExample": "Die Hausfrau wäscht, kocht und kauft ein.",
    "english": "housewife",
    "englishExample": "The housewife washes, cooks, and goes shopping.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-502",
    "index": 502,
    "german": "der Hausmann",
    "germanExample": "Der Hausmann wäscht, kocht und kauft ein.",
    "english": "househusband",
    "englishExample": "The househusband washes, cooks, and goes shopping.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-503",
    "index": 503,
    "german": "die Heimat",
    "germanExample": "Ich komme aus der Schweiz. Das ist meine Heimat.",
    "english": "home",
    "englishExample": "I come from Switzerland. It’s my home.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-504",
    "index": 504,
    "german": "heiraten",
    "germanExample": "Meine Schwester heiratet einen Japaner.",
    "english": "to marry",
    "englishExample": "My sister is marrying a Japanese man.",
    "category": "family",
    "article": null
  },
  {
    "id": "card-505",
    "index": 505,
    "german": "heißen",
    "germanExample": "Ich heiße Charlotte Meier.",
    "english": "to be called",
    "englishExample": "I’m called Charlotte Meier.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-506",
    "index": 506,
    "german": "heißen",
    "germanExample": "Wie heißt das auf Deutsch?",
    "english": "to be called",
    "englishExample": "What’s that called in German?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-507",
    "index": 507,
    "german": "helfen",
    "germanExample": "Können Sie mir helfen, bitte?",
    "english": "to help",
    "englishExample": "Can you help me, please?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-508",
    "index": 508,
    "german": "hell",
    "germanExample": "Im Sommer ist es bis 21 Uhr hell.",
    "english": "light",
    "englishExample": "In summer it is light until 9 pm.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-509",
    "index": 509,
    "german": "der Herd",
    "germanExample": "In der neuen Küche fehlt noch der Herd.",
    "english": "stove",
    "englishExample": "The stove is still missing from the new kitchen.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-510",
    "index": 510,
    "german": "der Herr, -en",
    "germanExample": "Guten Tag, Herr Sommer!",
    "english": "Mister",
    "englishExample": "Good day, Mr Sommer!",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-511",
    "index": 511,
    "german": "herzlich",
    "germanExample": "Herzlichen Glückwunsch!",
    "english": "hearty, sincere, warm, heartfelt",
    "englishExample": "Hearty Congratulations!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-512",
    "index": 512,
    "german": "heute",
    "germanExample": "Heute ist ein schöner Tag.",
    "english": "today",
    "englishExample": "Today is a beautiful day.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-513",
    "index": 513,
    "german": "hier",
    "germanExample": "Hier ist 06131-553221, Pamela Linke.",
    "english": "here",
    "englishExample": "This is 06131-553221, Pamela Linke.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-514",
    "index": 514,
    "german": "hier",
    "germanExample": "Hier wohne ich.",
    "english": "here",
    "englishExample": "I live here.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-515",
    "index": 515,
    "german": "die Hilfe",
    "germanExample": "Hilfe! Bitte helfen Sie mir!",
    "english": "help",
    "englishExample": "Help! Please help me!",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-516",
    "index": 516,
    "german": "die Hilfe",
    "germanExample": "Brauchen Sie meine Hilfe?",
    "english": "help",
    "englishExample": "Do you need my help?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-517",
    "index": 517,
    "german": "hinten",
    "germanExample": "Die Tür zum Aussteigen ist hinten.",
    "english": "at/in the back",
    "englishExample": "The exit door is at the back.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-518",
    "index": 518,
    "german": "das Hobby, -s",
    "germanExample": "Meine Hobbys sind Wandern und Schwimmen.",
    "english": "hobby",
    "englishExample": "My hobbies are hiking and swimming.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-519",
    "index": 519,
    "german": "hoch",
    "germanExample": "Der Mount Everest ist 8.880 Meter hoch.",
    "english": "high",
    "englishExample": "Mount Everest is 8,880 metres high.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-520",
    "index": 520,
    "german": "die Hochzeit",
    "germanExample": "Zur dieser Hochzeit kommen mehr als fünfzig Gäste.",
    "english": "marriage",
    "englishExample": "More than fifty guests are coming to this wedding.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-521",
    "index": 521,
    "german": "holen",
    "germanExample": "Ich hole zwei Flaschen Wasser aus der Küche.",
    "english": "to fetch",
    "englishExample": "I’m fetching two bottles of water from the kitchen.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-522",
    "index": 522,
    "german": "hören",
    "germanExample": "Hör mal! Was ist das?",
    "english": "to listen",
    "englishExample": "Listen! What is that?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-523",
    "index": 523,
    "german": "hören",
    "germanExample": "Ich habe das Lied schon mal gehört.",
    "english": "to hear",
    "englishExample": "I have already heard that song.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-524",
    "index": 524,
    "german": "das Hotel, -s",
    "germanExample": "Im Urlaub sind wir in einem Hotel am Meer.",
    "english": "hotel",
    "englishExample": "On holiday we are in a hotel by the sea.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-525",
    "index": 525,
    "german": "der Hund, -e",
    "germanExample": "Der Hund ist noch jung.",
    "english": "dog",
    "englishExample": "The dog is still young.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-526",
    "index": 526,
    "german": "der Hunger",
    "germanExample": "Ich habe Hunger! Wann ist das Essen fertig?",
    "english": "hunger",
    "englishExample": "I’m hungry! When will the food be ready?",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-527",
    "index": 527,
    "german": "ich",
    "germanExample": "Ich heiße Veronika.",
    "english": "I",
    "englishExample": "I’m called Veronika.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-528",
    "index": 528,
    "german": "ihm/ihr",
    "germanExample": "Gib ihm/ihr bitte das Buch.",
    "english": "him/her",
    "englishExample": "Please give the book to him/her.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-529",
    "index": 529,
    "german": "ihn",
    "germanExample": "Ruf ihn bitte an.",
    "english": "him",
    "englishExample": "Call him, please.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-530",
    "index": 530,
    "german": "immer",
    "germanExample": "Frau Bast kommt immer zu spät.",
    "english": "always",
    "englishExample": "Ms Bast is always late.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-531",
    "index": 531,
    "german": "in",
    "germanExample": "Ich wohne in Wiesbaden.",
    "english": "in",
    "englishExample": "I live in Wiesbaden.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-532",
    "index": 532,
    "german": "in",
    "germanExample": "Der Zug kommt in fünf Minuten.",
    "english": "in",
    "englishExample": "The train comes in five minutes.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-533",
    "index": 533,
    "german": "in",
    "germanExample": "Frau Rausch arbeitet in einem Geschäft.",
    "english": "in",
    "englishExample": "Ms Rausch works in a shop.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-534",
    "index": 534,
    "german": "in",
    "germanExample": "Komm, wir gehen ins Kino.",
    "english": "to",
    "englishExample": "Come on, we’re going to the cinema.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-535",
    "index": 535,
    "german": "die Information, -en",
    "germanExample": "Wenn Sie Fragen haben, gehen Sie zur Information.",
    "english": "information point",
    "englishExample": "If you have questions, go to the information point.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-536",
    "index": 536,
    "german": "die Information, -en",
    "germanExample": "Wir haben hier wichtige Informationen für Sie.",
    "english": "information",
    "englishExample": "We have important information for you.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-537",
    "index": 537,
    "german": "international",
    "germanExample": "Unser Deutschkurs ist international: Silvana kommt aus Italien, Conchi aus Spanien, Yin aus China ...",
    "english": "international",
    "englishExample": "Our German course is international: Silvana comes from Italy, Conchi from Spain, Yin from China, …",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-538",
    "index": 538,
    "german": "das Internet",
    "germanExample": "Das findest du im Internet.",
    "english": "internet",
    "englishExample": "You will find that on the internet.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-539",
    "index": 539,
    "german": "ja",
    "germanExample": "Sind Sie Herr Watanabe? / Ja.",
    "english": "yes",
    "englishExample": "Are you Mr Watanabe? / Yes.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-540",
    "index": 540,
    "german": "die Jacke, -n",
    "germanExample": "Zieh dir eine Jacke an. Es ist kalt.",
    "english": "jacket",
    "englishExample": "Put your jacket on. It’s cold.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-541",
    "index": 541,
    "german": "jed-",
    "germanExample": "Blumen kannst du in jedem Bahnhof kaufen.",
    "english": "every",
    "englishExample": "You can buy flowers at every station.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-542",
    "index": 542,
    "german": "jetzt",
    "germanExample": "Jetzt machen wir eine Pause.",
    "english": "now",
    "englishExample": "Now we will take a break.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-543",
    "index": 543,
    "german": "der Job, -s",
    "germanExample": "Jenny hat einen neuen Job bei der Post.",
    "english": "job",
    "englishExample": "Jenny has a new job at the post office.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-544",
    "index": 544,
    "german": "der Jugendliche, -n",
    "germanExample": "Viele Jugendliche kaufen gern ein.",
    "english": "youth/young person",
    "englishExample": "Many youths like shopping.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-545",
    "index": 545,
    "german": "jung",
    "germanExample": "Claudia ist 21. / Was? Noch so jung?",
    "english": "young",
    "englishExample": "Claudia is 21. / What? Still so young?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-546",
    "index": 546,
    "german": "der Junge, -n",
    "germanExample": "Ich habe zwei Kinder. Einen Jungen und ein Mädchen.",
    "english": "boy",
    "englishExample": "I have two children. One boy and one girl.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-547",
    "index": 547,
    "german": "der Kaffee",
    "germanExample": "Zum Frühstück trinke ich immer Kaffee.",
    "english": "coffee",
    "englishExample": "For breakfast I always drink coffee.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-548",
    "index": 548,
    "german": "kaputt",
    "germanExample": "Das Glas war teuer. Es geht sehr leicht kaputt.",
    "english": "… The glass was expensive. It will break very easily. kaputt gehen = to break",
    "englishExample": "",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-549",
    "index": 549,
    "german": "kaputt",
    "germanExample": "Das Glas ist kaputt.",
    "english": "broken",
    "englishExample": "The glass is broken.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-550",
    "index": 550,
    "german": "die Karte, -n",
    "germanExample": "Ich schreibe meinen Bekannten eine Karte aus dem Urlaub.",
    "english": "card",
    "englishExample": "I’ll write my acquaintances a card from holiday.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-551",
    "index": 551,
    "german": "die Karte, -n",
    "germanExample": "Wollen wir Karten spielen?",
    "english": "card",
    "englishExample": "Shall we play cards? lit. 'do we want to…'",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-552",
    "index": 552,
    "german": "die Karte, -n",
    "germanExample": "Ich möchte auch etwas essen. Bringen Sie mir die Karte, bitte.",
    "english": "menu",
    "englishExample": "I also want to eat something. Please bring me the menu.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-553",
    "index": 553,
    "german": "(Kredit)-Karte, -n",
    "germanExample": "Kann ich auch mit Karte (be-) zahlen?",
    "english": "(credit) card",
    "englishExample": "Can I also pay by card?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-554",
    "index": 554,
    "german": "die Kartoffel, -n",
    "germanExample": "Für Pommes frites braucht man Kartoffeln.",
    "english": "potato",
    "englishExample": "For chips you need potatoes.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-555",
    "index": 555,
    "german": "die Kasse",
    "germanExample": "Zahlen Sie bitte an der Kasse.",
    "english": "cash register",
    "englishExample": "Please pay at the till.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-556",
    "index": 556,
    "german": "kaufen",
    "germanExample": "Tim kauft sich ein neues Auto.",
    "english": "to buy",
    "englishExample": "Tim buys himself a new car.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-557",
    "index": 557,
    "german": "kein",
    "germanExample": "Es gibt keine Eintrittskarten mehr.",
    "english": "no/none",
    "englishExample": "There are no more tickets.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-558",
    "index": 558,
    "german": "kennen",
    "germanExample": "Kennen Sie diese Frau? / Nein, leider nicht.",
    "english": "to know",
    "englishExample": "Do you know this woman? / No, unfortunately not.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-559",
    "index": 559,
    "german": "kennenlernen",
    "germanExample": "Wir sind neu hier. Wir möchten Sie kennenlernen.",
    "english": "to get to know",
    "englishExample": "We are new here. We would like to get to know you.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-560",
    "index": 560,
    "german": "das Kind, -er",
    "germanExample": "Wie viele Kinder haben Sie?",
    "english": "child",
    "englishExample": "How many children do you have?",
    "category": "family",
    "article": "das"
  },
  {
    "id": "card-561",
    "index": 561,
    "german": "der Kindergarten",
    "germanExample": "Die kleine Laura geht schon in den Kindergarten.",
    "english": "kindergarten",
    "englishExample": "Little Laura is already going to kindergarten.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-562",
    "index": 562,
    "german": "das Kino, -s",
    "germanExample": "Wir sehen heute Abend im Kino einen schönen Film.",
    "english": "cinema",
    "englishExample": "We’re watching a lovely film this evening.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-563",
    "index": 563,
    "german": "der Kiosk",
    "germanExample": "Am Kiosk bekommen Sie Getränke, Zigaretten und Zeitungen.",
    "english": "kiosk",
    "englishExample": "At the kiosk you can get drinks, cigarettes, and newspapers.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-564",
    "index": 564,
    "german": "klar",
    "germanExample": "Kommst du mit? / Klar!",
    "english": "of course / naturally",
    "englishExample": "Are you coming with us? / Of course!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-565",
    "index": 565,
    "german": "die Klasse",
    "germanExample": "In unserer Klasse sind fünfundzwanzig Schüler.",
    "english": "class",
    "englishExample": "In our class there are twenty five pupils.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-566",
    "index": 566,
    "german": "die Klasse",
    "germanExample": "Im Zug fahre ich immer 2. Klasse.",
    "english": "class",
    "englishExample": "On the train I always travel in second class.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-567",
    "index": 567,
    "german": "die Kleidung",
    "germanExample": "Wo finde ich Kleidung? / Jacken im ersten, Jeans im zweiten Stock.",
    "english": "clothes",
    "englishExample": "Where can I find clothes? / Jackets on the first floor, jeans on the second.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-568",
    "index": 568,
    "german": "klein",
    "germanExample": "Eltville ist eine kleine Stadt am Rhein.",
    "english": "small",
    "englishExample": "Eltwille is a small town on the Rhine.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-569",
    "index": 569,
    "german": "kochen",
    "germanExample": "Herr Georgi kann gut kochen.",
    "english": "to cook",
    "englishExample": "Mr Georgi is good at cooking.",
    "category": "food",
    "article": null
  },
  {
    "id": "card-570",
    "index": 570,
    "german": "der Koffer, –",
    "germanExample": "Ist das Ihr Koffer?",
    "english": "suitcase",
    "englishExample": "Is that your suitcase?",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-571",
    "index": 571,
    "german": "der Kollege, -n",
    "germanExample": "Wie heißt die neue Kollegin?",
    "english": "colleague",
    "englishExample": "What’s the new colleague called? NB: female",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-572",
    "index": 572,
    "german": "kommen",
    "germanExample": "Woher kommen Sie? / Aus Frankreich.",
    "english": "to come",
    "englishExample": "Where do you come from? / From France.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-573",
    "index": 573,
    "german": "kommen",
    "germanExample": "Kommst du mit ins Schwimmbad?",
    "english": "to come",
    "englishExample": "Are you coming with us to the pool?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-574",
    "index": 574,
    "german": "können",
    "germanExample": "Ich kann Deutsch und Russisch.",
    "english": "to be able to",
    "englishExample": "I can speak German and Russian.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-575",
    "index": 575,
    "german": "können",
    "germanExample": "Können Sie mir helfen?",
    "english": "to be able to",
    "englishExample": "Can you help me?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-576",
    "index": 576,
    "german": "das Konto",
    "germanExample": "Das Geld überweisen wir am ersten März auf Ihr Konto.",
    "english": "account",
    "englishExample": "We will transfer the money to your account on the first of March.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-577",
    "index": 577,
    "german": "der Kopf",
    "germanExample": "Mein Kopf tut weh!",
    "english": "head",
    "englishExample": "My head hurts!",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-578",
    "index": 578,
    "german": "kosten",
    "germanExample": "Wie viel kostet das? / 10 Euro.",
    "english": "to cost",
    "englishExample": "How much does that cost? / 10 euros.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-579",
    "index": 579,
    "german": "krank",
    "germanExample": "Ich kann heute nicht zur Arbeit kommen, ich bin krank und liege im Bett.",
    "english": "ill",
    "englishExample": "I can’t come to work today, I’m ill in bed.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-580",
    "index": 580,
    "german": "kriegen",
    "germanExample": "Ich kriege 15 Euro in der Stunde für meine Arbeit.",
    "english": "to get",
    "englishExample": "I get 15 euros an hour for my work.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-581",
    "index": 581,
    "german": "die Küche",
    "germanExample": "Der neue Herd kommt in die Küche.",
    "english": "kitchen",
    "englishExample": "The new stove goes in the kitchen.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-582",
    "index": 582,
    "german": "der Kuchen",
    "germanExample": "Ich nehme ein Stück Kuchen.",
    "english": "cake",
    "englishExample": "I’ll have a piece of cake.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-583",
    "index": 583,
    "german": "der Kugelschreiber",
    "germanExample": "Hast du einen Kugelschreiber für mich?",
    "english": "ball-point pen",
    "englishExample": "Do you have a pen I can borrow?",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-584",
    "index": 584,
    "german": "der Kühlschrank",
    "germanExample": "Haben wir noch Milch? / Ja, im Kühlschrank.",
    "english": "fridge",
    "englishExample": "Do we still have milk? / Yes, in the fridge.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-585",
    "index": 585,
    "german": "kulturell interessiert",
    "germanExample": "Ich bin kulturell interessiert. Ich gehe oft ins Museum.",
    "english": "interested in culture",
    "englishExample": "I am interested in culture. I often go to the museum.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-586",
    "index": 586,
    "german": "kulturell",
    "germanExample": "Die Geschichte ist kulturell wichtig.",
    "english": "cultural",
    "englishExample": "History is culturally important.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-587",
    "index": 587,
    "german": "sich kümmern",
    "germanExample": "Jede Mutter kümmert sich um ihre kleinen Kinder.",
    "english": "to look after",
    "englishExample": "Every mother looks after her little children.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-588",
    "index": 588,
    "german": "der Kunde, -n",
    "germanExample": "Einen Moment, bitte. Ich habe eine Kundin.",
    "english": "customer",
    "englishExample": "One moment, please. I have a customer. NB: female",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-589",
    "index": 589,
    "german": "der Kurs, -e",
    "germanExample": "Der Deutschkurs geht bis zum Sommer.",
    "english": "course",
    "englishExample": "The German course runs until summer.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-590",
    "index": 590,
    "german": "kurz",
    "germanExample": "Ricardo hat kurzes Haar.",
    "english": "short",
    "englishExample": "Ricardo has short hair.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-591",
    "index": 591,
    "german": "lachen",
    "germanExample": "Die Kinder lachen viel.",
    "english": "to laugh",
    "englishExample": "The children laugh a lot.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-592",
    "index": 592,
    "german": "der Laden, -ä",
    "germanExample": "Im Buchladen können Sie Bücher kaufen.",
    "english": "shop",
    "englishExample": "In the bookshop you can buy books.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-593",
    "index": 593,
    "german": "das Land, -ä, er",
    "germanExample": "Italien ist ein schönes Land.",
    "english": "country",
    "englishExample": "Italy is a beautiful country.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-594",
    "index": 594,
    "german": "lang",
    "germanExample": "Die Jeans ist zu lang.",
    "english": "long",
    "englishExample": "The jeans are too long.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-595",
    "index": 595,
    "german": "lange",
    "germanExample": "Wie lange fährt der Zug von Hamburg nach Berlin?",
    "english": "long",
    "englishExample": "How long is the train journey from Hamburg to Berlin?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-596",
    "index": 596,
    "german": "langsam",
    "germanExample": "Könnten Sie bitte etwas langsamer sprechen?",
    "english": "slow",
    "englishExample": "Can you please speak a little slower?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-597",
    "index": 597,
    "german": "laufen",
    "germanExample": "Ich möchte nicht Auto fahren, ich möchte laufen.",
    "english": "to walk/run",
    "englishExample": "I don’t want to go by car, I want to walk.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-598",
    "index": 598,
    "german": "laut",
    "germanExample": "Nicht so laut! Das Baby schläft.",
    "english": "loud",
    "englishExample": "Not so loud! The baby is sleeping.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-599",
    "index": 599,
    "german": "leben",
    "germanExample": "Sie lebt bei ihrer Schwester.",
    "english": "to live",
    "englishExample": "She lives at her sister‘s.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-600",
    "index": 600,
    "german": "leben",
    "germanExample": "Ihre Eltern leben nicht mehr.",
    "english": "to live",
    "englishExample": "Her parents are no longer alive.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-601",
    "index": 601,
    "german": "das Leben",
    "germanExample": "Das Leben in diesem Land ist teuer.",
    "english": "life",
    "englishExample": "Life in this country is expensive.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-602",
    "index": 602,
    "german": "die Lebensmittel (pl.)",
    "germanExample": "Lebensmittel bekommen Sie im Supermarkt.",
    "english": "food",
    "englishExample": "You can get food from the supermarket.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-603",
    "index": 603,
    "german": "ledig",
    "germanExample": "Sind Sie verheiratet? / Nein. Ledig.",
    "english": "single",
    "englishExample": "Are you married? / / No. Single. NB: marital status, not relationship status",
    "category": "family",
    "article": null
  },
  {
    "id": "card-604",
    "index": 604,
    "german": "legen",
    "germanExample": "Legen Sie das Buch auf den Tisch.",
    "english": "to put",
    "englishExample": "Put the book on the table.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-605",
    "index": 605,
    "german": "der Lehrer, –",
    "germanExample": "Unsere Deutschlehrerin heißt Frau Müller.",
    "english": "teacher",
    "englishExample": "Our German teacher is called Ms Müller.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-606",
    "index": 606,
    "german": "leicht",
    "germanExample": "Der Koffer ist leicht.",
    "english": "light (weight)",
    "englishExample": "The suitcase is light.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-607",
    "index": 607,
    "german": "leicht",
    "germanExample": "Deutsch ist nicht leicht.",
    "english": "easy",
    "englishExample": "German is not easy.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-608",
    "index": 608,
    "german": "leider",
    "germanExample": "Leider kann ich nicht kommen. Ich muss zum Arzt.",
    "english": "unfortunately",
    "englishExample": "Unfortunately I can’t come. I need to go to the doctor.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-609",
    "index": 609,
    "german": "leise",
    "germanExample": "Seid leise. Die anderen schlafen schon.",
    "english": "quiet",
    "englishExample": "Be quiet. The others are already asleep.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-610",
    "index": 610,
    "german": "lernen",
    "germanExample": "Wie lange lernen Sie schon Deutsch?",
    "english": "to learn",
    "englishExample": "How long have you been learning German?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-611",
    "index": 611,
    "german": "lesen",
    "germanExample": "Ich lese ein Buch von García Márquez.",
    "english": "to read",
    "englishExample": "I’m reading a book by García Márquez.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-612",
    "index": 612,
    "german": "letzt-",
    "germanExample": "Morgen ist der letzte Kurstag.",
    "english": "last",
    "englishExample": "Tomorrow is the last day of the course.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-613",
    "index": 613,
    "german": "die Leute (pl.)",
    "germanExample": "In der Disko sind viele Leute.",
    "english": "people",
    "englishExample": "There are a lot of people at the disco.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-614",
    "index": 614,
    "german": "das Licht",
    "germanExample": "Wo macht man hier das Licht an?",
    "english": "light",
    "englishExample": "Where do you switch on the light here?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-615",
    "index": 615,
    "german": "lieb-",
    "germanExample": "Liebe Susanne, lieber Hans,",
    "english": "dear",
    "englishExample": "Dear Susanne, dear Hans,",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-616",
    "index": 616,
    "german": "lieben",
    "germanExample": "Ich liebe dich!",
    "english": "to love",
    "englishExample": "I love you!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-617",
    "index": 617,
    "german": "lieber",
    "germanExample": "Sie fährt lieber mit der Bahn.",
    "english": "to prefer",
    "englishExample": "She prefers to travel by train. lieber + verb = to prefer doing something",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-618",
    "index": 618,
    "german": "Lieblings-",
    "germanExample": "Mein Lieblingsfilm ist „Schwarze Augen'.",
    "english": "favourite",
    "englishExample": "My favourite film is 'Dark Eyes'.",
    "category": "noun",
    "article": null
  },
  {
    "id": "card-619",
    "index": 619,
    "german": "das Lied, -er",
    "germanExample": "Welches ist dein Lieblingslied?",
    "english": "song",
    "englishExample": "Which is your favourite song?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-620",
    "index": 620,
    "german": "liegen",
    "germanExample": "Um neun Uhr liegt Judith noch im Bett.",
    "english": "to lie",
    "englishExample": "At 9 am Judith is still (lying) in bed.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-621",
    "index": 621,
    "german": "liegen",
    "germanExample": "Frankfurt liegt am Main.",
    "english": "to lie / be located",
    "englishExample": "Frankfurt lies on the Main. NB: not used for humans",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-622",
    "index": 622,
    "german": "links",
    "germanExample": "Gehen Sie die nächste Straße links.",
    "english": "left",
    "englishExample": "Go down the next street on the left.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-623",
    "index": 623,
    "german": "der Lkw, -s",
    "germanExample": "Dieser Lastkraftwagen ist sehr groß.",
    "english": "HGV",
    "englishExample": "That heavy goods vehicle is very large.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-624",
    "index": 624,
    "german": "das Lokal",
    "germanExample": "In unserer Straße gibt es ein neues Lokal.",
    "english": "pub",
    "englishExample": "There is a new pub on our street.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-625",
    "index": 625,
    "german": "die Lösung, -en",
    "germanExample": "Die Lösung ist ganz einfach.",
    "english": "solution",
    "englishExample": "The solution is quite simple.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-626",
    "index": 626,
    "german": "lustig",
    "germanExample": "Frau Mertens ist lustig. Sie lacht immer.",
    "english": "funny",
    "englishExample": "Ms Mertens is funny. She is always laughing.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-627",
    "index": 627,
    "german": "machen",
    "germanExample": "Was machst du heute Abend?",
    "english": "to do",
    "englishExample": "What are you doing this evening?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-628",
    "index": 628,
    "german": "machen",
    "germanExample": "Ich muss jetzt das Essen machen.",
    "english": "to make",
    "englishExample": "I need to make the food now.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-629",
    "index": 629,
    "german": "machen",
    "germanExample": "Das macht 5 Euro 95.",
    "english": "to come to",
    "englishExample": "That comes to 5 euros 95.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-630",
    "index": 630,
    "german": "machen",
    "germanExample": "Das macht nichts.",
    "english": "… It doesn't matter. set phrase",
    "englishExample": "",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-631",
    "index": 631,
    "german": "das Mädchen, –",
    "germanExample": "Familie Kurz bekommt ein Baby. / Junge oder Mädchen?",
    "english": "girl",
    "englishExample": "The Kurz family are expecting a new baby. / Boy or girl?",
    "category": "family",
    "article": "das"
  },
  {
    "id": "card-632",
    "index": 632,
    "german": "man",
    "germanExample": "Hier darf man nicht rauchen.",
    "english": "one / impersonal ‘you’",
    "englishExample": "You may not smoke here. NB: does not sound pretentious in German",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-633",
    "index": 633,
    "german": "der Mann, -ä, er",
    "germanExample": "Mein Mann arbeitet bei der Polizei.",
    "english": "man / husband",
    "englishExample": "My husband works for the police.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-634",
    "index": 634,
    "german": "männlich",
    "germanExample": "Kreuzen Sie bitte an: „weiblich' oder „männlich'.",
    "english": "male",
    "englishExample": "Please tick 'female' or 'male'.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-635",
    "index": 635,
    "german": "die Maschine, -n",
    "germanExample": "Die Waschmaschine ist günstig.",
    "english": "machine",
    "englishExample": "The washing machine is cheap.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-636",
    "index": 636,
    "german": "das Meer",
    "germanExample": "Wir machen Urlaub am Meer.",
    "english": "sea",
    "englishExample": "We are holidaying by the sea.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-637",
    "index": 637,
    "german": "mehr",
    "germanExample": "Dieses Auto kostet 1.000 Euro mehr als das andere.",
    "english": "more",
    "englishExample": "This car costs 1000 euros more than the other.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-638",
    "index": 638,
    "german": "mein",
    "germanExample": "Mein Vater ist Arzt.",
    "english": "my",
    "englishExample": "My father is a doctor.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-639",
    "index": 639,
    "german": "meist-",
    "germanExample": "Die meisten Norddeutschen sind sehr groß.",
    "english": "most",
    "englishExample": "Most northern Germans are very tall.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-640",
    "index": 640,
    "german": "der Mensch, -en",
    "germanExample": "Die Menschen sind hier anders als bei uns.",
    "english": "people",
    "englishExample": "The people here are different than at home.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-641",
    "index": 641,
    "german": "mieten",
    "germanExample": "Ich möchte ein Auto mieten.",
    "english": "to rent",
    "englishExample": "I would like to rent a car.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-642",
    "index": 642,
    "german": "die Miete",
    "germanExample": "Die Miete für diese Wohnung ist 600 Euro.",
    "english": "rent",
    "englishExample": "The rent for this flat is 600 euros.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-643",
    "index": 643,
    "german": "die Milch",
    "germanExample": "Die Milch steht im Kühlschrank.",
    "english": "milk",
    "englishExample": "The milk is in the fridge.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-644",
    "index": 644,
    "german": "mit",
    "germanExample": "Trinken Sie den Kaffee mit Milch?",
    "english": "with",
    "englishExample": "Do you take milk with your coffee?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-645",
    "index": 645,
    "german": "mitbringen",
    "germanExample": "Ich gehe einkaufen. Soll ich dir was mitbringen?",
    "english": "to bring with one / to get (sth. for sb.)",
    "englishExample": "I’m going shopping. Should I get you anything?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-646",
    "index": 646,
    "german": "mitkommen",
    "germanExample": "Ich gehe ins Kino. Kommst du mit?",
    "english": "to come with",
    "englishExample": "I’m going to the cinema. Are you coming with me?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-647",
    "index": 647,
    "german": "mitmachen",
    "germanExample": "Warum macht ihr nicht mit?",
    "english": "to join in",
    "englishExample": "Why don‘t you join in? NB: addressing a group informally",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-648",
    "index": 648,
    "german": "mitnehmen",
    "germanExample": "Nehmen wir meine Schwester ins Kino mit?",
    "english": "to take with",
    "englishExample": "Are we taking my sister with us to the cinema?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-649",
    "index": 649,
    "german": "die Mitte",
    "germanExample": "Der Lehrer steht in der Mitte des Klassenzimmers.",
    "english": "middle",
    "englishExample": "The teacher stands in the middle of the classroom.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-650",
    "index": 650,
    "german": "die Möbel (pl.)",
    "germanExample": "Sind die Möbel neu?",
    "english": "furniture",
    "englishExample": "Is the furniture new?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-651",
    "index": 651,
    "german": "möchten",
    "germanExample": "Was möchten Sie trinken?",
    "english": "would like to",
    "englishExample": "What would you like to drink?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-652",
    "index": 652,
    "german": "mögen",
    "germanExample": "Magst du Kaffee oder Tee?",
    "english": "to like",
    "englishExample": "Do you like coffee or tea?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-653",
    "index": 653,
    "german": "(sich) waschen",
    "germanExample": "Ich wasche mich morgens.",
    "english": "to wash",
    "englishExample": "I wash in the morning.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-654",
    "index": 654,
    "german": "die Nummer, -n",
    "germanExample": "Sie haben Zimmer Nummer zwölf.",
    "english": "number",
    "englishExample": "You have room number twelve.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-655",
    "index": 655,
    "german": "möglich",
    "germanExample": "Mit dieser Fahrkarte ist die Fahrt ab 9 Uhr möglich.",
    "english": "possible",
    "englishExample": "With this ticket, it is possible to travel after 9 am.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-656",
    "index": 656,
    "german": "der Moment",
    "germanExample": "Moment mal bitte!",
    "english": "moment",
    "englishExample": "Just a moment, please!",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-657",
    "index": 657,
    "german": "der Moment",
    "germanExample": "Einen Moment bitte.",
    "english": "moment",
    "englishExample": "One moment, please.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-658",
    "index": 658,
    "german": "morgen",
    "germanExample": "Morgen beginnt die Schule um 10 Uhr.",
    "english": "tomorrow",
    "englishExample": "Tomorrow school begins at 10 am.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-659",
    "index": 659,
    "german": "müde",
    "germanExample": "Ich bin müde. Ich gehe schlafen.",
    "english": "tired",
    "englishExample": "I’m tired. I’m going to sleep.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-660",
    "index": 660,
    "german": "der Mund",
    "germanExample": "Öffnen Sie den Mund.",
    "english": "mouth",
    "englishExample": "Open your mouth.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-661",
    "index": 661,
    "german": "müssen",
    "germanExample": "Ich muss jeden Tag von 8 Uhr bis 18 Uhr arbeiten.",
    "english": "to have to",
    "englishExample": "I have to work from 8 am to 6 pm every day.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-662",
    "index": 662,
    "german": "die Mutter, -ü",
    "germanExample": "Frau Berghäuser ist die Mutter von Michaela.",
    "english": "mother",
    "englishExample": "Ms Berghäuser is the mother of Michaela.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-663",
    "index": 663,
    "german": "nach",
    "germanExample": "Ich gehe jetzt nach Hause.",
    "english": "to (somewhere)",
    "englishExample": "I’m going home now.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-664",
    "index": 664,
    "german": "nach",
    "germanExample": "Ich fliege nach München.",
    "english": "to (somewhere)",
    "englishExample": "I’m flying to Munich.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-665",
    "index": 665,
    "german": "nach",
    "germanExample": "Es ist schon 5 nach 12.",
    "english": "after / past (time)",
    "englishExample": "It is already 5 past 12.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-666",
    "index": 666,
    "german": "nächst-",
    "germanExample": "Sehen wir uns nächste Woche?",
    "english": "next",
    "englishExample": "Are we seeing each other next week?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-667",
    "index": 667,
    "german": "der Name, -n",
    "germanExample": "Mein Name ist Thomas Schmidt.",
    "english": "name",
    "englishExample": "My name is Thomas Schmidt.",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-668",
    "index": 668,
    "german": "der Name, -n",
    "germanExample": "Mein Vorname ist Thomas, Schmidt ist der Familienname.",
    "english": "name",
    "englishExample": "My first name is Thomas, Schmidt is the surname.",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-669",
    "index": 669,
    "german": "nehmen",
    "germanExample": "Heute gibt es Hähnchen. Das nehme ich.",
    "english": "to have (food/drink)",
    "englishExample": "There is chicken today. I’ll have that.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-670",
    "index": 670,
    "german": "nehmen",
    "germanExample": "Ich nehme den Bus.",
    "english": "to take",
    "englishExample": "I take the bus.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-671",
    "index": 671,
    "german": "nein",
    "germanExample": "Fährst du auch nach München? / Nein, ich habe keine Zeit.",
    "english": "no",
    "englishExample": "Are you also travelling to Munich? / No, I don‘t have time.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-672",
    "index": 672,
    "german": "neu",
    "germanExample": "Ich bin der neue Kollege.",
    "english": "new",
    "englishExample": "I am the new colleague. NB: male",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-673",
    "index": 673,
    "german": "neu",
    "germanExample": "Wir haben eine neue Wohnung.",
    "english": "new",
    "englishExample": "We have a new flat.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-674",
    "index": 674,
    "german": "nicht",
    "germanExample": "Das stimmt nicht.",
    "english": "not",
    "englishExample": "That’s not right.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-675",
    "index": 675,
    "german": "nicht",
    "germanExample": "Das ist doch schön, nicht?",
    "english": "no",
    "englishExample": "That’s really beautiful, no?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-676",
    "index": 676,
    "german": "nichts",
    "germanExample": "Das macht nichts.",
    "english": "nothing",
    "englishExample": "… It's okay, don't worry. (set phrase)",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-677",
    "index": 677,
    "german": "nichts",
    "germanExample": "Hier kaufe ich nichts. Der Laden gefällt mir nicht.",
    "english": "nothing",
    "englishExample": "I won’t buy anything here. I don’t like the shop.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-678",
    "index": 678,
    "german": "nie",
    "germanExample": "Er kommt nie pünktlich.",
    "english": "never",
    "englishExample": "He is never on time.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-679",
    "index": 679,
    "german": "noch",
    "germanExample": "Vielleicht kommt er noch.",
    "english": "still",
    "englishExample": "Perhaps he will still come.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-680",
    "index": 680,
    "german": "noch",
    "germanExample": "Wir warten noch fünf Minuten.",
    "english": "another",
    "englishExample": "We will wait another five minutes.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-681",
    "index": 681,
    "german": "noch",
    "germanExample": "Ich habe noch 20 Euro.",
    "english": "still",
    "englishExample": "I still have 20 euros.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-682",
    "index": 682,
    "german": "normal",
    "germanExample": "75 kg. Sein Gewicht ist normal.",
    "english": "normal",
    "englishExample": "75 kg. His weight is normal.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-683",
    "index": 683,
    "german": "die Nummer, -n",
    "germanExample": "Welche Hausnummer haben Sie?",
    "english": "number",
    "englishExample": "Which house number is yours?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-684",
    "index": 684,
    "german": "die Nummer, -n",
    "germanExample": "Können Sie mir Ihre Nummer geben?",
    "english": "number",
    "englishExample": "Can you give me your number?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-685",
    "index": 685,
    "german": "nur",
    "germanExample": "Ich möchte nur ein Glas Wasser.",
    "english": "only",
    "englishExample": "I only want a glass of water.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-686",
    "index": 686,
    "german": "oben",
    "germanExample": "Ich wohne oben.",
    "english": "upstairs",
    "englishExample": "I live upstairs.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-687",
    "index": 687,
    "german": "das Obst",
    "germanExample": "Im Sommer ist das Obst billig.",
    "english": "fruit",
    "englishExample": "In summer fruit is cheap.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-688",
    "index": 688,
    "german": "oder",
    "germanExample": "Wann können Sie kommen – heute oder morgen?",
    "english": "or",
    "englishExample": "When can you come – today or tomorrow?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-689",
    "index": 689,
    "german": "öffnen",
    "germanExample": "Ich öffne die Tür.",
    "english": "to open",
    "englishExample": "I open the door.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-690",
    "index": 690,
    "german": "geöffnet",
    "germanExample": "Der Laden ist samstags bis 16:00 Uhr geöffnet.",
    "english": "open",
    "englishExample": "The shop is open until 4 pm on Saturdays.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-691",
    "index": 691,
    "german": "oft",
    "germanExample": "Petra treffe ich oft.",
    "english": "often",
    "englishExample": "I often meet Petra.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-692",
    "index": 692,
    "german": "ohne",
    "germanExample": "Ohne Geld kann er nichts kaufen.",
    "english": "without",
    "englishExample": "Without money he can’t buy anything.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-693",
    "index": 693,
    "german": "das Öl",
    "germanExample": "Den Salat machen wir ohne Öl.",
    "english": "oil",
    "englishExample": "We make the salad without oil.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-694",
    "index": 694,
    "german": "die Oma, -s",
    "germanExample": "Meine Oma ist schon tot.",
    "english": "grandmother",
    "englishExample": "My grandmother is already dead.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-695",
    "index": 695,
    "german": "der Opa, -s",
    "germanExample": "Mein Opa heißt Hans.",
    "english": "grandfather",
    "englishExample": "My grandfather is called Hans.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-696",
    "index": 696,
    "german": "die Ordnung",
    "germanExample": "Das ist in Ordnung.",
    "english": "order, orderliness, arrangement",
    "englishExample": "That is in order/acceptable/fine.",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-697",
    "index": 697,
    "german": "der Ort, -e",
    "germanExample": "Der Ort liegt am Meer.",
    "english": "location / place",
    "englishExample": "That place is by the sea.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-698",
    "index": 698,
    "german": "das Papier",
    "germanExample": "Hier sind Papier und Bleistift.",
    "english": "paper",
    "englishExample": "Here is a pencil and paper.",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-699",
    "index": 699,
    "german": "die Papiere (pl.)",
    "germanExample": "Haben Sie Ihre Papiere dabei?",
    "english": "papers",
    "englishExample": "Do you have your papers with you?",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-700",
    "index": 700,
    "german": "der Partner, -/",
    "germanExample": "Er is mein Partner.",
    "english": "(male) partner",
    "englishExample": "He is my partner.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-701",
    "index": 701,
    "german": "die Partnerin, -nen",
    "germanExample": "Sie ist meine Partnerin.",
    "english": "(female) partner",
    "englishExample": "She is my partner.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-702",
    "index": 702,
    "german": "die Party",
    "germanExample": "Heute Abend machen wir eine Party.",
    "english": "party",
    "englishExample": "This evening we are having a party.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-703",
    "index": 703,
    "german": "der Pass, -ä, e",
    "germanExample": "Im Hotel brauchst du deinen Pass.",
    "english": "passport",
    "englishExample": "In the hotel you need your passport.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-704",
    "index": 704,
    "german": "die Pause, -n",
    "germanExample": "Von 12:00 bis 12:30 Uhr haben wir Mittagspause.",
    "english": "break",
    "englishExample": "From 12 until 12:30 pm we have a lunch break.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-705",
    "index": 705,
    "german": "der Plan, -ä, e",
    "germanExample": "Ich kaufe mir einen Stadtplan.",
    "english": "map / plan",
    "englishExample": "I will buy myself a map of the town.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-706",
    "index": 706,
    "german": "der Platz, -ä, e",
    "germanExample": "Tut mir leid, der Platz ist besetzt.",
    "english": "seat",
    "englishExample": "I’m sorry, this seat is taken.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-707",
    "index": 707,
    "german": "der Platz, -ä, e",
    "germanExample": "Bitte nehmen Sie Platz!",
    "english": "seat",
    "englishExample": "Please take a seat!",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-708",
    "index": 708,
    "german": "der Platz, -ä, e",
    "germanExample": "Ich wohne neben dem Platz.",
    "english": "square",
    "englishExample": "I live next to the square.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-709",
    "index": 709,
    "german": "die Polizei",
    "germanExample": "Holen Sie die Polizei!",
    "english": "police",
    "englishExample": "Call the police!",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-710",
    "index": 710,
    "german": "die Pommes frites (pl.)",
    "germanExample": "Die Kinder essen Hähnchen mit Pommes frites.",
    "english": "chips",
    "englishExample": "The children are eating chicken and chips.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-711",
    "index": 711,
    "german": "die Post",
    "germanExample": "Wo ist die Post, bitte?",
    "english": "post office",
    "englishExample": "Where is the post office, please?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-712",
    "index": 712,
    "german": "die Post",
    "germanExample": "Ist Post da?",
    "english": "post / mail",
    "englishExample": "Is there post?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-713",
    "index": 713,
    "german": "die Postleitzahl",
    "germanExample": "Wie ist Ihre Postleitzahl?",
    "english": "postcode",
    "englishExample": "What is your postcode?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-714",
    "index": 714,
    "german": "das Praktikum",
    "germanExample": "Ich mache ein Praktikum bei Siemens.",
    "english": "internship",
    "englishExample": "I am doing an internship at Siemens.",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-715",
    "index": 715,
    "german": "die Praxis",
    "germanExample": "Die Praxis ist ab acht Uhr geöffnet.",
    "english": "practice",
    "englishExample": "Practice is open from 8 am.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-716",
    "index": 716,
    "german": "der Preis, -e",
    "germanExample": "Die Preise sind hoch.",
    "english": "price",
    "englishExample": "The prices are high.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-717",
    "index": 717,
    "german": "das Problem, -e",
    "germanExample": "Mein Problem ist die Sprache.",
    "english": "problem",
    "englishExample": "My problem is the language.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-718",
    "index": 718,
    "german": "der Prospekt, -e",
    "germanExample": "Bitte schicken Sie mir einen Prospekt von Ihrem Hotel.",
    "english": "brochure",
    "englishExample": "Please send me a brochure for your hotel.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-719",
    "index": 719,
    "german": "die Prüfung",
    "germanExample": "Die Prüfung ist am Montag um 8:00 Uhr.",
    "english": "examination",
    "englishExample": "The exam is on Monday at 8 am.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-720",
    "index": 720,
    "german": "pünktlich",
    "germanExample": "Der Bus fährt pünktlich um acht Uhr.",
    "english": "sharp",
    "englishExample": "The bus leaves at 8 am sharp.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-721",
    "index": 721,
    "german": "pünktlich",
    "germanExample": "Herr Müller ist immer pünktlich.",
    "english": "punctual",
    "englishExample": "Mr Müller is always punctual.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-722",
    "index": 722,
    "german": "Rad fahren",
    "germanExample": "Das Kind kann schon Rad fahren.",
    "english": "to cycle",
    "englishExample": "The child can already ride a bike.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-723",
    "index": 723,
    "german": "rauchen",
    "germanExample": "Ich rauche nicht.",
    "english": "to smoke",
    "englishExample": "I don’t smoke.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-724",
    "index": 724,
    "german": "der Raum, -ä, e",
    "germanExample": "Der Unterricht ist in Raum 332.",
    "english": "room",
    "englishExample": "The class is in room 332.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-725",
    "index": 725,
    "german": "die Rechnung, -en",
    "germanExample": "Die Rechnung, bitte.",
    "english": "bill",
    "englishExample": "The bill, please.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-726",
    "index": 726,
    "german": "rechts",
    "germanExample": "Die Schillerstraße ist hier rechts.",
    "english": "right",
    "englishExample": "Schillerstraße is on the right here.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-727",
    "index": 727,
    "german": "regnen",
    "germanExample": "Heute regnet es.",
    "english": "to rain",
    "englishExample": "Today it’s raining.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-728",
    "index": 728,
    "german": "der Regen",
    "germanExample": "Bei diesem Regen gehe ich nicht raus.",
    "english": "rain",
    "englishExample": "I’m not going out in this rain.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-729",
    "index": 729,
    "german": "der Reis",
    "germanExample": "Ich esse gern Reis.",
    "english": "rice",
    "englishExample": "I like eating rice.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-730",
    "index": 730,
    "german": "reisen",
    "germanExample": "Ich reise gern.",
    "english": "to travel",
    "englishExample": "I like to travel.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-731",
    "index": 731,
    "german": "die Reise",
    "germanExample": "Wir machen eine Reise nach Österreich.",
    "english": "journey / trip",
    "englishExample": "We are going on a trip to Austria.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-732",
    "index": 732,
    "german": "das Reisebüro, -s",
    "germanExample": "Mein Mann arbeitet im Reisebüro.",
    "english": "travel agency",
    "englishExample": "My husband works at a travel agency.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-733",
    "index": 733,
    "german": "der Reiseführer",
    "germanExample": "Ich kaufe mir einen Reiseführer von Berlin.",
    "english": "travel guide",
    "englishExample": "I will buy myself a travel guide for Berlin.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-734",
    "index": 734,
    "german": "der Reiseführer",
    "germanExample": "Unser Reiseführer heißt Peter.",
    "english": "tour guide",
    "englishExample": "Our tour guide is called Peter.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-735",
    "index": 735,
    "german": "reparieren",
    "germanExample": "Er hat das Fahrrad repariert.",
    "english": "to repair",
    "englishExample": "He repaired the bicycle.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-736",
    "index": 736,
    "german": "die Reparatur",
    "germanExample": "Die Reparatur ist sehr teuer.",
    "english": "repair",
    "englishExample": "The repair is very expensive.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-737",
    "index": 737,
    "german": "das Restaurant, -s",
    "germanExample": "Wir essen heute in einem Restaurant.",
    "english": "restaurant",
    "englishExample": "We are eating at a restaurant today.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-738",
    "index": 738,
    "german": "die Rezeption",
    "germanExample": "Fragen Sie bitte im Hotel an der Rezeption.",
    "english": "reception",
    "englishExample": "Please ask at the hotel reception.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-739",
    "index": 739,
    "german": "richtig",
    "germanExample": "Habe ich das richtig verstanden?",
    "english": "correct",
    "englishExample": "Have I understood that correctly?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-740",
    "index": 740,
    "german": "richtig",
    "germanExample": "Das ist richtig.",
    "english": "right / correct",
    "englishExample": "That's right.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-741",
    "index": 741,
    "german": "riechen",
    "germanExample": "Dieser Wein riecht gut.",
    "english": "to smell",
    "englishExample": "This wine smells good.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-742",
    "index": 742,
    "german": "ruhig",
    "germanExample": "Ich möchte ein ruhiges Zimmer.",
    "english": "quiet",
    "englishExample": "I would like a quiet room.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-743",
    "index": 743,
    "german": "der Saft",
    "germanExample": "Möchtest du einen Apfelsaft?",
    "english": "juice Would you like an apple juice?",
    "englishExample": "",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-744",
    "index": 744,
    "german": "sagen",
    "germanExample": "Sag mal, wie geht es dir denn?",
    "english": "to say / tell",
    "englishExample": "Tell me, how’s it going?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-745",
    "index": 745,
    "german": "der Salat",
    "germanExample": "Wie schmeckt dir der Salat?",
    "english": "salad",
    "englishExample": "How does the salad taste?",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-746",
    "index": 746,
    "german": "das Salz",
    "germanExample": "Entschuldigung, kann ich bitte das Salz haben?",
    "english": "salt",
    "englishExample": "Excuse me, can I have the salt please?",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-747",
    "index": 747,
    "german": "der Satz, -ä, e",
    "germanExample": "Dieser Satz ist sehr einfach.",
    "english": "sentence",
    "englishExample": "This sentence is very simple.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-748",
    "index": 748,
    "german": "die S-Bahn",
    "germanExample": "Ich nehme lieber die S-Bahn.",
    "english": "commuter train",
    "englishExample": "I prefer to take the commuter train.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-749",
    "index": 749,
    "german": "der Schalter",
    "germanExample": "Gehen Sie bitte zum Schalter drei!",
    "english": "counter",
    "englishExample": "Please go to counter 3!",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-750",
    "index": 750,
    "german": "scheinen",
    "germanExample": "Die Sonne scheint.",
    "english": "to shine",
    "englishExample": "The sun is shining.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-751",
    "index": 751,
    "german": "schicken",
    "germanExample": "Bitte schicken Sie mir eine E-Mail.",
    "english": "to send",
    "englishExample": "Please send me an email.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-752",
    "index": 752,
    "german": "das Schild, -er",
    "germanExample": "Haben Sie nicht das Schild gesehen?",
    "english": "sign",
    "englishExample": "Did you not see the sign?",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-753",
    "index": 753,
    "german": "der Schinken, –",
    "germanExample": "Ich möchte gern ein Schinkenbrot.",
    "english": "ham",
    "englishExample": "I would like a ham roll.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-754",
    "index": 754,
    "german": "schlafen",
    "germanExample": "Ich schlafe meistens acht Stunden.",
    "english": "to sleep",
    "englishExample": "I usually sleep for eight hours.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-755",
    "index": 755,
    "german": "schlecht",
    "germanExample": "Mir ist schlecht!",
    "english": "sick",
    "englishExample": "I am sick. NB: ill",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-756",
    "index": 756,
    "german": "schlecht",
    "germanExample": "Sie sehen schlecht aus.",
    "english": "bad",
    "englishExample": "You look bad.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-757",
    "index": 757,
    "german": "schlecht",
    "germanExample": "Wir haben schlechtes Wetter.",
    "english": "bad",
    "englishExample": "We have bad weather.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-758",
    "index": 758,
    "german": "schließen",
    "germanExample": "Bitte, schließen Sie die Tür.",
    "english": "to close",
    "englishExample": "Please close the door.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-759",
    "index": 759,
    "german": "geschlossen",
    "germanExample": "Die Bank hat am Samstag geschlossen.",
    "english": "closed",
    "englishExample": "The bank is closed on Saturday.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-760",
    "index": 760,
    "german": "der Schluss",
    "germanExample": "Ich muss jetzt Schluss machen.",
    "english": "… I need to finish/wrap up now.",
    "englishExample": "",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-761",
    "index": 761,
    "german": "der Schluss",
    "germanExample": "Zum Schluss gibt er uns allen die Hand.",
    "english": "end",
    "englishExample": "At the end, he shakes everyone’s hand.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-762",
    "index": 762,
    "german": "der Schlüssel, –",
    "germanExample": "Ich gebe Ihnen noch den Zimmerschlüssel.",
    "english": "key",
    "englishExample": "I’ll give you the room key as well.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-763",
    "index": 763,
    "german": "schmecken",
    "germanExample": "Schmeckt das gut?",
    "english": "to taste",
    "englishExample": "Does that taste good?",
    "category": "food",
    "article": null
  },
  {
    "id": "card-764",
    "index": 764,
    "german": "schnell",
    "germanExample": "Er fährt schnell.",
    "english": "quick / fast",
    "englishExample": "He drives fast.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-765",
    "index": 765,
    "german": "schon",
    "germanExample": "Ist das Essen schon fertig?",
    "english": "already",
    "englishExample": "Is the food done already?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-766",
    "index": 766,
    "german": "schön",
    "germanExample": "Schönen Urlaub!",
    "english": "lovely",
    "englishExample": "Have a lovely holiday!",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-767",
    "index": 767,
    "german": "schön",
    "germanExample": "Das ist sehr schön.",
    "english": "beautiful",
    "englishExample": "That is very beautiful.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-768",
    "index": 768,
    "german": "der Schrank, -ä, e",
    "germanExample": "Die Gläser stehen im Schrank.",
    "english": "cupboard",
    "englishExample": "The glasses are in the cupboard.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-769",
    "index": 769,
    "german": "schreiben",
    "germanExample": "Er schreibt jeden Tag fünfzig E-Mails.",
    "english": "to write",
    "englishExample": "He writes fifty emails a day.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-770",
    "index": 770,
    "german": "der Schuh, -e",
    "germanExample": "Zieh die Schuhe aus!",
    "english": "shoe",
    "englishExample": "Take your shoes off!",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-771",
    "index": 771,
    "german": "die Schule",
    "germanExample": "Meine Tochter geht schon in die Schule.",
    "english": "school",
    "englishExample": "My daughter is already going to school.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-772",
    "index": 772,
    "german": "die Schule",
    "germanExample": "Die Schule ist gleich hier um die Ecke.",
    "english": "school",
    "englishExample": "The school is right around the corner.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-773",
    "index": 773,
    "german": "der Schüler, –",
    "germanExample": "In meinem Kurs sind acht Schülerinnen und fünf Schüler.",
    "english": "pupil",
    "englishExample": "In my course there are 7 female pupils and 5 male pupils.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-774",
    "index": 774,
    "german": "schwer",
    "germanExample": "Ist Ihr Gepäck sehr schwer?",
    "english": "heavy",
    "englishExample": "Is your luggage very heavy?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-775",
    "index": 775,
    "german": "schwer",
    "germanExample": "Das ist eine schwere Arbeit.",
    "english": "difficult",
    "englishExample": "That is a very difficult job.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-776",
    "index": 776,
    "german": "die Schwester, -n",
    "germanExample": "Meine Schwester kommt am Dienstag.",
    "english": "sister",
    "englishExample": "My sister is coming on Tuesday.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-777",
    "index": 777,
    "german": "schwimmen",
    "germanExample": "Ich schwimme jeden Tag einen Kilometer.",
    "english": "to swim",
    "englishExample": "I swim a kilometre every day.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-778",
    "index": 778,
    "german": "das Schwimmbad",
    "germanExample": "Kommst du mit ins Schwimmbad?",
    "english": "swimming pool",
    "englishExample": "Are you coming to the swimming pool with us?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-779",
    "index": 779,
    "german": "der See",
    "germanExample": "Komm, wir fahren zum Starnberger See.",
    "english": "lake",
    "englishExample": "Come, we’re going to Starnberg lake.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-780",
    "index": 780,
    "german": "sehen",
    "germanExample": "Ich kann dich nicht sehen.",
    "english": "to see",
    "englishExample": "I can’t see you.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-781",
    "index": 781,
    "german": "sehen",
    "germanExample": "Ich habe diesen Jungen schon einmal gesehen.",
    "english": "to see",
    "englishExample": "I have seen this boy before.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-782",
    "index": 782,
    "german": "die Sehenswürdigkeit, -en",
    "germanExample": "Welche Sehenswürdigkeiten gibt es in Frankfurt?",
    "english": "sights/attractions",
    "englishExample": "Which sights are there to see in Frankfurt?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-783",
    "index": 783,
    "german": "sehr",
    "germanExample": "Danke sehr!",
    "english": "very",
    "englishExample": "Thank you very much!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-784",
    "index": 784,
    "german": "sehr",
    "germanExample": "Das ist sehr schwer.",
    "english": "very",
    "englishExample": "That is very heavy. alt: That is very difficult.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-785",
    "index": 785,
    "german": "sein",
    "germanExample": "Herr Müller ist in seinem Zimmer.",
    "english": "his",
    "englishExample": "Mr Müller is in his room.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-786",
    "index": 786,
    "german": "sein",
    "germanExample": "Mir ist kalt.",
    "english": "to be",
    "englishExample": "I'm cold.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-787",
    "index": 787,
    "german": "sein",
    "germanExample": "Ich bin dreiundzwanzig.",
    "english": "to be",
    "englishExample": "I am twenty three.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-788",
    "index": 788,
    "german": "an sein",
    "germanExample": "Das Licht ist noch an.",
    "english": "to be on",
    "englishExample": "The light is still on.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-789",
    "index": 789,
    "german": "auf sein",
    "germanExample": "Das Fenster ist noch auf.",
    "english": "to be open",
    "englishExample": "The window is still open.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-790",
    "index": 790,
    "german": "weg sein",
    "germanExample": "Herr Meier ist schon weg.",
    "english": "to be gone",
    "englishExample": "Mr Meier is already gone.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-791",
    "index": 791,
    "german": "zu sein",
    "germanExample": "Die Tür ist zu.",
    "english": "to be closed",
    "englishExample": "The door is closed.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-792",
    "index": 792,
    "german": "seit",
    "germanExample": "Ich wohne seit drei Jahren in Köln.",
    "english": "for (an amount of time)",
    "englishExample": "I have lived in Cologne for three years.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-793",
    "index": 793,
    "german": "selbstständig",
    "germanExample": "Er ist selbstständig.",
    "english": "independent",
    "englishExample": "He is independent.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-794",
    "index": 794,
    "german": "sich",
    "germanExample": "Sie müssen sich erst anmelden.",
    "english": "yourself",
    "englishExample": "You must register yourself first.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-795",
    "index": 795,
    "german": "sie",
    "germanExample": "Wie heißt sie?",
    "english": "she",
    "englishExample": "What is her name? (What is she called?)",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-796",
    "index": 796,
    "german": "Sie",
    "germanExample": "Wie heißen Sie, bitte?",
    "english": "you (polite)",
    "englishExample": "What is your name, please?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-797",
    "index": 797,
    "german": "sitzen",
    "germanExample": "Wo sitzen Sie?",
    "english": "to sit",
    "englishExample": "Where are you sitting?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-798",
    "index": 798,
    "german": "so",
    "germanExample": "Sie müssen das so machen!",
    "english": "like this",
    "englishExample": "You must do it like this!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-799",
    "index": 799,
    "german": "so",
    "germanExample": "Fahren Sie bitte nicht so schnell!",
    "english": "so",
    "englishExample": "Please don’t drive so fast!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-800",
    "index": 800,
    "german": "so",
    "germanExample": "Meine Frau ist so groß wie ich.",
    "english": "as",
    "englishExample": "My wife is as tall as me.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-801",
    "index": 801,
    "german": "so",
    "germanExample": "So, das war's/wär's!",
    "english": "so",
    "englishExample": "So, that's it!",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-802",
    "index": 802,
    "german": "das Sofa",
    "germanExample": "Das Sofa ist neu.",
    "english": "sofa",
    "englishExample": "The sofa is new.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-803",
    "index": 803,
    "german": "sofort",
    "germanExample": "Bitte antworten Sie sofort.",
    "english": "immediately",
    "englishExample": "Please answer immediately.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-804",
    "index": 804,
    "german": "der Sohn, -ö, e",
    "germanExample": "Das ist Hans, mein Sohn.",
    "english": "son",
    "englishExample": "That is Hans, my son.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-805",
    "index": 805,
    "german": "sollen",
    "germanExample": "Soll ich kommen?",
    "english": "should",
    "englishExample": "Should/Shall I come?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-806",
    "index": 806,
    "german": "sollen",
    "germanExample": "Was soll ich mitbringen?",
    "english": "should",
    "englishExample": "What should I bring with me?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-807",
    "index": 807,
    "german": "die Sonne",
    "germanExample": "Die Sonne scheint.",
    "english": "sun",
    "englishExample": "The sun is shining.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-808",
    "index": 808,
    "german": "spät",
    "germanExample": "Es ist schon spät, ich muss gehen.",
    "english": "late",
    "englishExample": "It is already late, I need to go.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-809",
    "index": 809,
    "german": "später",
    "germanExample": "Das können wir später machen.",
    "english": "later",
    "englishExample": "We can do that later.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-810",
    "index": 810,
    "german": "die Speisekarte",
    "germanExample": "Bringen Sie mir die Speisekarte, bitte.",
    "english": "menu",
    "englishExample": "Bring me the menu, please.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-811",
    "index": 811,
    "german": "spielen",
    "germanExample": "Die Kunden spielen draußen.",
    "english": "to play",
    "englishExample": "The children are playing outside.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-812",
    "index": 812,
    "german": "spielen",
    "germanExample": "Spielen Sie Karten?",
    "english": "to play",
    "englishExample": "Do you play cards?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-813",
    "index": 813,
    "german": "der Sport",
    "germanExample": "Ich mache viel Sport.",
    "english": "sport",
    "englishExample": "I do a lot of sport.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-814",
    "index": 814,
    "german": "die Sprache, -n",
    "germanExample": "Welche Sprachen sprichst du?",
    "english": "language",
    "englishExample": "Which languages do you speak?",
    "category": "basic",
    "article": "die"
  },
  {
    "id": "card-815",
    "index": 815,
    "german": "sprechen",
    "germanExample": "Kann ich (mit) Herrn Klein sprechen?",
    "english": "to speak",
    "englishExample": "Can I speak with Mr Klein?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-816",
    "index": 816,
    "german": "die Stadt, -ä, e",
    "germanExample": "Heidelberg ist eine alte Stadt.",
    "english": "town / city",
    "englishExample": "Heidelberg is an old town.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-817",
    "index": 817,
    "german": "stehen",
    "germanExample": "Ich glaube es nicht, aber es steht in der Zeitung.",
    "english": "to be (written)",
    "englishExample": "I don’t believe it, but it says so in the paper.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-818",
    "index": 818,
    "german": "stehen",
    "germanExample": "Der Bus steht schon an der Haltestelle.",
    "english": "to be (located)",
    "englishExample": "The bus is already at the stop.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-819",
    "index": 819,
    "german": "die Stelle, -n",
    "germanExample": "Ich habe eine neue Stelle.",
    "english": "job / position",
    "englishExample": "I have a new job.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-820",
    "index": 820,
    "german": "stellen",
    "germanExample": "Stell die Tasche rechts in die Ecke!",
    "english": "to put",
    "englishExample": "Put your bag on the right in the corner.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-821",
    "index": 821,
    "german": "der Stock",
    "germanExample": "Unsere Wohnung liegt im ersten Stock.",
    "english": "floor (of a building)",
    "englishExample": "Our flat is on the first floor.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-822",
    "index": 822,
    "german": "die Straße, -n",
    "germanExample": "In welcher Straße wohnen Sie?",
    "english": "street",
    "englishExample": "Which street do you live on?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-823",
    "index": 823,
    "german": "die Straßenbahn",
    "germanExample": "Wo fährt die Straßenbahn ab?",
    "english": "tram",
    "englishExample": "From where does the tram depart?",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-824",
    "index": 824,
    "german": "studieren",
    "germanExample": "Ich studiere in Mainz.",
    "english": "to study",
    "englishExample": "I study in Mainz.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-825",
    "index": 825,
    "german": "das Studium",
    "germanExample": "Das Studium beginnt im Oktober.",
    "english": "degree course",
    "englishExample": "The degree course begins in October.",
    "category": "work",
    "article": "das"
  },
  {
    "id": "card-826",
    "index": 826,
    "german": "der Student, -en",
    "germanExample": "Ich bin Studentin.",
    "english": "student",
    "englishExample": "I am a (female) student.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-827",
    "index": 827,
    "german": "die Stunde, -n",
    "germanExample": "Ich bin in einer Stunde zurück.",
    "english": "hour",
    "englishExample": "I will be back in an hour.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-828",
    "index": 828,
    "german": "suchen",
    "germanExample": "Suchst du etwas?",
    "english": "to look / search for",
    "englishExample": "Are you looking for something?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-829",
    "index": 829,
    "german": "tanzen",
    "germanExample": "Tanzen Sie gern?",
    "english": "to dance",
    "englishExample": "Do you like to dance?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-830",
    "index": 830,
    "german": "die Tasche, -n",
    "germanExample": "Ich habe die Schlüssel in der Tasche.",
    "english": "bag",
    "englishExample": "I have the key in the bag.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-831",
    "index": 831,
    "german": "das Taxi, -s",
    "germanExample": "Es gibt heute keinen Bus mehr. Er fährt mit dem Taxi.",
    "english": "taxi",
    "englishExample": "There are no more buses today. He is travelling by taxi.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-832",
    "index": 832,
    "german": "der Tee",
    "germanExample": "Ich trinke morgens immer Tee.",
    "english": "tea",
    "englishExample": "I always drink tea in the morning.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-833",
    "index": 833,
    "german": "der Teil, -e",
    "germanExample": "Lies bitte auch den zweiten Teil.",
    "english": "part",
    "englishExample": "Please also read the second part.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-834",
    "index": 834,
    "german": "telefonieren",
    "germanExample": "Darf ich mal telefonieren?",
    "english": "to telephone",
    "englishExample": "May I make a phone call?",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-835",
    "index": 835,
    "german": "das Telefon",
    "germanExample": "Haben Sie ein Telefon?",
    "english": "telephone",
    "englishExample": "Do you have a telephone?",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-836",
    "index": 836,
    "german": "der Termin, -e",
    "germanExample": "Am besten machen wir sofort einen Termin.",
    "english": "appointment",
    "englishExample": "It's best to make an appointment immediately.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-837",
    "index": 837,
    "german": "der Test",
    "germanExample": "Der Test war einfach.",
    "english": "test",
    "englishExample": "The test was simple.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-838",
    "index": 838,
    "german": "teuer",
    "germanExample": "Das ist mir zu teuer.",
    "english": "expensive",
    "englishExample": "That is too expensive for me.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-839",
    "index": 839,
    "german": "der Text, -e",
    "germanExample": "Lesen Sie bitte diesen Text.",
    "english": "text",
    "englishExample": "Please read this text.",
    "category": "noun",
    "article": "der"
  },
  {
    "id": "card-840",
    "index": 840,
    "german": "das Thema",
    "germanExample": "Wir sprechen heute über das Thema „Essen und Trinken'.",
    "english": "topic",
    "englishExample": "Today we are talking about the topic 'Food and Drink'.",
    "category": "noun",
    "article": "das"
  },
  {
    "id": "card-841",
    "index": 841,
    "german": "das Ticket, -s",
    "germanExample": "Wie viel kostet das Ticket?",
    "english": "ticket",
    "englishExample": "How much does the ticket cost?",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-842",
    "index": 842,
    "german": "der Tisch, -e",
    "germanExample": "Die Fotos liegen auf dem Tisch.",
    "english": "table",
    "englishExample": "The photos are on the table.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-843",
    "index": 843,
    "german": "die Tochter, -ö",
    "germanExample": "Das ist meine Tochter Katharina.",
    "english": "daughter",
    "englishExample": "That is my daughter Katharina.",
    "category": "family",
    "article": "die"
  },
  {
    "id": "card-844",
    "index": 844,
    "german": "die Toilette, -en",
    "germanExample": "Wo ist die Toilette, bitte?",
    "english": "toilet",
    "englishExample": "Where is the toilet, please?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-845",
    "index": 845,
    "german": "die Tomate, -n",
    "germanExample": "Die Tomate ist noch grün.",
    "english": "tomato",
    "englishExample": "The tomato is still green.",
    "category": "food",
    "article": "die"
  },
  {
    "id": "card-846",
    "index": 846,
    "german": "tot",
    "germanExample": "Sein Vater ist schon lange tot.",
    "english": "dead",
    "englishExample": "His father has been dead for a long time.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-847",
    "index": 847,
    "german": "(sich) treffen",
    "germanExample": "Ich treffe in der Stadt einen Kollegen.",
    "english": "to meet",
    "englishExample": "I am meeting a colleague in town. NB: male",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-848",
    "index": 848,
    "german": "(sich) treffen",
    "germanExample": "Wir treffen uns immer freitags.",
    "english": "to meet",
    "englishExample": "We always meet on Fridays.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-849",
    "index": 849,
    "german": "die Treppe, -n",
    "germanExample": "Die Toilette? Die Treppe hoch und dann links.",
    "english": "stairs",
    "englishExample": "The toilet? Up the stairs and then left.",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-850",
    "index": 850,
    "german": "trinken",
    "germanExample": "Möchtest du etwas trinken?",
    "english": "to drink",
    "englishExample": "Would you like something to drink?",
    "category": "food",
    "article": null
  },
  {
    "id": "card-851",
    "index": 851,
    "german": "tschüss",
    "germanExample": "Junge Leute sagen meistens „tschüss!' und nicht „auf Wiedersehen'.",
    "english": "... Young people mostly say 'tschüss!' and not 'auf Wiedersehen'.",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-852",
    "index": 852,
    "german": "tun",
    "germanExample": "Ich habe noch etwas zu tun.",
    "english": "to do",
    "englishExample": "I still have something to do.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-853",
    "index": 853,
    "german": "tun",
    "germanExample": "Was tut Ihr Mann?",
    "english": "to do",
    "englishExample": "What does your husband do? NB: very broad question",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-854",
    "index": 854,
    "german": "über",
    "germanExample": "Gehen Sie hier über die Straße.",
    "english": "across",
    "englishExample": "Go across the street here.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-855",
    "index": 855,
    "german": "über",
    "germanExample": "Er wohnt im zweiten Stock über Familie Meier.",
    "english": "above",
    "englishExample": "He lives on the second floor above the Meier family.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-856",
    "index": 856,
    "german": "über",
    "germanExample": "Sind Sie über 18?",
    "english": "over",
    "englishExample": "Are you over 18?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-857",
    "index": 857,
    "german": "übernachten",
    "germanExample": "Du kannst bei mir übernachten.",
    "english": "to stay overnight",
    "englishExample": "You can stay at mine overnight.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-858",
    "index": 858,
    "german": "überweisen",
    "germanExample": "Sie können das Geld auch überweisen.",
    "english": "to transfer",
    "englishExample": "You can also transfer the money.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-859",
    "index": 859,
    "german": "die Uhr",
    "germanExample": "Es ist vier Uhr.",
    "english": "o'clock / am / pm",
    "englishExample": "It is four o’clock.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-860",
    "index": 860,
    "german": "um Er kommt um sieben Uhr.",
    "germanExample": "",
    "english": "at",
    "englishExample": "He is coming at seven o’clock.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-861",
    "index": 861,
    "german": "um",
    "germanExample": "Da kommt er gerade um die Ecke.",
    "english": "around",
    "englishExample": "Here he comes around the corner now.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-862",
    "index": 862,
    "german": "umziehen",
    "germanExample": "Nächsten Monat ziehen wir um.",
    "english": "to move (residence)",
    "englishExample": "Next month we are moving.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-863",
    "index": 863,
    "german": "und",
    "germanExample": "Peter und Helmut sind meine Söhne.",
    "english": "and",
    "englishExample": "Peter and Helmut are my sons.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-864",
    "index": 864,
    "german": "unser-",
    "germanExample": "Das ist unsere Lehrerin.",
    "english": "our",
    "englishExample": "That is our teacher. NB: female",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-865",
    "index": 865,
    "german": "unten",
    "germanExample": "Er wohnt ganz unten im Haus.",
    "english": "at the bottom",
    "englishExample": "He lives right at the bottom of the house.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-866",
    "index": 866,
    "german": "unter",
    "germanExample": "Unter uns wohnt eine Familie mit drei Kindern.",
    "english": "below",
    "englishExample": "Below us lives a family with three children.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-867",
    "index": 867,
    "german": "der Unterricht",
    "germanExample": "Wir haben Unterricht von 8:00 bis 12:00 Uhr.",
    "english": "class",
    "englishExample": "We have classes from 8 am until 12 pm.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-868",
    "index": 868,
    "german": "unterschreiben",
    "germanExample": "Wo muss ich unterschreiben?",
    "english": "to sign",
    "englishExample": "Where do I need to sign?",
    "category": "work",
    "article": null
  },
  {
    "id": "card-869",
    "index": 869,
    "german": "die Unterschrift",
    "germanExample": "Hier fehlt noch Ihre Unterschrift.",
    "english": "signature",
    "englishExample": "Your signature is missing here.",
    "category": "work",
    "article": "die"
  },
  {
    "id": "card-870",
    "index": 870,
    "german": "der Urlaub",
    "germanExample": "Ich nehme im September Urlaub.",
    "english": "holiday",
    "englishExample": "I’m taking holiday in September.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-871",
    "index": 871,
    "german": "der Vater, -ä",
    "germanExample": "Mein Vater ist Arbeiter.",
    "english": "father",
    "englishExample": "My father is a worker.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-872",
    "index": 872,
    "german": "verboten",
    "germanExample": "Hier ist Rauchen verboten.",
    "english": "forbidden",
    "englishExample": "Smoking is forbidden here.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-873",
    "index": 873,
    "german": "verdienen",
    "germanExample": "Ich verdiene 1.500 Euro im Monat.",
    "english": "to earn",
    "englishExample": "I earn 1,500 euros per month.",
    "category": "work",
    "article": null
  },
  {
    "id": "card-874",
    "index": 874,
    "german": "der Verein",
    "germanExample": "Es gibt einen neuen Sportverein in der Stadt.",
    "english": "club",
    "englishExample": "There is a new sports club in the town.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-875",
    "index": 875,
    "german": "verheiratet",
    "germanExample": "Ich bin verheiratet und habe drei Kinder.",
    "english": "married",
    "englishExample": "I am married and have three children.",
    "category": "family",
    "article": null
  },
  {
    "id": "card-876",
    "index": 876,
    "german": "verkaufen",
    "germanExample": "Er verkauft sein altes Auto.",
    "english": "to sell",
    "englishExample": "He is selling his old car.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-877",
    "index": 877,
    "german": "der Verkäufer, –",
    "germanExample": "Meine Mutter ist Verkäuferin im Kaufhaus.",
    "english": "salesperson",
    "englishExample": "My mother is a saleswoman in a department store.",
    "category": "work",
    "article": "der"
  },
  {
    "id": "card-878",
    "index": 878,
    "german": "vermieten",
    "germanExample": "Die Wohnung ist schon vermietet.",
    "english": "to rent out",
    "englishExample": "The flat is already rented out.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-879",
    "index": 879,
    "german": "der Vermieter",
    "germanExample": "Unser Vermieter heißt Huber. Er wohnt auch hier.",
    "english": "landlord",
    "englishExample": "Our landlord is called Huber. He lives here, too.",
    "category": "everyday",
    "article": "der"
  },
  {
    "id": "card-880",
    "index": 880,
    "german": "verstehen",
    "germanExample": "Können Sie mich verstehen?",
    "english": "to understand",
    "englishExample": "Can you understand me?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-881",
    "index": 881,
    "german": "der Verwandte, -n",
    "germanExample": "Peter besucht seine Verwandten in Polen.",
    "english": "relative",
    "englishExample": "Peter visits his relatives in Poland.",
    "category": "family",
    "article": "der"
  },
  {
    "id": "card-882",
    "index": 882,
    "german": "viel",
    "germanExample": "Hier regnet es viel.",
    "english": "a lot",
    "englishExample": "It rains a lot here.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-883",
    "index": 883,
    "german": "vielleicht",
    "germanExample": "Ich komme vielleicht mit dem Bus.",
    "english": "perhaps / may(be)",
    "englishExample": "I may come by bus.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-884",
    "index": 884,
    "german": "von",
    "germanExample": "Das Auto von Felix ist kaputt.",
    "english": "of (possessive 's')",
    "englishExample": "Felix’s car is broken.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-885",
    "index": 885,
    "german": "von",
    "germanExample": "Er kommt gerade von Köln/von zu Hause.",
    "english": "from",
    "englishExample": "He’s coming from Cologne/home now.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-886",
    "index": 886,
    "german": "vor",
    "germanExample": "Der Termin war vor einer Stunde.",
    "english": "ago",
    "englishExample": "The appointment was an hour ago.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-887",
    "index": 887,
    "german": "vor",
    "germanExample": "Das Auto steht vor der Tür.",
    "english": "in front of",
    "englishExample": "The car is in front of the door.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-888",
    "index": 888,
    "german": "der Vorname, -n",
    "germanExample": "Ich heiße Müller, mein Vorname ist Eva.",
    "english": "first name",
    "englishExample": "I’m called Müller, my first name is Eva.",
    "category": "basic",
    "article": "der"
  },
  {
    "id": "card-889",
    "index": 889,
    "german": "die Vorsicht",
    "germanExample": "Vorsicht! Da kommt ein Auto.",
    "english": "… Careful! There’s a car coming.",
    "englishExample": "",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-890",
    "index": 890,
    "german": "die Vorsicht",
    "germanExample": "Er arbeitet mit Vorsicht.",
    "english": "attention",
    "englishExample": "He works with caution.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-891",
    "index": 891,
    "german": "(sich) vorstellen",
    "germanExample": "Wir wollen uns kennenlernen. Können Sie sich bitte vorstellen?",
    "english": "to introduce",
    "englishExample": "We would like to get to know each other. Can you introduce yourself?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-892",
    "index": 892,
    "german": "die Vorwahl",
    "germanExample": "Wie ist die Vorwahl von München?",
    "english": "area code",
    "englishExample": "What is the area code for Munich?",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-893",
    "index": 893,
    "german": "wandern",
    "germanExample": "Wir wandern um den Chiemsee.",
    "english": "to hike",
    "englishExample": "We are hiking around the Chiem lake.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-894",
    "index": 894,
    "german": "wann",
    "germanExample": "Wann bist du fertig?",
    "english": "when",
    "englishExample": "When will you be finished?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-895",
    "index": 895,
    "german": "wann",
    "germanExample": "Wann kann ich Sie anrufen?",
    "english": "when",
    "englishExample": "When can I call you?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-896",
    "index": 896,
    "german": "wann",
    "germanExample": "Wann sind Sie geboren?",
    "english": "when",
    "englishExample": "When were you born?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-897",
    "index": 897,
    "german": "warten",
    "germanExample": "Können Sie ein paar Minuten warten?",
    "english": "to wait",
    "englishExample": "Can you wait a few minutes?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-898",
    "index": 898,
    "german": "warten",
    "germanExample": "Auf wen warten Sie?",
    "english": "to wait",
    "englishExample": "Who are you waiting for?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-899",
    "index": 899,
    "german": "warum",
    "germanExample": "Warum kommt er nicht?",
    "english": "why",
    "englishExample": "Why isn’t he coming?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-900",
    "index": 900,
    "german": "was",
    "germanExample": "Was ist das?",
    "english": "what",
    "englishExample": "What is that?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-901",
    "index": 901,
    "german": "was",
    "germanExample": "Was möchten Sie?",
    "english": "what",
    "englishExample": "What would you like?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-902",
    "index": 902,
    "german": "was für ein",
    "germanExample": "Was für eine Farbe möchten Sie?",
    "english": "what kind of",
    "englishExample": "What colour would you like?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-903",
    "index": 903,
    "german": "(sich) waschen",
    "germanExample": "Wo kann ich mir die Hände waschen?",
    "english": "to wash",
    "englishExample": "Where can I wash my hands?",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-904",
    "index": 904,
    "german": "(sich) waschen",
    "germanExample": "Ich muss morgen waschen.",
    "english": "to wash",
    "englishExample": "I need to do laundry tomorrow.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-905",
    "index": 905,
    "german": "das Wasser",
    "germanExample": "Ein Glas Wasser, bitte.",
    "english": "water",
    "englishExample": "A glass of water, please.",
    "category": "food",
    "article": "das"
  },
  {
    "id": "card-906",
    "index": 906,
    "german": "weh tun",
    "germanExample": "Ich muss zum Arzt. Mein Bein tut weh.",
    "english": "to hurt",
    "englishExample": "I need to go to the doctor. My leg hurts.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-907",
    "index": 907,
    "german": "weiblich",
    "germanExample": "Kreuzen Sie bitte an: „weiblich' oder „männlich'.",
    "english": "female",
    "englishExample": "Please tick 'female' or 'male'.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-908",
    "index": 908,
    "german": "der Wein",
    "germanExample": "Nein danke, ich möchte keinen Wein.",
    "english": "wine",
    "englishExample": "No thank you, I don’t want any wine.",
    "category": "food",
    "article": "der"
  },
  {
    "id": "card-909",
    "index": 909,
    "german": "weit",
    "germanExample": "Zum Bahnhof ist es nicht weit.",
    "english": "far",
    "englishExample": "It is not far to the station.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-910",
    "index": 910,
    "german": "weiter",
    "germanExample": "Der Bus fährt nicht weiter.",
    "english": "further",
    "englishExample": "The bus doesn’t go any further.",
    "category": "outside",
    "article": null
  },
  {
    "id": "card-911",
    "index": 911,
    "german": "welch-",
    "germanExample": "Welches Buch möchtest du?",
    "english": "which",
    "englishExample": "Which book would you like?",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-912",
    "index": 912,
    "german": "die Welt",
    "germanExample": "Es gibt viele Probleme auf der Welt.",
    "english": "world",
    "englishExample": "There are many problems in the world.",
    "category": "outside",
    "article": "die"
  },
  {
    "id": "card-913",
    "index": 913,
    "german": "wenig",
    "germanExample": "Ich habe leider nur wenig verstanden.",
    "english": "little / not very much",
    "englishExample": "Unfortunately I didn't understand very much.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-914",
    "index": 914,
    "german": "wenig",
    "germanExample": "Er verdient wenig.",
    "english": "little",
    "englishExample": "He earns little.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-915",
    "index": 915,
    "german": "wer",
    "germanExample": "Wer ist das?",
    "english": "who",
    "englishExample": "Who is that?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-916",
    "index": 916,
    "german": "werden",
    "germanExample": "Mein Sohn will Arzt werden.",
    "english": "to become",
    "englishExample": "My son wants to become a doctor.",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-917",
    "index": 917,
    "german": "das Wetter",
    "germanExample": "Wir hatten schlechtes Wetter.",
    "english": "weather",
    "englishExample": "We had bad weather.",
    "category": "outside",
    "article": "das"
  },
  {
    "id": "card-918",
    "index": 918,
    "german": "wichtig",
    "germanExample": "Dieses Formular ist sehr wichtig.",
    "english": "important",
    "englishExample": "This form is very important.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-919",
    "index": 919,
    "german": "wie",
    "germanExample": "Wie heißt du?",
    "english": "what",
    "englishExample": "What are you called?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-920",
    "index": 920,
    "german": "wie",
    "germanExample": "Er schreibt wie ein Kind.",
    "english": "like",
    "englishExample": "He writes like a child.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-921",
    "index": 921,
    "german": "wie",
    "germanExample": "Meine Frau ist so groß wie ich.",
    "english": "as",
    "englishExample": "My wife is as tall as me.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-922",
    "index": 922,
    "german": "wie",
    "germanExample": "Wie soll ich das machen?",
    "english": "how",
    "englishExample": "How should I do that?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-923",
    "index": 923,
    "german": "wie",
    "germanExample": "Wie groß ist die Wohnung?",
    "english": "how",
    "englishExample": "How big is the flat?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-924",
    "index": 924,
    "german": "wie",
    "germanExample": "Wie bitte?",
    "english": "… Pardon?",
    "englishExample": "",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-925",
    "index": 925,
    "german": "wie",
    "germanExample": "Wie lange bist du schon hier?",
    "english": "how",
    "englishExample": "How long have you been here already?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-926",
    "index": 926,
    "german": "wiederholen",
    "germanExample": "Können Sie das bitte wiederholen?",
    "english": "to repeat",
    "englishExample": "Can you repeat that, please?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-927",
    "index": 927,
    "german": "das Wiederhören",
    "germanExample": "Auf Wiederhören!",
    "english": "… Goodbye! NB: used on the telephone",
    "englishExample": "",
    "category": "basic",
    "article": "das"
  },
  {
    "id": "card-928",
    "index": 928,
    "german": "das Wiedersehen",
    "germanExample": "Auf Wiedersehen!",
    "english": "… Goodbye! lit: 'until we see each other again'",
    "englishExample": "",
    "category": "basic",
    "article": "das"
  },
  {
    "id": "card-929",
    "index": 929,
    "german": "wie viel",
    "germanExample": "Wie viel Milch nehmen Sie?",
    "english": "how much",
    "englishExample": "How much milk do you take?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-930",
    "index": 930,
    "german": "willkommen",
    "germanExample": "Herzlich willkommen!",
    "english": "… Welcome!",
    "englishExample": "",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-931",
    "index": 931,
    "german": "der Wind",
    "germanExample": "Der Wind kommt aus Osten.",
    "english": "wind",
    "englishExample": "The wind is coming from the east.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-932",
    "index": 932,
    "german": "wir",
    "germanExample": "Wir lernen Deutsch.",
    "english": "we",
    "englishExample": "We are learning German.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-933",
    "index": 933,
    "german": "wissen",
    "germanExample": "Weißt du, wie er heißt?",
    "english": "to know",
    "englishExample": "Do you know what he is called?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-934",
    "index": 934,
    "german": "wo",
    "germanExample": "Wo waren Sie im Urlaub?",
    "english": "where",
    "englishExample": "Where were you on holiday?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-935",
    "index": 935,
    "german": "wo",
    "germanExample": "Wo ist die Post?",
    "english": "where",
    "englishExample": "Where is the post office?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-936",
    "index": 936,
    "german": "wo",
    "germanExample": "Wo sind Sie geboren?",
    "english": "where",
    "englishExample": "Where were you born?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-937",
    "index": 937,
    "german": "woher",
    "germanExample": "Woher kommen Sie?",
    "english": "from where",
    "englishExample": "Where do you come from?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-938",
    "index": 938,
    "german": "wohin",
    "germanExample": "Wohin fährt dieser Bus?",
    "english": "to where",
    "englishExample": "Where does this bus go?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-939",
    "index": 939,
    "german": "wohin",
    "germanExample": "Wohin wollen Sie am Wochenende?",
    "english": "to where",
    "englishExample": "Where do you want to go this weekend?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-940",
    "index": 940,
    "german": "wohnen",
    "germanExample": "Ich wohne in München.",
    "english": "to live",
    "englishExample": "I live in Munich.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-941",
    "index": 941,
    "german": "die Wohnung, -en",
    "germanExample": "Seit wann haben Sie diese Wohnung?",
    "english": "appartment",
    "englishExample": "How long have you had this flat? NB: for how long...?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-942",
    "index": 942,
    "german": "wollen",
    "germanExample": "Wollen Sie einen Kaffee trinken?",
    "english": "to want",
    "englishExample": "Do you want to get a coffee?",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-943",
    "index": 943,
    "german": "das Wort, -ö, er/-e",
    "germanExample": "Ich kenne das Wort nicht.",
    "english": "word",
    "englishExample": "I don’t know that word.",
    "category": "basic",
    "article": "das"
  },
  {
    "id": "card-944",
    "index": 944,
    "german": "wunderbar",
    "germanExample": "Das Essen schmeckt wunderbar.",
    "english": "wonderful",
    "englishExample": "The food tastes wonderful.",
    "category": "basic",
    "article": null
  },
  {
    "id": "card-945",
    "index": 945,
    "german": "zahlen",
    "germanExample": "Wir möchten zahlen, bitte!",
    "english": "to pay",
    "englishExample": "We’d like to pay, please!",
    "category": "verb",
    "article": null
  },
  {
    "id": "card-946",
    "index": 946,
    "german": "die Zeit",
    "germanExample": "Ich habe heute keine Zeit.",
    "english": "time",
    "englishExample": "I have no time today",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-947",
    "index": 947,
    "german": "zurzeit",
    "germanExample": "Zurzeit habe ich sehr viel zu tun.",
    "english": "at the moment",
    "englishExample": "I have a lot to do at the moment.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-948",
    "index": 948,
    "german": "die Zeitung, -en",
    "germanExample": "Ich lese gern Zeitung.",
    "english": "newspaper",
    "englishExample": "I like to read the newspaper.",
    "category": "noun",
    "article": "die"
  },
  {
    "id": "card-949",
    "index": 949,
    "german": "die Zigarette, -n",
    "germanExample": "Wie teuer sind die Zigaretten?",
    "english": "cigarette",
    "englishExample": "How expensive are the cigarettes?",
    "category": "everyday",
    "article": "die"
  },
  {
    "id": "card-950",
    "index": 950,
    "german": "das Zimmer, –",
    "germanExample": "Das Zimmer ist groß.",
    "english": "room",
    "englishExample": "The room is large.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-951",
    "index": 951,
    "german": "das Zimmer, –",
    "germanExample": "Öffne im Schlafzimmer das Fenster, bitte!",
    "english": "room",
    "englishExample": "Open the window in the bedroom, please!",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-952",
    "index": 952,
    "german": "das Zimmer, –",
    "germanExample": "Die Wohnung hat drei Zimmer.",
    "english": "room",
    "englishExample": "The flat has three rooms.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-953",
    "index": 953,
    "german": "das Zimmer, –",
    "germanExample": "Ich habe ein Zimmer gebucht.",
    "english": "room",
    "englishExample": "I have booked a room.",
    "category": "everyday",
    "article": "das"
  },
  {
    "id": "card-954",
    "index": 954,
    "german": "der Zoll",
    "germanExample": "Wir müssen noch durch den Zoll.",
    "english": "customs",
    "englishExample": "We still need to go through customs.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-955",
    "index": 955,
    "german": "zu",
    "germanExample": "Der Bus fährt zum Bahnhof.",
    "english": "to",
    "englishExample": "The bus goes to the station.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-956",
    "index": 956,
    "german": "zu",
    "germanExample": "Ich gehe zu Fuß.",
    "english": "by",
    "englishExample": "I will go by foot.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-957",
    "index": 957,
    "german": "zu",
    "germanExample": "Ich bin zu Hause.",
    "english": "at",
    "englishExample": "I am at home.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-958",
    "index": 958,
    "german": "zufrieden",
    "germanExample": "Ich bin mit der Wohnung zufrieden.",
    "english": "happy",
    "englishExample": "I am happy with the flat.",
    "category": "everyday",
    "article": null
  },
  {
    "id": "card-959",
    "index": 959,
    "german": "der Zug, -ü, e",
    "germanExample": "Ich fahre gern mit dem Zug.",
    "english": "train",
    "englishExample": "I like to travel by train.",
    "category": "outside",
    "article": "der"
  },
  {
    "id": "card-960",
    "index": 960,
    "german": "zurück",
    "germanExample": "Einmal Frankfurt und zurück.",
    "english": "return",
    "englishExample": "A return to Frankfurt.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-961",
    "index": 961,
    "german": "zurück",
    "germanExample": "Wann kommst du zurück?",
    "english": "back",
    "englishExample": "When are you coming back?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-962",
    "index": 962,
    "german": "zusammen",
    "germanExample": "Sollen wir zusammen essen gehen?",
    "english": "together",
    "englishExample": "Should we go out to eat together?",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-963",
    "index": 963,
    "german": "zusammen",
    "germanExample": "Das macht zusammen 2 Euro 80.",
    "english": "together",
    "englishExample": "Together that comes to 2 euros 80.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-964",
    "index": 964,
    "german": "zwischen",
    "germanExample": "Heidelberg liegt zwischen Frankfurt und Stuttgart.",
    "english": "between",
    "englishExample": "Heidelberg is located between Frankfurt and Stuttgart.",
    "category": "adverb",
    "article": null
  },
  {
    "id": "card-965",
    "index": 965,
    "german": "zwischen",
    "germanExample": "Zwischen 8 und 10 Uhr bin ich zu Hause.",
    "english": "between",
    "englishExample": "I’m at home between 8 and 10 o’clock.",
    "category": "adverb",
    "article": null
  }
];
