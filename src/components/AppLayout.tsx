import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
  isDark: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, isDark }) => {
  return (
    <div
      className={`h-[100dvh] max-h-[100dvh] w-full flex justify-center overflow-hidden transition-colors duration-200 ${
        isDark
          ? 'bg-black text-neutral-100 selection:bg-zinc-800 selection:text-white'
          : 'bg-[#e8f2fc] text-slate-900 selection:bg-sky-200 selection:text-slate-900'
      }`}
    >
      <div
        className={`w-full max-w-md h-full flex flex-col relative overflow-hidden transition-colors duration-200 ${
          isDark
            ? 'bg-black shadow-2xl'
            : 'bg-[#f0f6fc] shadow-md border-x border-sky-200/50'
        }`}
      >
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
