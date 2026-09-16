import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { FEATURES_LIST, PROJECT_METADATA } from '../data/projectData';

export const DatasetSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredFeatures = FEATURES_LIST.filter((feature) => {
    const matchesSearch =
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || feature.type === selectedType;
    return matchesSearch && matchesType;
  });

  const types = ['All', 'Numerical', 'Categorical', 'Engineered', 'Target'];

  return (
    <section id="dataset" className="py-20 border-t border-zinc-200/80 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 text-xs font-mono font-medium text-zinc-600 mb-3">
            <span>SECTION 02</span>
            <span>·</span>
            <span>DATA ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Dataset Schema & Feature Dictionary
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Menelusuri struktur fitur transaksi perbankan dan transformasi atribut dari raw data hingga siap diproses oleh algoritma machine learning.
          </p>
        </div>

        {/* Dataset Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-subtle">
            <span className="text-xs font-mono text-zinc-500 block mb-1">RAW TRANSACTIONS</span>
            <div className="text-2xl font-bold font-mono text-zinc-900">
              {PROJECT_METADATA.summary.rawRecords.toLocaleString()}
            </div>
            <span className="text-xs text-zinc-500 mt-1 block">16 kolom awal sebelum seleksi</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-subtle">
            <span className="text-xs font-mono text-zinc-500 block mb-1">CLEANED TRANSACTIONS</span>
            <div className="text-2xl font-bold font-mono text-emerald-600">
              {PROJECT_METADATA.summary.cleanedRecords.toLocaleString()}
            </div>
            <span className="text-xs text-zinc-500 mt-1 block">Bebas missing values & outliers</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-subtle">
            <span className="text-xs font-mono text-zinc-500 block mb-1">MODELING FEATURES</span>
            <div className="text-2xl font-bold font-mono text-zinc-900">
              {PROJECT_METADATA.summary.cleanedFeatures} Fitur
            </div>
            <span className="text-xs text-zinc-500 mt-1 block">5 Numerik + 5 Kategorikal</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-subtle">
            <span className="text-xs font-mono text-zinc-500 block mb-1">ONE-HOT ENCODED</span>
            <div className="text-2xl font-bold font-mono text-indigo-600">
              {PROJECT_METADATA.summary.encodedFeatures} Dimensi
            </div>
            <span className="text-xs text-zinc-500 mt-1 block">Input untuk klasifikasi terawasi</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-subtle mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari fitur atau deskripsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent font-mono"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-zinc-400 mr-1 hidden sm:inline" />
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedType === type
                    ? 'bg-zinc-900 text-white shadow-subtle'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Table */}
        <div className="bg-white rounded-xl border border-zinc-200 shadow-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-700 font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">Nama Fitur</th>
                  <th className="px-6 py-3.5 font-semibold">Tipe Atribut</th>
                  <th className="px-6 py-3.5 font-semibold">Dtype</th>
                  <th className="px-6 py-3.5 font-semibold">Statistik Riil / Modus</th>
                  <th className="px-6 py-3.5 font-semibold">Deskripsi Bisnis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-sans">
                {filteredFeatures.map((feature) => (
                  <tr key={feature.name} className="hover:bg-zinc-50/70 transition-colors">
                    <td className="px-6 py-3.5 font-mono font-semibold text-zinc-900">
                      {feature.name}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium ${
                          feature.type === 'Numerical'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : feature.type === 'Categorical'
                            ? 'bg-purple-50 text-purple-700 border border-purple-200'
                            : feature.type === 'Engineered'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {feature.type}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 font-mono text-zinc-500 text-xs">
                      {feature.dataType}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-xs text-zinc-700">
                      {feature.type === 'Numerical' ? (
                        <span>
                          μ: {feature.mean} <span className="text-zinc-400">|</span> [{feature.min} - {feature.max}]
                        </span>
                      ) : (
                        <span>Modus: {feature.mode}</span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-zinc-600 text-xs sm:text-sm">
                      {feature.description}
                    </td>
                  </tr>
                ))}

                {filteredFeatures.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                      Tidak ada fitur yang cocok dengan kata kunci "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-zinc-50 border-t border-zinc-200 text-right text-[11px] font-mono text-zinc-500">
            Menampilkan {filteredFeatures.length} dari {FEATURES_LIST.length} total fitur
          </div>
        </div>

      </div>
    </section>
  );
};
