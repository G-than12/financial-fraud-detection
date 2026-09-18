import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell
} from 'recharts';
import { Check } from 'lucide-react';
import { CLUSTER_PROFILES, PCA_POINTS, CENTROIDS, PROJECT_METADATA } from '../data/projectData';
import { useTheme } from '../context/ThemeContext';

export const ClusteringSection: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCluster, setSelectedCluster] = useState<number | 'all'>('all');
  const [showCentroids, setShowCentroids] = useState(true);

  // Dynamic Recharts styling for dark mode
  const axisStroke = theme === 'dark' ? '#3f3f46' : '#e4e4e7';
  const textFill = theme === 'dark' ? '#a1a1aa' : '#71717a';

  // Filter points based on cluster selection
  const filteredPoints = useMemo(() => {
    if (selectedCluster === 'all') return PCA_POINTS;
    return PCA_POINTS.filter((pt) => pt.cluster === selectedCluster);
  }, [selectedCluster]);

  const clusterColors: Record<number, string> = {
    0: '#0284c7', // Sky 600
    1: '#059669', // Emerald 600
    2: '#6366f1', // Indigo 500
  };

  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-[#fafaf9] dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="clustering" className="max-w-3xl mb-12 scroll-mt-28">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-3 border border-transparent dark:border-zinc-800">
            <span>SECTION 04</span>
            <span>·</span>
            <span>UNSUPERVISED DISCOVERY</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            K-Means Clustering & 2D PCA Spatial Projection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Menemukan segmentasi perilaku nasabah secara mandiri tanpa label awal, divalidasi dengan skor kohesi siluet dan proyeksi bidang kartesius 2D.
          </p>
        </div>

        {/* Top Evaluation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-subtle">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">OPTIMAL CLUSTERS</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                Elbow Peak
              </span>
            </div>
            <div className="text-3xl font-bold font-mono text-zinc-950 dark:text-zinc-100">k = 3</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              Ditentukan menggunakan <code>KElbowVisualizer(KMeans())</code> dengan rentang k=2 hingga k=9.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-subtle">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">SILHOUETTE SCORE</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                Strong Separation
              </span>
            </div>
            <div className="text-3xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
              {PROJECT_METADATA.summary.silhouetteScore}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              Koefisien ~0.50 menunjukkan batas klaster terdefinisi dengan sangat rapat dan minim tumpang-tindih (*overlapping*).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-subtle">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">DIMENSIONALITY REDUCTION</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                PCA 2D
              </span>
            </div>
            <div className="text-3xl font-bold font-mono text-zinc-950 dark:text-zinc-100">2 Components</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              Mereduksi 10 fitur preprocessed menjadi PC1 & PC2 untuk visualisasi spasial koordinat nasabah.
            </p>
          </div>
        </div>

        {/* Interactive Scatter Plot Chart */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-subtle mb-16">
          
          {/* Chart Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
            <div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-sans">
                Interactive 2D Principal Component Projection (300 Sampled Points)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                X-Axis: Principal Component 1 (PC1) · Y-Axis: Principal Component 2 (PC2)
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCluster('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCluster === 'all'
                    ? 'bg-zinc-900 dark:bg-emerald-600 text-white shadow-subtle'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                All Clusters
              </button>
              {[0, 1, 2].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCluster(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                    selectedCluster === c
                      ? 'bg-zinc-900 dark:bg-emerald-600 text-white shadow-subtle'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: clusterColors[c] }}
                  />
                  <span>Cluster {c}</span>
                </button>
              ))}

              <button
                onClick={() => setShowCentroids(!showCentroids)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                  showCentroids
                    ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                    : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                }`}
              >
                Centroids {showCentroids ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Recharts Scatter Plot */}
          <div className="w-full h-[400px] sm:h-[460px] pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
                <XAxis
                  type="number"
                  dataKey="pc1"
                  name="PC1"
                  domain={[-30, 30]}
                  tick={{ fill: textFill, fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: axisStroke }}
                  tickLine={{ stroke: axisStroke }}
                  label={{ value: 'Principal Component 1 (PC1)', position: 'bottom', offset: 0, fill: textFill, fontSize: 11, fontFamily: 'monospace' }}
                />
                <YAxis
                  type="number"
                  dataKey="pc2"
                  name="PC2"
                  domain={[-5, 5]}
                  tick={{ fill: textFill, fontSize: 11, fontFamily: 'monospace' }}
                  axisLine={{ stroke: axisStroke }}
                  tickLine={{ stroke: axisStroke }}
                  label={{ value: 'Principal Component 2 (PC2)', angle: -90, position: 'left', offset: 0, fill: textFill, fontSize: 11, fontFamily: 'monospace' }}
                />
                <ZAxis range={[30, 40]} />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      const isCentroid = 'label' in data;
                      return (
                        <div className="bg-zinc-900 dark:bg-zinc-950 text-white p-3 rounded-lg text-xs font-mono shadow-elevated border border-zinc-800 dark:border-zinc-700 space-y-1">
                          <div className="text-emerald-400 font-bold">
                            {isCentroid ? data.label : `Cluster ${data.cluster}`}
                          </div>
                          <div>PC1: {data.pc1}</div>
                          <div>PC2: {data.pc2}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />

                {/* Data Points */}
                <Scatter name="Nasabah Transaksi" data={filteredPoints}>
                  {filteredPoints.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={clusterColors[entry.cluster]}
                      fillOpacity={0.65}
                    />
                  ))}
                </Scatter>

                {/* Centroids */}
                {showCentroids && (
                  <Scatter
                    name="Cluster Centroids"
                    data={CENTROIDS}
                    shape="cross"
                  >
                    {CENTROIDS.map((c, index) => (
                      <Cell
                        key={`centroid-${index}`}
                        fill={clusterColors[c.cluster]}
                        stroke="#000000"
                        strokeWidth={2}
                      />
                    ))}
                  </Scatter>
                )}
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <span>Total sampel divisualisasikan: {filteredPoints.length} titik koordinat</span>
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]" /> Cluster 0</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#059669]" /> Cluster 1</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" /> Cluster 2</span>
            </span>
          </div>

        </div>

        {/* 3 Detailed Cluster Profiles Cards */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Karakteristik & Profil Statistik Masing-Masing Klaster (Setelah Inverse Transform)
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CLUSTER_PROFILES.map((profile) => (
              <div
                key={profile.id}
                className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: profile.color }}
                      />
                      <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {profile.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {profile.count} Data ({profile.percentage}%)
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-zinc-950 dark:text-white font-sans mb-3">
                    {profile.tagline}
                  </h4>

                  {/* Metrics Table */}
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200/60 dark:border-zinc-800/80 font-mono text-xs space-y-2 mb-4">
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Avg Transaction:</span>
                      <strong className="text-zinc-900 dark:text-zinc-100">{profile.metrics.avgTransactionAmount}</strong>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Avg Customer Age:</span>
                      <strong className="text-zinc-900 dark:text-zinc-100">{profile.metrics.avgCustomerAge} thn</strong>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Avg Duration:</span>
                      <strong className="text-zinc-900 dark:text-zinc-100">{profile.metrics.avgDuration} dtk</strong>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Avg Balance:</span>
                      <strong className="text-zinc-900 dark:text-zinc-100">{profile.metrics.avgBalance.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                      <span>Login Attempts:</span>
                      <strong className="text-zinc-900 dark:text-zinc-100">{profile.metrics.loginAttempts.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Categorical Modus */}
                  <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 mb-4 font-sans">
                    <div>
                      <strong className="text-zinc-900 dark:text-zinc-200">Profesi Dominan:</strong> {profile.categorical.occupation}
                    </div>
                    <div>
                      <strong className="text-zinc-900 dark:text-zinc-200">Kelompok Usia:</strong> {profile.categorical.ageGroup}
                    </div>
                    <div>
                      <strong className="text-zinc-900 dark:text-zinc-200">Kanal Layanan:</strong> {profile.categorical.channel}
                    </div>
                    <div>
                      <strong className="text-zinc-900 dark:text-zinc-200">Titik Lokasi:</strong> {profile.categorical.location}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    {profile.analysis}
                  </p>
                </div>

                {/* Recommendations */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Strategi Bisnis
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                    {profile.recommendations.map((rec, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
