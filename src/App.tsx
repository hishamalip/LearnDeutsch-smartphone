import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import {
  FLASHCARDS,
  CategoryFilter,
  MasteryFilter,
  Flashcard,
} from './data/flashcardsData';
import { AppLayout } from './components/AppLayout';
import { TopFilterBar } from './components/TopFilterBar';
import { HomeScreen } from './components/HomeScreen';
import { FlashcardMode1 } from './components/FlashcardMode1';
import { FlashcardMode2 } from './components/FlashcardMode2';

type AppView = 'home' | 'mode1' | 'mode2';

function shuffleCards(array: Flashcard[]): Flashcard[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [masteryFilter, setMasteryFilter] = useState<MasteryFilter>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Theme State: 'light' (Very light blue default) | 'dark' (AMOLED pure black)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('german_a1_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('german_a1_theme', next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const isDark = theme === 'dark';

  // Synchronize Android/mobile status bar theme-color & document color scheme
  useEffect(() => {
    // 1. Update meta theme-color for Android Chrome, Samsung Internet & PWAs
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', isDark ? '#000000' : '#f0f6fc');

    // 2. Update html/body class and colorScheme for system status bars
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      document.documentElement.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.style.backgroundColor = '#f0f6fc';
      document.body.style.backgroundColor = '#f0f6fc';
    }
  }, [isDark]);

  // Persistent Mastery State
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('german_a1_mastered_ids');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  const toggleMastered = useCallback((id: string) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('german_a1_mastered_ids', JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const isMastered = useCallback(
    (id: string) => masteredIds.has(id),
    [masteredIds]
  );

  // Always shuffled cards based on filters
  const filteredCards = useMemo(() => {
    let result = FLASHCARDS;

    // Filter by Category
    if (categoryFilter !== 'all') {
      result = result.filter((card) => card.category === categoryFilter);
    }

    // Filter by Mastery
    if (masteryFilter === 'mastered') {
      result = result.filter((card) => masteredIds.has(card.id));
    } else if (masteryFilter === 'unmastered') {
      result = result.filter((card) => !masteredIds.has(card.id));
    }

    return shuffleCards(result);
  }, [categoryFilter, masteryFilter, masteredIds]);

  // Reset index whenever category or mastery filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [categoryFilter, masteryFilter]);

  const handleNextCard = useCallback(() => {
    if (filteredCards.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  }, [filteredCards.length]);

  const handlePrevCard = useCallback(() => {
    if (filteredCards.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  }, [filteredCards.length]);

  // Active Category statistics
  const activeCategoryCards = useMemo(() => {
    if (categoryFilter === 'all') return FLASHCARDS;
    return FLASHCARDS.filter((c) => c.category === categoryFilter);
  }, [categoryFilter]);

  const activeMasteredCount = useMemo(() => {
    return activeCategoryCards.filter((c) => masteredIds.has(c.id)).length;
  }, [activeCategoryCards, masteredIds]);

  const activeUnmasteredCount = activeCategoryCards.length - activeMasteredCount;

  return (
    <AppLayout isDark={isDark}>
      {/* View: Home Screen with Level Selector and Options */}
      {currentView === 'home' && (
        <HomeScreen
          onSelectMode={(mode) => {
            setCurrentView(mode);
            setCurrentIndex(0);
          }}
          masteredCount={masteredIds.size}
          totalCards={FLASHCARDS.length}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      )}

      {/* View: Flashcard 1 or Flashcard v2 */}
      {currentView !== 'home' && (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Top Clean App Bar */}
          <header
            className={`h-12 px-3 border-b flex items-center justify-between shrink-0 z-30 select-none transition-colors ${
              isDark
                ? 'bg-black border-zinc-800'
                : 'bg-[#f0f6fc] border-sky-200/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  setCurrentView('home');
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors active:scale-95 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
                  isDark
                    ? 'hover:bg-zinc-900 text-zinc-300'
                    : 'hover:bg-sky-100/70 text-slate-700'
                }`}
                title="Back to home"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1
                className={`text-sm font-semibold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {currentView === 'mode1' ? 'Flashcard v1' : 'Flashcard v2'}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  toggleTheme();
                }}
                className={`p-1.5 rounded-lg transition-colors border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
                  isDark
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800'
                    : 'bg-white hover:bg-sky-50 text-slate-700 border-sky-200'
                }`}
                title={isDark ? 'Switch to Light mode' : 'Switch to AMOLED Dark mode'}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                  isDark
                    ? 'text-zinc-400 bg-zinc-900 border-zinc-800'
                    : 'text-sky-700 bg-white border-sky-200'
                }`}
              >
                A1
              </span>
            </div>
          </header>

          {/* Top Filters Bar (Mastery & Category) */}
          <TopFilterBar
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            masteryFilter={masteryFilter}
            setMasteryFilter={setMasteryFilter}
            masteredCount={activeMasteredCount}
            totalCards={activeCategoryCards.length}
            filteredCount={filteredCards.length}
            unmasteredCount={activeUnmasteredCount}
            isDark={isDark}
          />

          {/* Flashcard Mode 1 */}
          {currentView === 'mode1' && (
            <FlashcardMode1
              cards={filteredCards}
              currentIndex={currentIndex}
              onNext={handleNextCard}
              onPrev={handlePrevCard}
              isMastered={isMastered}
              onToggleMastered={toggleMastered}
              isDark={isDark}
            />
          )}

          {/* Flashcard Mode 2 */}
          {currentView === 'mode2' && (
            <FlashcardMode2
              cards={filteredCards}
              currentIndex={currentIndex}
              onNext={handleNextCard}
              onPrev={handlePrevCard}
              isMastered={isMastered}
              onToggleMastered={toggleMastered}
              isDark={isDark}
            />
          )}
        </div>
      )}
    </AppLayout>
  );
}
