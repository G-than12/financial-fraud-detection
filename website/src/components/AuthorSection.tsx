import React from 'react';
import { Github, GraduationCap, ExternalLink } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#fafaf9] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 shadow-elevated">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            
            {/* Avatar / Monogram */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center font-mono text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-subtle border border-zinc-800 dark:border-zinc-700">
              GH
            </div>

            {/* Author Info */}
            <div className="space-y-2 flex-grow">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Project Author & Engineer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-sans">
                {PROJECT_METADATA.author.name}
              </h2>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <span>{PROJECT_METADATA.author.university}</span>
                </span>
                <span className="text-zinc-300 dark:text-zinc-600">·</span>
                <span>Informatics Engineering Student</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 pt-1">
                Fokus riset & kompetensi: <strong className="text-zinc-900 dark:text-zinc-200">Data Science</strong>, <strong className="text-zinc-900 dark:text-zinc-200">Machine Learning Engineering</strong>, dan <strong className="text-zinc-900 dark:text-zinc-200">Data Analytics</strong>.
              </p>
            </div>

            {/* GitHub Button */}
            <div className="pt-2 sm:pt-0">
              <a
                href={PROJECT_METADATA.author.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 border border-transparent dark:border-zinc-700 text-white text-xs font-mono font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>@G-than12</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
