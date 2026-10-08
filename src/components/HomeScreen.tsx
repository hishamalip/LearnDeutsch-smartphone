import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Sun,
  Moon,
} from 'lucide-react';

interface HomeScreenProps {
  onSelectMode: (mode: 'mode1' | 'mode2') => void;
  masteredCount: number;
  totalCards: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectMode,
  masteredCount,
  totalCards,
  isDark,
  onToggleTheme,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const masteryPercent = Math.round((masteredCount / (totalCards || 1)) * 100);

  const levels = [
    { id: 'A1' as const, name: 'A1', subtitle: '965 Words', active: true },
    { id: 'A2' as const, name: 'A2', subtitle: 'Soon', active: false },
    { id: 'B1' as const, name: 'B1', subtitle: 'Soon', active: false },
    { id: 'B2' as const, name: 'B2', subtitle: 'Soon', active: false },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col justify-between select-none">
      <div>
        {/* App Title Header with Theme Toggle */}
        <div className="pt-2 pb-5 flex items-start justify-between">
          <div>
            <span
              className={`text-xs font-medium block mb-1 ${
                isDark ? 'text-zinc-500' : 'text-sky-800/80'
              }`}
            >
              German Vocabulary
            </span>
            <h1
              className={`text-2xl font-bold tracking-tight mb-1.5 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              A1 Flashcards
            </h1>
            <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Practice essential German words with audio and dual modes.
            </p>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.blur();
              onToggleTheme();
            }}
            className={`p-2 rounded-xl transition-colors border outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
              isDark
                ? 'bg-[#141414] hover:bg-[#202020] text-zinc-300 border-zinc-800'
                : 'bg-white hover:bg-sky-50 text-slate-700 border-sky-200'
            }`}
            title={isDark ? 'Switch to Light mode' : 'Switch to AMOLED Dark mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Level Selector Tabs */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <label
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}
            >
              Language Level
            </label>
            <span className={`text-[11px] ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}>
              CEFR Framework
            </span>
          </div>

          <div
            className={`grid grid-cols-4 gap-1.5 p-1 rounded-xl border ${
              isDark
                ? 'bg-[#111111] border-zinc-800'
                : 'bg-[#e4eff9] border-sky-200/60'
            }`}
          >
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => {
                  if (lvl.active) setSelectedLevel(lvl.id);
                }}
                disabled={!lvl.active}
                className={`py-2 px-1 rounded-lg text-xs font-semibold transition-all flex flex-col items-center justify-center relative ${
                  selectedLevel === lvl.id
                    ? isDark
                      ? 'bg-[#222222] text-white shadow-xs'
                      : 'bg-white text-slate-900 shadow-xs border border-sky-200'
                    : lvl.active
                    ? isDark
                      ? 'text-zinc-400 hover:text-white hover:bg-[#1a1a1a]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    : isDark
                    ? 'text-zinc-600 opacity-40 cursor-not-allowed'
                    : 'text-slate-400 opacity-40 cursor-not-allowed'
                }`}
              >
                <span>{lvl.id}</span>
                {!lvl.active && (
                  <Lock className={`w-2.5 h-2.5 mt-0.5 ${isDark ? 'text-zinc-600' : 'text-slate-400'}`} />
                )}
              </button>
            ))}
          </div>

          {selectedLevel !== 'A1' && (
            <p className={`text-[11px] mt-2 text-center ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
              Level {selectedLevel} is coming soon. A1 is currently available.
            </p>
          )}
        </div>

        {/* Level A1 Mastery Progress */}
        {selectedLevel === 'A1' && (
          <div
            className={`border rounded-xl p-3.5 mb-5 ${
              isDark
                ? 'bg-black border-zinc-800'
                : 'bg-white border-sky-100'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span
                className={`font-medium flex items-center gap-1.5 ${
                  isDark ? 'text-zinc-300' : 'text-slate-700'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Mastered Words</span>
              </span>
              <span
                className={`font-semibold tabular-nums ${
                  isDark ? 'text-zinc-200' : 'text-slate-800'
                }`}
              >
                {masteredCount} / {totalCards} ({masteryPercent}%)
              </span>
            </div>
            <div
              className={`w-full h-1.5 rounded-full overflow-hidden ${
                isDark ? 'bg-zinc-900' : 'bg-sky-100'
              }`}
            >
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isDark ? 'bg-zinc-400' : 'bg-sky-600'
                }`}
                style={{ width: `${Math.max(masteryPercent, 1)}%` }}
              />
            </div>
          </div>
        )}

        {/* The Two Main Options */}
        <div className="space-y-3">
          <label
            className={`text-[11px] font-semibold uppercase tracking-wider px-0.5 block ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}
          >
            Flashcard Modes
          </label>

          {/* Option 1: Flashcard v1 */}
          <button
            type="button"
            onClick={() => onSelectMode('mode1')}
            className={`w-full text-left p-4 rounded-xl border transition-colors group cursor-pointer ${
              isDark
                ? 'bg-black hover:bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                : 'bg-white hover:bg-sky-50/50 border-sky-100 hover:border-sky-200'
            }`}
          >
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isDark ? 'bg-zinc-900 text-zinc-300 border border-zinc-800' : 'bg-sky-100 text-sky-800'
                  }`}
                >
                  1
                </div>
                <div>
                  <h2
                    className={`text-sm font-semibold transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-zinc-200'
                        : 'text-slate-900 group-hover:text-slate-800'
                    }`}
                  >
                    Flashcard v1
                  </h2>
                  <span className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                    Tap to reveal definition
                  </span>
                </div>
              </div>
              <ArrowRight
                className={`w-4 h-4 mt-1 transition-colors ${
                  isDark
                    ? 'text-zinc-500 group-hover:text-zinc-300'
                    : 'text-slate-400 group-hover:text-slate-700'
                }`}
              />
            </div>
            <p className={`text-xs leading-relaxed mt-2 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Tap anywhere on the card to reveal English translation. Swipe left/right or use navigation buttons.
            </p>
          </button>

          {/* Option 2: Flashcard v2 */}
          <button
            type="button"
            onClick={() => onSelectMode('mode2')}
            className={`w-full text-left p-4 rounded-xl border transition-colors group cursor-pointer ${
              isDark
                ? 'bg-black hover:bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                : 'bg-white hover:bg-sky-50/50 border-sky-100 hover:border-sky-200'
            }`}
          >
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isDark ? 'bg-zinc-900 text-zinc-300 border border-zinc-800' : 'bg-sky-100 text-sky-800'
                  }`}
                >
                  2
                </div>
                <div>
                  <h2
                    className={`text-sm font-semibold transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-zinc-200'
                        : 'text-slate-900 group-hover:text-slate-800'
                    }`}
                  >
                    Flashcard v2
                  </h2>
                  <span className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                    Dual view
                  </span>
                </div>
              </div>
              <ArrowRight
                className={`w-4 h-4 mt-1 transition-colors ${
                  isDark
                    ? 'text-zinc-500 group-hover:text-zinc-300'
                    : 'text-slate-400 group-hover:text-slate-700'
                }`}
              />
            </div>
            <p className={`text-xs leading-relaxed mt-2 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Shows both German and English simultaneously. Swipe left/right or use navigation buttons.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
