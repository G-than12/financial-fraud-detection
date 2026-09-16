import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { Award } from 'lucide-react';
import { CLASSIFICATION_MODELS, CONFUSION_MATRICES } from '../data/projectData';

export const ClassificationSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'accuracy' | 'macroPrecision' | 'macroRecall' | 'macroF1'>('accuracy');
  const [activeModelForMatrix, setActiveModelForMatrix] = useState<'Decision Tree' | 'Random Forest' | 'Tuned Random Forest'>('Tuned Random Forest');

  const chartData = CLASSIFICATION_MODELS.map((m) => ({
    name: m.name.replace(' Classifier', ''),
    fullName: m.name,
    score: Number((m[selectedMetric] * 100).toFixed(2)),
    fileSize: m.fileSize,
  }));

  const metricLabels = {
    accuracy: 'Accuracy (%)',
    macroPrecision: 'Macro Precision (%)',
    macroRecall: 'Macro Recall (%)',
    macroF1: 'Macro F1-Score (%)',
  };

  const currentMatrix = CONFUSION_MATRICES[activeModelForMatrix];

  // Helper for heatmap cell background intensity
  const getHeatmapColor = (value: number) => {
    if (value === 0) return 'bg-zinc-100/60 text-zinc-400';
    if (value < 10) return 'bg-amber-100 text-amber-900 border border-amber-200';
    if (value < 110) return 'bg-emerald-100 text-emerald-900 font-bold';
    return 'bg-emerald-600 text-white font-bold shadow-sm';
  };

  return (
    <section id="classification" className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-600 mb-3">
            <span>SECTION 05</span>
            <span>·</span>
            <span>SUPERVISED AUTOMATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Supervised Classification & Benchmark Evaluation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Mempelajari dan memprediksi penugasan klaster secara otomatis (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100">Target: 0, 1, 2</code>) pada transaksi nasabah baru tanpa kalkulasi klaster ulang.
          </p>
        </div>

        {/* Supervised Workflow Steps */}
        <div className="mb-14 p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200/90 shadow-subtle">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 font-semibold">
            Supervised Pipeline Architecture
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
            {[
              { step: '01', title: 'Clustered Dataset', desc: '1.945 rows' },
              { step: '02', title: 'One-Hot Encoding', desc: '55 OHE features' },
              { step: '03', title: 'Stratified Split', desc: '80:20 (1556 : 389)' },
              { step: '04', title: 'Decision Tree', desc: 'Baseline CART' },
              { step: '05', title: 'Random Forest', desc: 'Ensemble Bagging' },
              { step: '06', title: 'GridSearchCV', desc: '5-Fold CV Champion' },
            ].map((s, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white border border-zinc-200 text-left space-y-1 shadow-subtle"
              >
                <span className="text-[10px] font-mono text-emerald-600 font-bold block">
                  STAGE {s.step}
                </span>
                <div className="text-xs font-bold text-zinc-900 line-clamp-1">{s.title}</div>
                <div className="text-[11px] text-zinc-500 font-mono">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Model Comparison Chart & Matrix Section */}
        <div id="results" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Interactive Comparison Bar Chart */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 bg-[#fafaf9] p-6 sm:p-8 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-zinc-200">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 font-sans">
                    Model Benchmark Comparison
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    Data Uji Independen (389 Sampel Test Set)
                  </span>
                </div>

                {/* Metric Selector Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 bg-zinc-200/60 p-1 rounded-lg">
                  {(['accuracy', 'macroPrecision', 'macroRecall', 'macroF1'] as const).map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md transition-all ${
                        selectedMetric === metric
                          ? 'bg-zinc-900 text-white shadow-subtle'
                          : 'text-zinc-700 hover:text-zinc-950'
                      }`}
                    >
                      {metric === 'accuracy' ? 'Accuracy' : metric.replace('macro', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart Container */}
              <div className="w-full h-72 sm:h-80 pt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: -10, bottom: 20 }}>
                    <XAxis
                      dataKey="name"
                      tick={{ fill: '#52525b', fontSize: 11, fontFamily: 'monospace' }}
                      axisLine={{ stroke: '#e4e4e7' }}
                      tickLine={{ stroke: '#e4e4e7' }}
                    />
                    <YAxis
                      domain={[90, 100]}
                      tick={{ fill: '#71717a', fontSize: 11, fontFamily: 'monospace' }}
                      axisLine={{ stroke: '#e4e4e7' }}
                      tickLine={{ stroke: '#e4e4e7' }}
                      unit="%"
                    />
                    <Tooltip
                      formatter={(val: number) => [`${val}%`, metricLabels[selectedMetric]]}
                      contentStyle={{
                        backgroundColor: '#18181b',
                        borderColor: '#27272a',
                        borderRadius: '0.5rem',
                        color: '#f4f4f5',
                        fontFamily: 'monospace',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                      {chartData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index === 2 ? '#059669' : index === 1 ? '#6366f1' : '#71717a'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Metric aktif: {metricLabels[selectedMetric]}</span>
              <span className="text-emerald-600 font-bold">Champion: Tuned Random Forest (98.97%)</span>
            </div>
          </div>

          {/* Right Column: Confusion Matrix Heatmap */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200 bg-[#fafaf9] p-6 sm:p-8 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-zinc-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-sans">
                    Confusion Matrix Heatmap
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">Actual vs Predicted</span>
                </div>

                {/* Model Selector Tabs */}
                <div className="flex gap-1.5 mt-3">
                  {(['Decision Tree', 'Random Forest', 'Tuned Random Forest'] as const).map((mName) => (
                    <button
                      key={mName}
                      onClick={() => setActiveModelForMatrix(mName)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-all ${
                        activeModelForMatrix === mName
                          ? 'bg-zinc-900 text-white shadow-subtle'
                          : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                      }`}
                    >
                      {mName === 'Tuned Random Forest' ? 'Tuned RF' : mName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="pt-6">
                <div className="text-center text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                  Predicted Class
                </div>

                <div className="flex items-center justify-center">
                  {/* Left Label */}
                  <div className="-rotate-90 text-xs font-mono text-zinc-400 uppercase tracking-wider -mr-4">
                    Actual Class
                  </div>

                  {/* 3x3 Heatmap */}
                  <div className="grid grid-cols-3 gap-2 w-full max-w-[280px]">
                    {currentMatrix.map((row, rIdx) =>
                      row.map((val, cIdx) => (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`aspect-square rounded-xl p-3 flex flex-col items-center justify-center text-center transition-all ${getHeatmapColor(
                            val
                          )}`}
                        >
                          <span className="text-lg font-bold font-mono">{val}</span>
                          <span className="text-[9px] font-mono opacity-80">
                            [{rIdx} → {cIdx}]
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Legend Below Heatmap */}
                <div className="flex justify-center items-center gap-4 mt-6 text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-emerald-600" /> Correct Predictions
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-amber-100 border border-amber-200" /> Misclassified
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 text-xs font-mono text-zinc-500 text-center">
              Total Sampel Uji: 389 baris (111 Class 0, 138 Class 1, 140 Class 2)
            </div>
          </div>

        </div>

        {/* Detailed Model Comparison Table */}
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-subtle overflow-hidden">
          <div className="p-5 border-b border-zinc-200 bg-zinc-50/50">
            <h4 className="text-base font-bold text-zinc-950 font-sans">
              Detail Komparasi Metrik Evaluasi Model Klasifikasi
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-100/60 border-b border-zinc-200 text-zinc-700 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">Model Machine Learning</th>
                  <th className="px-6 py-3.5 font-semibold">Kategori</th>
                  <th className="px-6 py-3.5 font-semibold">Accuracy</th>
                  <th className="px-6 py-3.5 font-semibold">Macro Precision</th>
                  <th className="px-6 py-3.5 font-semibold">Macro Recall</th>
                  <th className="px-6 py-3.5 font-semibold">Macro F1</th>
                  <th className="px-6 py-3.5 font-semibold">Ukuran File</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-mono text-xs">
                {CLASSIFICATION_MODELS.map((model, idx) => (
                  <tr key={idx} className={idx === 2 ? 'bg-emerald-50/40 font-semibold' : ''}>
                    <td className="px-6 py-4 text-zinc-900 flex items-center gap-2">
                      {idx === 2 && <Award className="w-4 h-4 text-emerald-600" />}
                      <span>{model.name}</span>
                    </td>
                    <td className="px-6 py-4 text-zinc-500 font-sans">{model.type}</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">
                      {(model.accuracy * 100).toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 text-zinc-700">{(model.macroPrecision * 100).toFixed(0)}%</td>
                    <td className="px-6 py-4 text-zinc-700">{(model.macroRecall * 100).toFixed(0)}%</td>
                    <td className="px-6 py-4 text-zinc-700">{(model.macroF1 * 100).toFixed(0)}%</td>
                    <td className="px-6 py-4 text-zinc-500">{model.fileSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
