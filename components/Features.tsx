import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock, AlignLeft } from 'lucide-react';
import { TranslationContent, Language } from '../types';
import { CONTENT } from '../constants';

interface FeaturesProps {
  currentLang: Language;
}

const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const t = CONTENT[currentLang].features;

  const features = [
    {
      icon: <Eye className="w-12 h-12 text-cyan-600" />,
      title: t.readability.title,
      description: t.readability.desc,
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: t.cps.title,
      description: t.cps.desc,
    },
    {
      icon: <AlignLeft className="w-12 h-12 text-pink-600" />,
      title: t.formatting.title,
      description: t.formatting.desc,
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading text-white"
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-slate-700/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-600 group-hover:bg-cyan-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors font-heading">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;