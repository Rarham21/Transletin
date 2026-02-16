import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TranslationContent, Language } from '../types';
import { CONTENT } from '../constants';
import heroBg from './assets/hero-background.mp4';
import logo from './assets/logo.png';

interface HeroProps {
  currentLang: Language;
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = CONTENT[currentLang].hero;
  const ref = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  // Animation: Text slowly fades to 0% as user scrolls down
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900"
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 scale-110 -translate-y-[10%]"
        >
          <source src={heroBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-20 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt={t.title}
            className="w-full max-w-md mx-auto mb-8 mt-12 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-2xl text-slate-200 mb-8 font-light max-w-2xl mx-auto drop-shadow-md">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#portfolio"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] hover:-translate-y-1"
          >
            {t.cta}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-slate-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
      >
        <ChevronDown className="h-10 w-10" />
      </motion.div>
    </section>
  );
};

export default Hero;