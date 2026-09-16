import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Layers } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-[#fafaf9]/95 backdrop-blur-md border-b border-zinc-200/80 shadow-subtle'
          : 'bg-[#fafaf9]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center transition-transform group-hover:scale-105">
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 font-mono">
                {PROJECT_METADATA.repositoryName}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                ML Case Study
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-subtle"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-[#fafaf9] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-200">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800"
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
