import React from 'react';
import { FileCode, ExternalLink, Cpu } from 'lucide-react';
import { MODEL_ARTIFACTS, PROJECT_METADATA } from '../data/projectData';

export const ModelArtifactsSection: React.FC = () => {
  return (
    <section id="models" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 07</span>
            <span>·</span>
            <span>PERSISTED ARTIFACTS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Trained Model Artifacts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Seluruh model machine learning disimpan dalam format serialisasi HDF5 / Joblib (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">.h5</code>) dan tersimpan di folder <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">models/</code> pada repositori.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MODEL_ARTIFACTS.map((model, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-900 p-6 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-subtle group-hover:scale-105 transition-transform">
                    <FileCode className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {model.size}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 font-semibold block mb-1 uppercase tracking-wider">
                  {model.category}
                </span>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white font-sans mb-1.5">
                  {model.name}
                </h3>
                
                <div className="text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-100 dark:border-emerald-900/60 inline-block mb-3">
                  {model.filename}
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {model.purpose}
                </p>

                <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-950 p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800">
                  <span className="text-zinc-400 dark:text-zinc-500">Algoritma:</span> {model.algorithm}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800">
                <a
                  href={`${PROJECT_METADATA.repositoryUrl}/blob/main/models/${model.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-subtle"
                >
                  <span>View Artifact on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Code Snippet: How to Load in Python */}
        <div className="p-6 rounded-2xl bg-zinc-900 text-zinc-200 border border-zinc-800 shadow-elevated">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-zinc-300">
                Python Inference Quick Example (models/loading_demo.py)
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">joblib & scikit-learn</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto text-zinc-300 leading-relaxed">
{`import joblib
import pandas as pd

# 1. Load the tuned Random Forest classifier model
classifier = joblib.load('models/tuning_classification.h5')

# 2. Predict cluster segment for incoming transaction features
# predictions = classifier.predict(X_test)
print("Model loaded successfully. Ready for inference.")`}
          </pre>
        </div>

      </div>
    </section>
  );
};
