import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Language } from './types';

function App() {
  const [currentLang, setLang] = useState<Language>('ID');

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-500 selection:text-white">
      <Navbar currentLang={currentLang} setLang={setLang} />
      <Hero currentLang={currentLang} />
      <Features currentLang={currentLang} />
      <Comparison currentLang={currentLang} />
      <Portfolio currentLang={currentLang} />
      <Testimonials currentLang={currentLang} />
      <Contact currentLang={currentLang} />
    </div>
  );
}

export default App;