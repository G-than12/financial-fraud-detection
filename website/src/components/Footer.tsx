import React from 'react';
import { Layers, Github, ArrowUp } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-[#fafaf9] py-12 text-zinc-600 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-zinc-900 block">{PROJECT_METADATA.title}</span>
              <span className="text-[11px] text-zinc-400">
                Machine Learning Portfolio Case Study · {PROJECT_METADATA.author.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 transition-colors shadow-subtle flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">TOP</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 text-center text-zinc-400 text-[11px]">
          Developed for Dicoding Indonesia — Membangun Proyek Machine Learning Submission. All metrics and artifacts verified directly from repository notebooks.
        </div>
      </div>
    </footer>
  );
};
