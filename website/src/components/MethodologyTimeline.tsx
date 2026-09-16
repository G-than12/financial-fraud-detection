import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/projectData';

export const MethodologyTimeline: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200/80 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-600 mb-3">
            <span>SECTION 08</span>
            <span>·</span>
            <span>ENGINEERING ROADMAP</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Methodology & Research Workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Kronologi 9 tahapan eksekusi teknis dari inisiasi data hingga serialisasi model produksi.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-subtle hover:shadow-elevated transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200">
                  STAGE {step.number}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="text-base font-bold text-zinc-950 font-sans">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
