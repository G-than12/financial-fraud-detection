import React, { useState } from 'react';
import { ChevronDown, Code2 } from 'lucide-react';
import { TECHNICAL_ACCORDIONS } from '../data/projectData';

export const TechnicalDetailsAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['tech-1']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 09</span>
            <span>·</span>
            <span>MATHEMATICAL & TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Deep Technical Architecture Details
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Spesifikasi matematis, formulasi normalisasi, parameter pemisahan data, dan justifikasi algoritma.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-4xl">
          {TECHNICAL_ACCORDIONS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-900 overflow-hidden transition-all shadow-subtle"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-100/60 dark:hover:bg-zinc-850 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                      <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </span>
                    <span className="font-sans text-sm sm:text-base font-semibold text-zinc-950 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-zinc-900 dark:text-zinc-200' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950/60">
                    <p className="pt-2 font-mono text-zinc-700 dark:text-zinc-300">{item.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
