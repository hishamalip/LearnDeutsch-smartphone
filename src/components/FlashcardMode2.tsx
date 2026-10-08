import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Volume2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Flashcard } from '../data/flashcardsData';
import {
  speakGerman,
  playSwipeSound,
  playSuccessSound,
} from '../utils/audioFeedback';

interface FlashcardMode2Props {
  cards: Flashcard[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  isMastered: (cardId: string) => boolean;
  onToggleMastered: (cardId: string) => void;
  isDark: boolean;
}

export const FlashcardMode2: React.FC<FlashcardMode2Props> = ({
  cards,
  currentIndex,
  onNext,
  onPrev,
  isMastered,
  onToggleMastered,
  isDark,
}) => {
  const currentCard = cards[currentIndex] || null;
  const isCurrentMastered = currentCard ? isMastered(currentCard.id) : false;

  const handleNext = useCallback(() => {
    if (cards.length <= 1) return;
    onNext();
  }, [cards.length, onNext]);

  const handlePrev = useCallback(() => {
    if (cards.length <= 1) return;
    onPrev();
  }, [cards.length, onPrev]);

  const handleToggleCurrentMastered = useCallback(() => {
    if (!currentCard) return;
    playSuccessSound();
    onToggleMastered(currentCard.id);
  }, [currentCard, onToggleMastered]);

  const handleSpeak = useCallback(() => {
    if (!currentCard) return;
    speakGerman(currentCard.german);
  }, [currentCard]);

  // Touch and pointer swipe handlers
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    pointerStartRef.current = null;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX > absY && absX > 30) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleToggleCurrentMastered();
      } else if (e.key === 'p' || e.key === 'P' || e.key === ' ') {
        e.preventDefault();
        handleSpeak();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleCurrentMastered, handleSpeak]);

  if (!currentCard || cards.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none">
        <Sparkles className={`w-8 h-8 mb-2 ${isDark ? 'text-zinc-700' : 'text-sky-300'}`} />
        <h3 className={`text-sm font-semibold mb-1 ${isDark ? 'text-zinc-300' : 'text-slate-800'}`}>
          No Flashcards Found
        </h3>
        <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
          Try adjusting your Mastery or Category filters above.
        </p>
      </div>
    );
  }

  // Dark blue (der), dark red (die), dark green (das) badges
  const getArticleBadge = (article: 'der' | 'die' | 'das' | null) => {
    if (!article) return null;
    const styles = isDark
      ? {
          der: 'text-blue-400 bg-blue-950/90 border-blue-700/80',
          die: 'text-red-400 bg-red-950/90 border-red-700/80',
          das: 'text-emerald-400 bg-emerald-950/90 border-emerald-700/80',
        }[article]
      : {
          der: 'text-blue-950 bg-blue-100 border-blue-300',
          die: 'text-red-950 bg-red-100 border-red-300',
          das: 'text-emerald-950 bg-emerald-100 border-emerald-300',
        }[article];

    return (
      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${styles}`}>
        {article}
      </span>
    );
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col justify-between p-2.5 sm:p-3.5 select-none overflow-hidden">
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between text-xs px-1 mb-1 shrink-0">
        <span className={`capitalize ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
          {currentCard.category}
        </span>
        <span className={`tabular-nums ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
          <strong className={isDark ? 'text-zinc-300' : 'text-slate-800'}>{currentIndex + 1}</strong> / {cards.length}
        </span>
      </div>

      {/* Dual Language Card Area (German on Top, English on Bottom) with Steady Slots */}
      <div
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="flex-1 min-h-0 my-1 sm:my-2 touch-none flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <div
          className={`w-full h-full max-h-[390px] sm:max-h-[450px] rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-colors overflow-hidden relative ${
            isDark
              ? 'bg-black border-zinc-800 shadow-none'
              : 'bg-white border-sky-100 shadow-xs'
          }`}
        >
          {/* SECTION 1: TOP SECTION -> GERMAN (Fixed Heights for steady layout) */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Top row with article or mastered badge (Fixed height: h-6) */}
            <div className="h-6 flex items-center justify-between shrink-0">
              <div>{getArticleBadge(currentCard.article)}</div>
              {isCurrentMastered && (
                <span
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                    isDark
                      ? 'text-emerald-400 bg-zinc-900 border-zinc-800'
                      : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Mastered
                </span>
              )}
            </div>

            {/* German Word (Fixed height: h-16 -> Steady Position) */}
            <div className="h-16 flex items-center justify-center text-center px-2 shrink-0">
              <h2
                className={`text-2xl font-bold tracking-tight leading-snug line-clamp-2 break-words [overflow-wrap:anywhere] hyphens-auto ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {currentCard.german}
              </h2>
            </div>

            {/* German Sentence (Fixed height: h-14 -> Steady Position) */}
            <div className="h-14 flex items-center justify-center text-center px-2 shrink-0">
              {currentCard.germanExample ? (
                <div
                  className={`w-full max-h-13 p-1.5 rounded-lg border overflow-y-auto ${
                    isDark
                      ? 'bg-[#141414] border-zinc-800'
                      : 'bg-[#f0f6fc] border-sky-200/70'
                  }`}
                >
                  <p className={`text-xs sm:text-[13px] leading-snug font-medium break-words [overflow-wrap:anywhere] ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>
                    {currentCard.germanExample}
                  </p>
                </div>
              ) : (
                <div className="w-full h-full invisible" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* CLEAN CENTER DIVIDER (Fixed height: h-4) */}
          <div className="h-4 flex items-center justify-center shrink-0">
            <div className={`w-full border-t ${isDark ? 'border-zinc-800' : 'border-sky-100'}`} />
          </div>

          {/* SECTION 2: BOTTOM SECTION -> ENGLISH (Fixed Heights for steady layout) */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Blank top spacer (Fixed height: h-6) */}
            <div className="h-6 shrink-0" />

            {/* English Definition (Exact same font & size as German, violet/indigo) */}
            <div className="h-16 flex items-center justify-center text-center px-2 shrink-0">
              <h2
                className={`text-2xl font-bold tracking-tight leading-snug line-clamp-2 break-words [overflow-wrap:anywhere] hyphens-auto ${
                  isDark ? 'text-violet-400' : 'text-indigo-600'
                }`}
              >
                {currentCard.english}
              </h2>
            </div>

            {/* English Sentence (Fixed height: h-14 -> Steady Position) */}
            <div className="h-14 flex items-center justify-center text-center px-2 shrink-0">
              {currentCard.englishExample ? (
                <div
                  className={`w-full max-h-13 p-1.5 rounded-lg border overflow-y-auto ${
                    isDark
                      ? 'bg-[#161224] border-violet-900/60'
                      : 'bg-[#f8f6ff] border-violet-200/70'
                  }`}
                >
                  <p className={`text-xs sm:text-[13px] leading-snug font-medium break-words [overflow-wrap:anywhere] ${isDark ? 'text-violet-200' : 'text-indigo-950'}`}>
                    {currentCard.englishExample}
                  </p>
                </div>
              ) : (
                <div className="w-full h-full invisible" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Button Row: Exactly [prev], [audio], [master], [next] */}
      <div className="shrink-0 pt-1 pb-5 sm:pb-6 z-20">
        <div className="grid grid-cols-4 gap-2 items-center">
          {/* 1. Previous Button */}
          <button
            type="button"
            onFocus={(e) => e.currentTarget.blur()}
            onPointerDown={(e) => e.currentTarget.blur()}
            onClick={(e) => {
              e.currentTarget.blur();
              handlePrev();
            }}
            disabled={cards.length <= 1}
            className={`h-11 rounded-xl disabled:opacity-30 flex items-center justify-center transition-colors active:scale-98 border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
              isDark
                ? 'bg-[#141414] hover:bg-[#202020] text-zinc-300 border-zinc-800'
                : 'bg-white hover:bg-sky-50 text-slate-700 border-sky-200 shadow-xs'
            }`}
            title="Previous word"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 2. Audio Button */}
          <button
            type="button"
            onFocus={(e) => e.currentTarget.blur()}
            onPointerDown={(e) => e.currentTarget.blur()}
            onClick={(e) => {
              e.currentTarget.blur();
              handleSpeak();
            }}
            className={`h-11 rounded-xl flex items-center justify-center transition-colors active:scale-98 border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
              isDark
                ? 'bg-[#141414] hover:bg-[#202020] text-zinc-300 hover:text-white border-zinc-800'
                : 'bg-white hover:bg-sky-50 text-slate-700 hover:text-slate-900 border-sky-200 shadow-xs'
            }`}
            title="Listen to German pronunciation"
            aria-label="Pronounce German"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* 3. Master Toggle Button (Click again to unmaster) */}
          <button
            type="button"
            onFocus={(e) => e.currentTarget.blur()}
            onPointerDown={(e) => e.currentTarget.blur()}
            onClick={(e) => {
              e.currentTarget.blur();
              handleToggleCurrentMastered();
            }}
            className={`h-11 rounded-xl flex items-center justify-center transition-colors active:scale-98 border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
              isCurrentMastered
                ? isDark
                  ? 'bg-zinc-800 text-emerald-400 border-zinc-700'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : isDark
                ? 'bg-[#141414] hover:bg-[#202020] text-zinc-500 border-zinc-800'
                : 'bg-white hover:bg-sky-50 text-slate-400 border-sky-200 shadow-xs'
            }`}
            title={isCurrentMastered ? 'Mastered (click to unmaster)' : 'Mark as Mastered'}
            aria-label="Toggle mastered"
          >
            <CheckCircle2
              className={`w-4 h-4 ${isCurrentMastered ? 'fill-emerald-500 text-white' : ''}`}
            />
          </button>

          {/* 4. Next Button */}
          <button
            type="button"
            onFocus={(e) => e.currentTarget.blur()}
            onPointerDown={(e) => e.currentTarget.blur()}
            onClick={(e) => {
              e.currentTarget.blur();
              handleNext();
            }}
            disabled={cards.length <= 1}
            className={`h-11 rounded-xl disabled:opacity-30 flex items-center justify-center transition-colors active:scale-98 border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
              isDark
                ? 'bg-[#141414] hover:bg-[#202020] text-zinc-300 border-zinc-800'
                : 'bg-white hover:bg-sky-50 text-slate-700 border-sky-200 shadow-xs'
            }`}
            title="Next word"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
