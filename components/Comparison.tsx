import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface ComparisonProps {
  currentLang: Language;
}

const Comparison: React.FC<ComparisonProps> = ({ currentLang }) => {
  const t = CONTENT[currentLang].comparison;
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if (window.TouchEvent && event instanceof TouchEvent) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="comparison" className="py-20 bg-slate-900 text-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-violet-500/10 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-white">{t.title}</h2>
          <p className="text-slate-400 text-lg">{t.desc}</p>
        </div>

        {/* The Comparison Display */}
        <div
          ref={containerRef}
          className="relative w-full h-[350px] md:h-[450px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-slate-700 select-none cursor-ew-resize group"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Layer 1: Machine Translation (Underneath) */}
          <div className="absolute inset-0 flex items-center justify-center p-8 bg-slate-900/50">
            <div className="text-center w-full max-w-2xl relative">
              <span className="inline-block px-3 py-1 mb-6 rounded-full bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                {t.machineLabel}
              </span>
              <p className="text-xl md:text-3xl font-serif text-slate-500 leading-tight">
                "{t.sampleText.machine}"
              </p>

              {/* Stats Indicators for Bad Example */}
              <div className="mt-8 flex justify-center gap-4 text-xs font-mono text-red-500 opacity-60">
                <div className="flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> &gt; 2 Lines</div>
                <div className="flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Poor Break</div>
              </div>

              <div className="mt-4 flex justify-center space-x-2">
                <div className="h-1 w-12 bg-red-500/50 rounded-full"></div>
                <div className="h-1 w-2 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Layer 2: Manual Translation (On Top) */}
          <div
            className="absolute inset-0 flex items-center justify-center p-8 bg-slate-800 border-r-4 border-cyan-500"
            style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
          >
            <div className="text-center w-full max-w-2xl relative" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
              {/* Note: Width needs to match container to prevent text reflow during slide */}
              <span className="inline-block px-3 py-1 mb-6 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
                {t.manualLabel}
              </span>

              {/* STRICT 2 LINES MAX STYLING */}
              <div className="h-[4.5rem] md:h-[6rem] flex items-center justify-center">
                <p className="text-xl md:text-3xl font-sans font-medium text-white leading-normal whitespace-pre-wrap line-clamp-2 drop-shadow-lg">
                  "{t.sampleText.manual}"
                </p>
              </div>

              {/* Stats Indicators for Good Example */}
              <div className="mt-8 flex justify-center gap-6 text-xs font-mono text-cyan-400">
                <div className="flex items-center px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20"><CheckCircle2 className="w-3 h-3 mr-1" /> {t.stats.lines}</div>
                <div className="flex items-center px-2 py-1 bg-cyan-500/10 rounded border border-cyan-500/20"><CheckCircle2 className="w-3 h-3 mr-1" /> {t.stats.cps}</div>
              </div>

              <div className="mt-4 flex justify-center space-x-2">
                <div className="h-1 w-12 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center z-10 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-slate-900 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] border-2 border-cyan-400 flex items-center justify-center text-cyan-400">
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 font-mono pointer-events-none tracking-widest">
            DRAG TO COMPARE
          </div>
        </div>
      </div>
    </section >
  );
};

export default Comparison;