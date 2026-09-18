import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Layers, Sun, Moon } from 'lucide-react';
import { PROJECT_METADATA } from '../data/projectData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Smooth scroll directly to the section header title with clean breathing room
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 68;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      // Position view 20px comfortably above the section title badge
      const offsetPosition = elementPosition - navbarHeight - 20;

      setActiveSection(id);
      setIsClickScrolling(true);

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      // Re-enable scroll spy after scroll animation completes
      setTimeout(() => {
        setIsClickScrolling(false);
      }, 850);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate reading / scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // If user recently clicked a nav item, lock activeSection during scroll animation
      if (isClickScrolling) return;

      // Robust Scroll Spy using absolute document Y coordinates (immune to motion transforms)
      const sectionIds = ['overview', 'dataset', 'preprocessing', 'clustering', 'classification', 'results', 'models'];
      const scrollThreshold = window.scrollY + 140;

      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollThreshold >= top) {
            currentSection = id;
          }
        }
      }

      // Edge case: top of the page
      if (window.scrollY < 200) {
        currentSection = 'overview';
      }

      // Edge case: bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickScrolling]);

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Dataset', href: '#dataset', id: 'dataset' },
    { label: 'Preprocessing', href: '#preprocessing', id: 'preprocessing' },
    { label: 'Clustering', href: '#clustering', id: 'clustering' },
    { label: 'Classification', href: '#classification', id: 'classification' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Models', href: '#models', id: 'models' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/70 dark:border-zinc-800/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]'
          : 'bg-[#fafaf9]/75 dark:bg-zinc-950/50 backdrop-blur-md border-b border-transparent'
      }`}
    >
      {/* Top Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.25rem]">
          
          {/* Brand Logo & Tag */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white shadow-sm border border-zinc-700/60 dark:border-zinc-700 group-hover:border-emerald-500/60 group-hover:scale-105 transition-all">
              <Layers className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  FinProfile<span className="text-emerald-500 font-mono">.ml</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/80 font-bold uppercase tracking-wider">
                  BMLP
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wide hidden sm:block">
                Transaction Behavioral ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill Container */}
          <nav className="hidden lg:flex items-center p-1 rounded-xl bg-zinc-100/75 dark:bg-zinc-900/75 border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Area: Theme Toggle & GitHub CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800 transition-all shadow-subtle flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              aria-label="Toggle dark/light mode"
              title={theme === 'dark' ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* GitHub Repo Button */}
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-subtle hover:shadow-elevated hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 focus:outline-none"
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
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200 shadow-elevated">
          <div className="grid grid-cols-2 gap-1.5 pb-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/80 shadow-xs'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href={PROJECT_METADATA.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-subtle"
            >
              <Github className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
