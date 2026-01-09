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
      className={`group relative overflow-hidden rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.6)] p-8 backdrop-blur-sm transition-colors hover:border-[color:rgba(30,141,62,0.5)] ${colSpan} ${rowSpan}`}
    >
      <div className="absolute -mr-16 -mt-16 right-0 top-0 rounded-full bg-[color:rgba(30,141,62,0.08)] p-32 blur-3xl transition-all group-hover:bg-[color:rgba(30,141,62,0.16)]" />

      <div className="relative z-10 flex h-full flex-col items-start">
        <div className="mb-6 rounded-lg border border-[rgb(var(--text-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.8)] p-3 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-[var(--text)]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 font-display text-xl font-bold text-[var(--text)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[color:rgba(226,232,240,0.7)]">{description}</p>
      </div>
    </motion.div>
  );
};

