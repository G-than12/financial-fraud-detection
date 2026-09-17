import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { PREPROCESSING_STEPS } from '../data/projectData';

export const PreprocessingSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="preprocessing" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 03</span>
            <span>·</span>
            <span>DATA SANITIZATION & PIPELINE</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Data Preprocessing Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Menelusuri 6 tahapan pembersihan, penyaringan pencilan berbasis IQR, transformasi skala, dan rekayasa fitur sebelum pemodelan klaster.
          </p>
        </div>

        {/* Step Selector Horizontal Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {PREPROCESSING_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all relative ${
                activeStep === idx
                  ? 'bg-zinc-900 dark:bg-emerald-600 border-zinc-900 dark:border-emerald-600 text-white shadow-elevated'
                  : 'bg-[#fafaf9] dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/80 dark:hover:bg-zinc-850'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[11px] font-mono font-bold ${
                    activeStep === idx ? 'text-emerald-400 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'
                  }`}
                >
                  STEP {step.step}
                </span>
                {activeStep === idx && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 dark:text-white" />
                )}
              </div>
              <div
                className={`text-xs font-semibold line-clamp-1 ${
                  activeStep === idx ? 'text-white' : 'text-zinc-900 dark:text-zinc-200'
                }`}
              >
                {step.title.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-900 p-6 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300">
                <span>STAGE {PREPROCESSING_STEPS[activeStep].step} OF 06</span>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-950 dark:text-white font-sans">
                {PREPROCESSING_STEPS[activeStep].title}
              </h3>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Operational Action
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {PREPROCESSING_STEPS[activeStep].action}
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {PREPROCESSING_STEPS[activeStep].detail}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-900/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Hasil: {PREPROCESSING_STEPS[activeStep].impact}</span>
              </div>
            </div>

            {/* Code / Configuration Box on the Right */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-zinc-900 text-zinc-300 p-5 font-mono text-xs shadow-elevated border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-500">
                  <span className="text-[11px]">pipeline_execution.py</span>
                  <span className="text-[10px] text-emerald-400">Step {PREPROCESSING_STEPS[activeStep].step}</span>
                </div>

                {activeStep === 0 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 01. Ingestion & Quality Check
df = pd.read_csv(url)
print(df.shape)  # (2537, 16)
print(df.isnull().sum())
print(df.duplicated().sum()) # 21`}
                  </pre>
                )}

                {activeStep === 1 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 02. Dropping Nulls & Duplicates
df.dropna(inplace=True)
df.drop_duplicates(inplace=True)
# Sisa data tanpa nilai hilang`}
                  </pre>
                )}

                {activeStep === 2 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 03. Identifier Column Drop
cols_to_drop = [c for c in df.columns 
  if 'id' in c.lower() 
  or 'ip' in c.lower() 
  or 'date' in c.lower()]
df = df.drop(columns=cols_to_drop)`}
                  </pre>
                )}

                {activeStep === 3 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 04. IQR Outlier Filtering
for col in numerical_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    df = df[(df[col]>=lower) & 
            (df[col]<=upper)]
# Final: 1,945 Clean Rows`}
                  </pre>
                )}

                {activeStep === 4 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 05. Scaling & Label Encoding
scaler = StandardScaler()
df[numerical_cols] = scaler.fit_transform(
    df[numerical_cols]
)
# Categorical label encoded`}
                  </pre>
                )}

                {activeStep === 5 && (
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
{`# 06. Age Quantile Binning
df['AgeGroup'] = pd.qcut(
    df['CustomerAge'], 
    q=3, 
    labels=['Rendah','Sedang','Tinggi']
)
encoders['AgeGroup'] = LabelEncoder()`}
                  </pre>
                )}

                <div className="pt-2 text-[10px] text-zinc-500 border-t border-zinc-800/80">
                  Verified against [Clustering]_Submission_Akhir_BMLP_GathanHilabi.ipynb
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
