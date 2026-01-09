"use client";

import { motion } from "framer-motion";
import type { FeatureProps } from "@/lib/types";

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  colSpan = "",
  rowSpan = ""
}: FeatureProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-petrol-800/50 p-8 backdrop-blur-sm transition-colors hover:border-gold-500/30 ${colSpan} ${rowSpan}`}
    >
      <div className="absolute -mr-16 -mt-16 right-0 top-0 rounded-full bg-gold-500/5 p-32 blur-3xl transition-all group-hover:bg-gold-500/10" />

      <div className="relative z-10 flex h-full flex-col items-start">
        <div className="mb-6 rounded-lg border border-white/10 bg-petrol-900 p-3 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 font-display text-xl font-bold text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

