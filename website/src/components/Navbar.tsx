import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Layers, Sun, Moon } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Dataset', href: '#dataset' },
    { label: 'Preprocessing', href: '#preprocessing' },
    { label: 'Clustering & PCA', href: '#clustering' },
    { label: 'Classification', href: '#classification' },
    { label: 'Results', href: '#results' },
    { label: 'Models', href: '#models' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/95 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-subtle'
          : 'bg-[#fafaf9]/80 dark:bg-zinc-950/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center transition-transform group-hover:scale-105 border border-zinc-800 dark:border-zinc-700">
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono">
                {PROJECT_METADATA.repositoryName}
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">
                ML Case Study
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area: Theme Toggle & GitHub CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-subtle flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              aria-label="Toggle dark/light mode"
              title={theme === 'dark' ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-subtle"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 focus:outline-none"
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-[#fafaf9] dark:bg-zinc-950 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
