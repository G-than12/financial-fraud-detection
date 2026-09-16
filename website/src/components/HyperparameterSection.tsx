import React from 'react';
import { Sliders, CheckCircle2 } from 'lucide-react';
import { HYPERPARAMETER_DETAILS } from '../data/projectData';

export const HyperparameterSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200/80 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-600 mb-3">
            <span>SECTION 06</span>
            <span>·</span>
            <span>OPTIMIZATION & TUNING</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            GridSearchCV Hyperparameter Optimization
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Menemukan konfigurasi ensemble Random Forest paling optimal melalui pencarian grid mendalam dengan 5-fold stratified cross-validation.
          </p>
        </div>

        {/* Hyperparameter Grid & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Parameter Search Space Table */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div>
                <h3 className="text-lg font-bold text-zinc-950 font-sans">
                  Parameter Search Space Grid
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                  18 Kombinasi Parameter × 5 Folds = 90 Total Fits
                </span>
              </div>
              <span className="p-2 rounded-lg bg-zinc-100 text-zinc-700">
                <Sliders className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-zinc-900">n_estimators</span>
                  <span className="text-xs font-mono text-zinc-500">[50, 100, 200]</span>
                </div>
                <p className="text-xs text-zinc-600">
                  Jumlah pohon keputusan (decision trees) di dalam ensemble ensemble bagging.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-zinc-900">max_depth</span>
                  <span className="text-xs font-mono text-zinc-500">[None, 10, 20]</span>
                </div>
                <p className="text-xs text-zinc-600">
                  Kedalaman maksimum pohon untuk mengontrol kompleksitas dan mencegah overfitting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-zinc-900">min_samples_split</span>
                  <span className="text-xs font-mono text-zinc-500">[2, 5]</span>
                </div>
                <p className="text-xs text-zinc-600">
                  Batas minimum sampel yang dibutuhkan untuk memecah simpul internal pohon.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-100/70 text-xs font-mono text-zinc-600 flex items-center justify-between">
              <span>Scoring Metric: Accuracy</span>
              <span>CV Strategy: 5-Fold Stratified</span>
            </div>
          </div>

          {/* Right Column: Best Parameters Output */}
          <div className="lg:col-span-6 rounded-2xl bg-zinc-900 text-white p-6 sm:p-8 shadow-elevated flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div>
                  <div className="text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
                    Champion Configuration
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">
                    Optimal Hyperparameter Solution
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              {/* Parameter Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                <div className="p-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">n_estimators</span>
                  <div className="text-xl font-bold font-mono text-white">50</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">max_depth</span>
                  <div className="text-xl font-bold font-mono text-emerald-400">None</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/80 border border-zinc-700/80">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">min_samples_split</span>
                  <div className="text-xl font-bold font-mono text-white">2</div>
                </div>
              </div>

              {/* Accuracy Scores */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 font-mono text-xs">
                  <span className="text-zinc-400">5-Fold Cross-Validation Score:</span>
                  <span className="font-bold text-emerald-400">{(HYPERPARAMETER_DETAILS.bestCvScore * 100).toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 font-mono text-xs">
                  <span className="text-zinc-400">Independent Test Set Accuracy:</span>
                  <span className="font-bold text-emerald-400">{(HYPERPARAMETER_DETAILS.testAccuracy * 100).toFixed(2)}%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
              File model hasil tuning tersimpan sebagai: <span className="text-zinc-200">tuning_classification.h5 (936 KB)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
