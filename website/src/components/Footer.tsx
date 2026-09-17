import React from 'react';
import { Layers, Github, ArrowUp } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-950 py-12 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-800 border border-transparent dark:border-zinc-700 text-white flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100 block">{PROJECT_METADATA.title}</span>
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                Machine Learning Portfolio Case Study · {PROJECT_METADATA.author.name}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-subtle flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">TOP</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80 text-center text-zinc-400 dark:text-zinc-500 text-[11px]">
          Developed for Dicoding Indonesia — Membangun Proyek Machine Learning Submission. All metrics and artifacts verified directly from repository notebooks.
        </div>
      </div>
    </footer>
  );
};
