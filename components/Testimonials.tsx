import React from 'react';
import { Language, Testimonial } from '../types';
import { CONTENT, TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  currentLang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = CONTENT[currentLang].testimonials;

  return (
    <section id="testimonials" className="py-20 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center font-heading text-white">
          {t.title}
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradients to fade edges - Updated for dark mode */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        {/* Sliding Container */}
        <div className="flex w-max animate-scroll hover:pause-scroll">
          {/* First Copy */}
          <div className="flex shrink-0 justify-around items-stretch gap-6 px-4 min-w-full">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={`t1-${idx}`} testimonial={testimonial} />
            ))}
          </div>
          {/* Second Copy for seamless loop */}
          <div className="flex shrink-0 justify-around items-stretch gap-6 px-4 min-w-full">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={`t2-${idx}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[400px] bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-colors group">
    <div>
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-slate-400 italic mb-6">"{testimonial.text}"</p>
    </div>
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500"
      />
      <div>
        <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
        <p className="text-cyan-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;