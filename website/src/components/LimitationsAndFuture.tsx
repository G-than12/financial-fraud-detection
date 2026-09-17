import React from 'react';
import { Compass, ShieldAlert } from 'lucide-react';
import { LIMITATIONS_DATA, FUTURE_WORK_ROADMAP } from '../data/projectData';

export const LimitationsAndFuture: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-[#fafaf9] dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 10</span>
            <span>·</span>
            <span>SCOPING & ROADMAP</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Project Limitations & Future Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Transparansi batasan ruang lingkup pemodelan saat ini dan rencana pengembangan teknis berikutnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Limitations Card */}
          <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-subtle space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <span className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                  Technical Constraint
                </span>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white font-sans">
                  {LIMITATIONS_DATA.title}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 font-mono text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
              "{LIMITATIONS_DATA.statement}"
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {LIMITATIONS_DATA.explanation}
            </p>
          </div>

          {/* Future Roadmap Card */}
          <div className="lg:col-span-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-subtle space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                  Future Roadmap
                </span>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white font-sans">
                  Planned Future Improvements
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {FUTURE_WORK_ROADMAP.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1 hover:bg-zinc-100/70 dark:hover:bg-zinc-850 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
