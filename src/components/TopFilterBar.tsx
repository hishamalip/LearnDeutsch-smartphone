import React from 'react';
import {
  CategoryFilter,
  MasteryFilter,
  CATEGORIES,
} from '../data/flashcardsData';
import { CheckCircle2, ChevronDown, Filter } from 'lucide-react';

interface TopFilterBarProps {
  categoryFilter: CategoryFilter;
  setCategoryFilter: (cat: CategoryFilter) => void;
  masteryFilter: MasteryFilter;
  setMasteryFilter: (m: MasteryFilter) => void;
  masteredCount: number;
  totalCards: number;
  filteredCount: number;
  unmasteredCount: number;
  isDark: boolean;
}

export const TopFilterBar: React.FC<TopFilterBarProps> = ({
  categoryFilter,
  setCategoryFilter,
  masteryFilter,
  setMasteryFilter,
  masteredCount,
  totalCards,
  filteredCount,
  unmasteredCount,
  isDark,
}) => {
  return (
    <div
      className={`px-3 py-2 border-b shrink-0 select-none transition-colors ${
        isDark
          ? 'bg-black border-zinc-800'
          : 'bg-[#f4f8fd] border-sky-100'
      }`}
    >
      <div className="grid grid-cols-2 gap-2">
        {/* Filter 1: Mastery Filter Dropdown */}
        <div>
          <label
            className={`block text-[11px] font-medium mb-1 flex items-center gap-1 ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-slate-400" />
            <span>Mastery</span>
          </label>
          <div className="relative">
            <select
              value={masteryFilter}
              onChange={(e) => setMasteryFilter(e.target.value as MasteryFilter)}
              className={`w-full h-9 pl-3 pr-7 text-xs font-medium rounded-xl border appearance-none truncate transition-colors cursor-pointer focus:outline-none ${
                isDark
                  ? 'bg-black hover:bg-zinc-950 text-zinc-200 border-zinc-800 focus:border-zinc-700'
                  : 'bg-white hover:bg-sky-50/50 text-slate-800 border-sky-200/80 focus:border-sky-300'
              }`}
            >
              <option value="all">All ({totalCards})</option>
              <option value="mastered">Mastered ({masteredCount})</option>
              <option value="unmastered">Unmastered ({unmasteredCount})</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Filter 2: Category Filter Dropdown */}
        <div>
          <label
            className={`block text-[11px] font-medium mb-1 flex items-center gap-1 ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}
          >
            <Filter className="w-3 h-3 text-slate-400" />
            <span>Category</span>
          </label>
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
              className={`w-full h-9 pl-3 pr-7 text-xs font-medium rounded-xl border appearance-none truncate transition-colors cursor-pointer focus:outline-none ${
                isDark
                  ? 'bg-black hover:bg-zinc-950 text-zinc-200 border-zinc-800 focus:border-zinc-700'
                  : 'bg-white hover:bg-sky-50/50 text-slate-800 border-sky-200/80 focus:border-sky-300'
              }`}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({cat.count})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Clean text metadata */}
      <div
        className={`mt-2 flex items-center justify-between text-[11px] px-0.5 ${
          isDark ? 'text-zinc-500' : 'text-slate-500'
        }`}
      >
        <span>
          Showing <strong className={isDark ? 'text-zinc-300' : 'text-slate-800'}>{filteredCount}</strong> of {totalCards} cards
        </span>
        <span className={`tabular-nums ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
          {Math.round((masteredCount / (totalCards || 1)) * 100)}% mastered
        </span>
      </div>
    </div>
  );
};
