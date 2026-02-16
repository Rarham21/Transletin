import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, CONTENT } from '../constants';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = CONTENT[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.features, href: '#features' },
    { label: t.portfolio, href: '#portfolio' },
    { label: t.comparison, href: '#comparison' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-slate-900/80 backdrop-blur-md border-slate-800 py-3 shadow-lg shadow-cyan-900/10'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="logo.png"
              alt="Transletin Logo"
              className="h-10 w-auto transition-all duration-300"
            />
            <span className="ml-3 text-xl font-heading font-bold tracking-wider text-white">
              TRANSLETIN
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 text-sm font-medium hover:text-cyan-400 ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                  }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center focus:outline-none transition-colors hover:text-cyan-400 ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                  }`}
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{currentLang}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-xl shadow-xl py-1 z-50 animate-fadeIn border border-slate-700 ring-1 ring-white/10">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLang(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${currentLang === lang.code ? 'bg-cyan-500/10 text-cyan-400 font-bold' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://id.shp.ee/VmrjfXL"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 border border-white/10"
            >
              {t.order}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Lang Toggle */}
            <button
              onClick={() => {
                const currentIndex = LANGUAGES.findIndex(l => l.code === currentLang);
                const nextIndex = (currentIndex + 1) % LANGUAGES.length;
                setLang(LANGUAGES[nextIndex].code);
              }}
              className="text-white"
            >
              {currentLang}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-xl border-t border-slate-800 absolute w-full top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://id.shp.ee/VmrjfXL"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-md font-bold"
            >
              {t.order}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;