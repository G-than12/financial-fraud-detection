import React from 'react';
import { Database, Binary, Cpu, Award, FileCode, CheckCircle } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const ProjectOverview: React.FC = () => {
  const statCards = [
    {
      icon: Database,
      value: PROJECT_METADATA.summary.cleanedRecords.toLocaleString(),
      label: 'Cleaned Records',
      sublabel: `from ${PROJECT_METADATA.summary.rawRecords.toLocaleString()} raw rows`,
      accent: 'text-zinc-900'
    },
    {
      icon: Binary,
      value: `${PROJECT_METADATA.summary.cleanedFeatures} Features`,
      label: 'Preprocessed Features',
      sublabel: '55 features after One-Hot Encoding',
      accent: 'text-zinc-900'
    },
    {
      icon: Cpu,
      value: `${PROJECT_METADATA.summary.clustersCount} Clusters`,
      label: 'K-Means Segments',
      sublabel: `Silhouette Score: ${PROJECT_METADATA.summary.silhouetteScore}`,
      accent: 'text-emerald-600'
    },
    {
      icon: Award,
      value: `${(PROJECT_METADATA.summary.bestAccuracy * 100).toFixed(2)}%`,
      label: 'Champion Accuracy',
      sublabel: 'Tuned Random Forest (GridSearchCV)',
      accent: 'text-indigo-600'
    },
    {
      icon: FileCode,
      value: `${PROJECT_METADATA.summary.modelsCount} Models`,
      label: 'Serialized .h5 Artifacts',
      sublabel: 'Clustering, PCA, DT & RF',
      accent: 'text-zinc-900'
    }
  ];

  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="overview" className="max-w-3xl mb-12 scroll-mt-24 sm:scroll-mt-28">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 01</span>
            <span>·</span>
            <span>EXECUTIVE SUMMARY</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Project Overview & Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Understanding the transition from unsupervised behavioral discovery to automated supervised inference in banking transaction environments.
          </p>
        </div>

        {/* Top Key Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-850 transition-all shadow-subtle hover:shadow-elevated"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">STAT 0{idx + 1}</span>
                </div>
                <div className={`text-2xl font-bold tracking-tight font-mono ${
                  card.accent === 'text-zinc-900'
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : card.accent === 'text-emerald-600'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-indigo-600 dark:text-indigo-400'
                }`}>
                  {card.value}
                </div>
                <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">{card.label}</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">{card.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          
          <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white font-sans">
              Mengapa Unsupervised Learning (Clustering) Dilakukan?
            </h3>
            <p>
              Dataset transaksi perbankan seringkali tidak memiliki anotasi kelas awal (*unlabeled*). Nasabah bertransaksi dengan kebiasaan yang bervariasi: mahasiswa bertransaksi nominal kecil harian, sedangkan profesional bertransaksi dengan saldo likuid tinggi.
            </p>
            <p>
              Melalui <strong>K-Means Clustering</strong> ($k=3$), model mengekstrak 3 klaster alami yang terpisah secara kohesif dengan <strong>Silhouette Score 0.4963</strong>. Reduksi dimensi <strong>PCA 2D</strong> kemudian memvalidasi bahwa ketiga kelompok nasabah menempati region spasial yang jelas.
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white font-sans">
              Mengapa Supervised Learning (Klasifikasi) Dilanjutkan?
            </h3>
            <p>
              Dalam sistem produksi perbankan, menjalankan algoritma clustering setiap kali transaksi baru masuk membutuhkan komputasi berat dan berisiko menggeser batas klaster (*centroid drift*).
            </p>
            <p>
              Oleh karena itu, label klaster hasil K-Means dijadikan sebagai target kelas (<code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-xs text-zinc-800 dark:text-zinc-200">Target: 0, 1, 2</code>) untuk melatih model klasifikasi <strong>Decision Tree</strong> dan <strong>Random Forest</strong>. Model terbaik yang dioptimasi via <strong>GridSearchCV</strong> mencapai akurasi uji <strong>98.97%</strong>, memungkinkan pengenalan segmen nasabah baru secara instan (*real-time inference*).
            </p>
          </div>

        </div>

        {/* Callout: Repository Context & Fraud Baseline Note */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-4">
          <div className="p-2 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mt-0.5 flex-shrink-0 border border-emerald-200 dark:border-emerald-800/80">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-1.5">
            <strong className="text-zinc-950 dark:text-zinc-100 font-semibold block text-sm">
              Catatan Teknis: Konteks Pemodelan Baseline &amp; Domain Fraud Prevention
            </strong>
            <p>
              Repositori <code className="px-1.5 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 font-mono text-xs text-zinc-800 dark:text-zinc-200">{PROJECT_METADATA.repositoryName}</code> ini berorientasi pada domain analitik perbankan. Implementasi teknis berfokus pada <strong>Customer Behavioral Profiling &amp; Multi-Class Segment Classification</strong> (Target: 0, 1, 2) menggunakan K-Means dan Random Forest, bukan klasifikasi biner <em>Fraud vs. Legitimate</em>.
            </p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-0.5">
              Di industri perbankan dan fintech modern, pemahaman profil transaksi normal nasabah semacam ini merupakan prasyarat esensial (<em>baseline behavioral modeling</em>) sebelum mendesain aturan pencegahan penipuan maupun deteksi transaksi anomali secara real-time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
