import React from 'react';
import { ArrowDown, Github, Terminal, CheckCircle2 } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Author Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PROJECT_METADATA.author.name}</span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-500 hidden sm:inline">UIN K.H. Abdurrahman Wahid Pekalongan</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
              Financial Fraud Detection
            </h1>

            {/* Descriptive Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
              An interactive machine learning case study combining unsupervised customer transaction clustering and supervised multi-class behavioral classification.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Machine Learning', 'K-Means Clustering', 'PCA 2D', 'Random Forest', 'Decision Tree', 'Python'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-subtle hover:translate-y-[-1px]"
              >
                <span>Explore Project</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={PROJECT_METADATA.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-zinc-300 text-zinc-800 text-sm font-semibold hover:bg-zinc-50 hover:border-zinc-400 transition-all shadow-subtle hover:translate-y-[-1px]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            </div>

            {/* Terminal Command Snippet */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/5 border border-zinc-200 font-mono text-xs text-zinc-600">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span>git clone https://github.com/G-than12/financial-fraud-detection.git</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Abstract Coordinate Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white border border-zinc-200/80 p-6 shadow-elevated overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 font-medium">PCA_2D_Projection.svg</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-medium px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  k = 3 Clusters
                </span>
              </div>

              {/* Coordinate Plot SVG */}
              <div className="relative w-full aspect-square max-h-[340px] bg-zinc-50/50 rounded-xl border border-zinc-100 p-4 flex items-center justify-center">
                
                {/* SVG Coordinate Grid */}
                <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                  {/* Axis lines */}
                  <line x1="20" y1="150" x2="280" y2="150" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="20" x2="150" y2="280" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Cluster 0 Points (Sky) */}
                  <g className="opacity-70">
                    <circle cx="65" cy="140" r="3.5" fill="#0284c7" />
                    <circle cx="75" cy="130" r="3" fill="#0284c7" />
                    <circle cx="55" cy="155" r="4" fill="#0284c7" />
                    <circle cx="85" cy="160" r="3.5" fill="#0284c7" />
                    <circle cx="95" cy="145" r="3" fill="#0284c7" />
                    <circle cx="60" cy="125" r="4" fill="#0284c7" />
                    <circle cx="70" cy="170" r="3" fill="#0284c7" />
                    <circle cx="80" cy="148" r="3.5" fill="#0284c7" />
                    {/* Centroid 0 */}
                    <polygon points="70,140 76,152 64,152" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Cluster 1 Points (Emerald) */}
                  <g className="opacity-70">
                    <circle cx="230" cy="145" r="3.5" fill="#059669" />
                    <circle cx="220" cy="135" r="3" fill="#059669" />
                    <circle cx="240" cy="155" r="4" fill="#059669" />
                    <circle cx="215" cy="160" r="3" fill="#059669" />
                    <circle cx="250" cy="140" r="3.5" fill="#059669" />
                    <circle cx="225" cy="168" r="4" fill="#059669" />
                    <circle cx="235" cy="125" r="3" fill="#059669" />
                    <circle cx="210" cy="148" r="3.5" fill="#059669" />
                    {/* Centroid 1 */}
                    <polygon points="230,140 236,152 224,152" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Cluster 2 Points (Indigo) */}
                  <g className="opacity-70">
                    <circle cx="148" cy="70" r="3.5" fill="#6366f1" />
                    <circle cx="138" cy="85" r="4" fill="#6366f1" />
                    <circle cx="160" cy="75" r="3" fill="#6366f1" />
                    <circle cx="152" cy="98" r="3.5" fill="#6366f1" />
                    <circle cx="135" cy="105" r="3" fill="#6366f1" />
                    <circle cx="165" cy="90" r="4" fill="#6366f1" />
                    <circle cx="145" cy="115" r="3.5" fill="#6366f1" />
                    <circle cx="158" cy="110" r="3" fill="#6366f1" />
                    {/* Centroid 2 */}
                    <polygon points="150,85 156,97 144,97" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Axis labels */}
                  <text x="270" y="165" fill="#71717a" fontSize="10" fontFamily="monospace">PC1</text>
                  <text x="156" y="32" fill="#71717a" fontSize="10" fontFamily="monospace">PC2</text>
                </svg>

                {/* Floating Metric Pill 1 */}
                <div className="absolute top-3 left-3 bg-white/95 border border-zinc-200/80 rounded-lg px-3 py-1.5 shadow-subtle flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500">Silhouette Score:</span>
                  <span className="text-xs font-mono font-bold text-zinc-900">{PROJECT_METADATA.summary.silhouetteScore}</span>
                </div>

                {/* Floating Metric Pill 2 */}
                <div className="absolute bottom-3 right-3 bg-white/95 border border-zinc-200/80 rounded-lg px-3 py-1.5 shadow-subtle flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px] font-mono text-zinc-500">Champion Acc:</span>
                  <span className="text-xs font-mono font-bold text-emerald-600">{(PROJECT_METADATA.summary.bestAccuracy * 100).toFixed(2)}%</span>
                </div>
              </div>

              {/* Legend row */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                  <div className="w-2 h-2 rounded-full bg-sky-600 mx-auto mb-1" />
                  <span className="text-zinc-600">Cluster 0 (555)</span>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50/50 border border-emerald-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mx-auto mb-1" />
                  <span className="text-zinc-600">Cluster 1 (690)</span>
                </div>
                <div className="p-2 rounded-lg bg-indigo-50/50 border border-indigo-100">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mx-auto mb-1" />
                  <span className="text-zinc-600">Cluster 2 (700)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
