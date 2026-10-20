# Goethe Institute A1 Vocabulary & 'Learn 20' Daily Study Plan

Completely replace the application vocabulary dataset with the uploaded Goethe Institute A1 wordlist CSV, eliminate German text displays when revealing English translations (both for headwords and example sentences), equalize the Night mode and A1 badge icon sizes, introduce the 'Learn 20' daily flashcard study mode, and restrict example sentences strictly to the primary example.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following design choices were confirmed during Phase 1:
> - **'Learn 20' Flashcard Mode**: Configured to use the **Flashcard v1** (tap-to-flip) mechanism, which lets the user test their recall of the 20 daily words and tap to reveal the English definition.
> - **Daily Selection Strategy**: A stable pseudo-random selection of **20 unmastered words** pinned for the entire calendar day (e.g., using date string hashing like `YYYY-MM-DD`). Once chosen for today, the 20 words remain constant all day so the user can study and master them.
> - **Mastery Progress**: Mastered IDs storage will reset cleanly with this new dataset version so you start your learning journey with fresh, 100% accurate statistics.
> - **CSV File Storage Location**: The uploaded CSV file is preserved in your workspace at `/public/assets/aistudio/Goethe_Institute__A1_Wordlist-excel_ready_81f9a907.csv`. The parsed TypeScript dataset will live at `/src/data/flashcardsData.ts` for instant zero-latency loading and offline PWA capability.

---

## 1. Overview & Core Concept

- **What It Does**: Upgrades the German Flashcard application into a comprehensive Goethe Institute A1 training tool. It provides authentic A1 vocabulary entries with single concise examples, articles, and English translations.
- **New 'Learn 20' Daily Challenge**: Features a dedicated daily goal section right on the home screen alongside Flashcard v1 and Flashcard v2. It presents 20 unmastered words fixed for that calendar day, tracking your daily mastery progress (e.g. `14 / 20 Mastered Today`) with a completion banner when all 20 are mastered.
- **Streamlined Translation View**: When a card flips to reveal English (or when viewing English definitions), only the clean English translation and the English sentence example appear. The German word and German sentence are hidden in this state.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Home Screen Navigation**:
   - Top Bar: The A1 level badge and Night/Theme toggle button are aligned with identical optical dimensions ($36 \times 36\text{px}$ container and $18\text{px}$ icon/font scale).
   - Mode Selection Cards:
     - **Learn 20 (Daily Goal)**: Featured card with a calendar/target icon, dynamic daily progress ring (`X / 20 mastered today`), and a direct CTA to start today's session.
     - **Flashcard v1**: Full deck exploration with tap-to-flip cards.
     - **Flashcard v2**: Full deck exploration with dual German & English simultaneous view.
2. **Flashcard v1 / Learn 20 Interaction**:
   - **Front (German)**: Displays German headword + 1st German example sentence only.
   - **Back (Flipped to English)**: Displays the English translation and 1st English example sentence only. No German text or German sentence cluttering the back.
   - **Master Action**: Marking mastered plays the success chime and advances to the next card. Unmarking mastered stays on the current card.
   - **Learn 20 Completion**: When all 20 words of the day are mastered, a celebratory daily completion banner appears.
3. **Category Reorganization**:
   - Meaningful categories parsed from CSV parts of speech and themes: Nouns (with proper `der/die/das`), Verbs, Adjectives & Adverbs, Essentials & Phrases, Numbers & Time, Travel & Direction.

---

## 3. Key Product Decisions & Trade-Offs

- **CSV Parsing into Static Code vs Runtime Fetch**:
  - *Chosen*: Parse the CSV into structured, typed data in `/src/data/flashcardsData.ts` and keep the raw CSV at `/public/assets/aistudio/Goethe_Institute__A1_Wordlist-excel_ready_81f9a907.csv`.
  - *Why*: Instant, zero-latency startup with no loading spinners, zero network failure risks, and full offline PWA functionality.
- **Daily 20 Word Stability**:
  - *Chosen*: Store the current day's 20 word IDs in `localStorage` under `goethe_a1_daily_20_<YYYY-MM-DD>`. If today's entry doesn't exist, randomly sample 20 unmastered words and save them.
  - *Why*: Guarantees the 20 words remain 100% constant throughout the day, even across app reloads, browser restarts, and device reboots.
- **First Example Sentence Only**:
  - *Chosen*: Extract only `Example1DE` and `Example1EN` from each CSV record, trimming any empty or multi-sentence overflow.
  - *Why*: Direct compliance with user requirement; avoids layout shifts and maximizes readability.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                      HomeScreen.tsx                         │
│  ┌───────────────────────────────┐ ┌──────────────────────┐ │
│  │ A1 Badge (36x36)              │ │ Theme Toggle (36x36) │ │
│  └───────────────────────────────┘ └──────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Learn 20 (Daily Goal: 20 fixed unmastered words)       │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────┐ ┌──────────────────────┐ │
│  │ Flashcard v1 (Flip view)      │ │ Flashcard v2 (Dual)  │ │
│  └───────────────────────────────┘ └──────────────────────┘ │
└──────────────────────────────┬──────────────────────────────┘
                               │ Hash Navigation (#v1, #v2, #daily)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   FlashcardMode1 / Daily                    │
│  - Front: German word + Example 1 DE only                   │
│  - Back: English word + Example 1 EN only (No German text)  │
│  - Mastered toggle with auto-advance on master              │
│  - Browser history back integration                         │
└─────────────────────────────────────────────────────────────┘
```

### Proposed Changes

1. **`/src/data/flashcardsData.ts`**:
   - Replace old word data with all parsed records from the uploaded Goethe Institute A1 CSV.
   - Clean headwords, standardize articles (`der`, `die`, `das`), format English meanings, and map `Example1DE` / `Example1EN`.
2. **`/src/components/HomeScreen.tsx`**:
   - Equalize sizing between the Night/Theme toggle and the A1 level selector badge.
   - Add the new **'Learn 20'** card with daily status and mastery indicator.
3. **`/src/components/FlashcardMode1.tsx` & `/src/components/FlashcardMode2.tsx`**:
   - Mode 1: When `isFlipped` is true, render strictly the English translation and English example. Completely remove the sub-label showing the German word and German example.
   - Restrict example rendering strictly to `Example 1`.
4. **`/src/App.tsx`**:
   - Add `daily` view state and hash route (`#daily` or `#learn20`).
   - Implement daily 20-word deterministic selection logic with `localStorage` persistence.
   - Pass daily cards deck and daily mastery count to the session.

---

## 5. Verification Plan

1. **Compilation & Linting**: Run `compile_applet` and `lint_applet` to verify zero TypeScript errors.
2. **Word Count & Dataset Audit**: Verify that all Goethe A1 words from the CSV are populated and categorized.
3. **English Switch Test**: Verify in Mode 1 that clicking a card reveals only English text without any German word or sentence.
4. **'Learn 20' Session Test**: Verify that entering 'Learn 20' loads exactly 20 unmastered words, stays constant on refresh, tracks mastery, and updates the daily progress counter.
5. **Icon Symmetry Check**: Inspect the top bar to verify that the A1 indicator and the Dark mode toggle have matching bounding dimensions and visual weight.
