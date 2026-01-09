import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { FeatureProps } from '../../types';

export const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon: Icon, colSpan = '', rowSpan = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden p-8 rounded-2xl bg-petrol-800/50 border border-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors group ${colSpan} ${rowSpan}`}
    >
      <div className="absolute top-0 right-0 p-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-500/10" />
      
      <div className="relative z-10 flex flex-col h-full items-start">
        <div className="p-3 rounded-lg bg-petrol-900 border border-white/10 text-gold-500 mb-6 group-hover:text-white group-hover:bg-gold-500 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};