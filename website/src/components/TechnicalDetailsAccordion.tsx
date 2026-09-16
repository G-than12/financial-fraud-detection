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
    <section className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-600 mb-3">
            <span>SECTION 09</span>
            <span>·</span>
            <span>MATHEMATICAL & TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Deep Technical Architecture Details
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
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
                className="rounded-2xl border border-zinc-200 bg-[#fafaf9] overflow-hidden transition-all shadow-subtle"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-100/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-white border border-zinc-200 text-zinc-600">
                      <Code2 className="w-4 h-4 text-emerald-600" />
                    </span>
                    <span className="font-sans text-sm sm:text-base font-semibold text-zinc-950">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-zinc-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 bg-white">
                    <p className="pt-2 font-mono text-zinc-700">{item.content}</p>
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
