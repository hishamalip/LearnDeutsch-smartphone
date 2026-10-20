import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ArrowLeft, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
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

type AppView = 'home' | 'mode1' | 'mode2' | 'daily';

function getViewFromHash(): AppView {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.toLowerCase();
  if (hash === '#daily' || hash === '#learn20') return 'daily';
  if (hash === '#v1' || hash === '#mode1') return 'mode1';
  if (hash === '#v2' || hash === '#mode2') return 'mode2';
  return 'home';
}

function shuffleCards(array: Flashcard[]): Flashcard[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => getViewFromHash());
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [masteryFilter, setMasteryFilter] = useState<MasteryFilter>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync with browser history (hardware/browser back button)
  useEffect(() => {
    const handlePopState = () => {
      const targetView = getViewFromHash();
      setCurrentView(targetView);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Ensure initial hash direct-load has a 'home' state behind it so device back returns to home
  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#v1' || hash === '#mode1' || hash === '#v2' || hash === '#mode2' || hash === '#daily' || hash === '#learn20') {
      window.history.replaceState({ view: 'home' }, '', window.location.pathname + window.location.search);
      const targetView = hash.includes('daily') || hash.includes('learn20') ? 'daily' : hash.startsWith('#v2') ? 'mode2' : 'mode1';
      window.history.pushState({ view: targetView }, '', hash);
    }
  }, []);

  const handleSelectMode = useCallback((mode: AppView) => {
    let hash = '#v1';
    if (mode === 'mode2') hash = '#v2';
    if (mode === 'daily') hash = '#learn20';
    window.history.pushState({ view: mode }, '', hash);
    setCurrentView(mode);
    setCurrentIndex(0);
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentView('home');
    if (window.location.hash || (window.history.state && window.history.state.view)) {
      window.history.back();
    } else {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Escape key returns to Home screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentView !== 'home') {
        e.preventDefault();
        handleBackToHome();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, handleBackToHome]);

  // Theme State: 'light' | 'dark'
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

  // Synchronize status bar theme-color
  useEffect(() => {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', isDark ? '#000000' : '#f0f6fc');

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

  // Persistent Mastery State (keyed to new Goethe A1 wordlist)
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('goethe_a1_mastered_ids_v2');
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
        localStorage.setItem('goethe_a1_mastered_ids_v2', JSON.stringify(Array.from(next)));
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

  // Daily 20 Selection: 20 unmastered words pinned for today
  const [dailyCards, setDailyCards] = useState<Flashcard[]>(() => {
    const todayKey = `goethe_a1_daily_20_${getTodayDateString()}`;
    try {
      const cached = localStorage.getItem(todayKey);
      if (cached) {
        const ids: string[] = JSON.parse(cached);
        const cardsMap = new Map(FLASHCARDS.map((c) => [c.id, c]));
        const resolved = ids.map((id) => cardsMap.get(id)).filter((c): c is Flashcard => Boolean(c));
        if (resolved.length === 20) {
          return resolved;
        }
      }
    } catch {
      // ignore
    }

    // Pick 20 unmastered words randomly
    const unmastered = FLASHCARDS.filter((c) => !masteredIds.has(c.id));
    const pool = unmastered.length >= 20 ? unmastered : FLASHCARDS;
    const shuffledPool = shuffleCards(pool);
    const selected = shuffledPool.slice(0, Math.min(20, shuffledPool.length));

    try {
      localStorage.setItem(todayKey, JSON.stringify(selected.map((c) => c.id)));
    } catch {
      // ignore
    }
    return selected;
  });

  // Verify daily words on date change
  useEffect(() => {
    const todayKey = `goethe_a1_daily_20_${getTodayDateString()}`;
    try {
      const cached = localStorage.getItem(todayKey);
      if (!cached) {
        const unmastered = FLASHCARDS.filter((c) => !masteredIds.has(c.id));
        const pool = unmastered.length >= 20 ? unmastered : FLASHCARDS;
        const shuffledPool = shuffleCards(pool);
        const selected = shuffledPool.slice(0, Math.min(20, shuffledPool.length));
        localStorage.setItem(todayKey, JSON.stringify(selected.map((c) => c.id)));
        setDailyCards(selected);
      }
    } catch {
      // ignore
    }
  }, [masteredIds]);

  const dailyMasteredCount = useMemo(() => {
    return dailyCards.filter((c) => masteredIds.has(c.id)).length;
  }, [dailyCards, masteredIds]);

  // Main study deck: shuffled on filter/session change, never scrambled on mastery toggle
  const [deckCards, setDeckCards] = useState<Flashcard[]>(() => {
    let result = FLASHCARDS;
    if (categoryFilter !== 'all') {
      result = result.filter((card) => card.category === categoryFilter);
    }
    if (masteryFilter === 'mastered') {
      result = result.filter((card) => masteredIds.has(card.id));
    } else if (masteryFilter === 'unmastered') {
      result = result.filter((card) => !masteredIds.has(card.id));
    }
    return shuffleCards(result);
  });

  // Re-generate and shuffle deck ONLY when the user changes category or mastery filter
  useEffect(() => {
    let result = FLASHCARDS;
    if (categoryFilter !== 'all') {
      result = result.filter((card) => card.category === categoryFilter);
    }
    if (masteryFilter === 'mastered') {
      result = result.filter((card) => masteredIds.has(card.id));
    } else if (masteryFilter === 'unmastered') {
      result = result.filter((card) => !masteredIds.has(card.id));
    }

    setDeckCards(shuffleCards(result));
    setCurrentIndex(0);
  }, [categoryFilter, masteryFilter]);

  const activeCards = currentView === 'daily' ? dailyCards : deckCards;

  const handleNextCard = useCallback(() => {
    if (activeCards.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % activeCards.length);
  }, [activeCards.length]);

  const handlePrevCard = useCallback(() => {
    if (activeCards.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + activeCards.length) % activeCards.length);
  }, [activeCards.length]);

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
          onSelectMode={handleSelectMode}
          masteredCount={masteredIds.size}
          totalCards={FLASHCARDS.length}
          dailyMasteredCount={dailyMasteredCount}
          dailyTotal={dailyCards.length}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      )}

      {/* View: Flashcard 1, Flashcard v2, or Learn 20 */}
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
                  handleBackToHome();
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
              <div className="flex items-center gap-2">
                <h1
                  className={`text-sm font-semibold tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {currentView === 'daily'
                    ? 'Learn 20 (Daily)'
                    : currentView === 'mode1'
                    ? 'Flashcard v1'
                    : 'Flashcard v2'}
                </h1>
                {currentView === 'daily' && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isDark
                        ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {dailyMasteredCount}/{dailyCards.length} Mastered
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle Button - Exactly same 36x36 size */}
              <button
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  toggleTheme();
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
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

              {/* A1 Level Badge - Exactly same 36x36 size */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs border ${
                  isDark
                    ? 'text-zinc-300 bg-zinc-900 border-zinc-800'
                    : 'text-sky-800 bg-white border-sky-200'
                }`}
                title="Goethe A1 Level"
              >
                A1
              </div>
            </div>
          </header>

          {/* Daily Mode Banner (if Learn 20 mode) */}
          {currentView === 'daily' ? (
            <div
              className={`px-4 py-2 border-b flex items-center justify-between text-xs select-none ${
                isDark
                  ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
                  : 'bg-amber-50/70 border-amber-200/60 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-medium">Today's 20 Challenge Words</span>
              </div>
              {dailyMasteredCount === dailyCards.length && (
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All Mastered!
                </span>
              )}
            </div>
          ) : (
            /* Top Filters Bar (Mastery & Category) for v1 and v2 */
            <TopFilterBar
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              masteryFilter={masteryFilter}
              setMasteryFilter={setMasteryFilter}
              masteredCount={activeMasteredCount}
              totalCards={activeCategoryCards.length}
              filteredCount={deckCards.length}
              unmasteredCount={activeUnmasteredCount}
              isDark={isDark}
            />
          )}

          {/* Flashcard Mode 1 or Learn 20 (both use tap-to-flip) */}
          {(currentView === 'mode1' || currentView === 'daily') && (
            <FlashcardMode1
              cards={activeCards}
              currentIndex={currentIndex}
              onNext={handleNextCard}
              onPrev={handlePrevCard}
              isMastered={isMastered}
              onToggleMastered={toggleMastered}
              isDark={isDark}
            />
          )}

          {/* Flashcard Mode 2 (Dual Stack) */}
          {currentView === 'mode2' && (
            <FlashcardMode2
              cards={activeCards}
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
