"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { StorySection } from "@/lib/story-section.type";

interface Props {
  section: StorySection;
  index: number;
  active: boolean;
  activeIndex: number;
}

export function SectionTextBlock({ section, index, active, activeIndex }: Props) {
  const router = useRouter();

  return (
    <motion.div
      animate={{
        opacity: active ? 1 : index < activeIndex ? 0.7 : 0.4,
        y: active ? 0 : index < activeIndex ? -10 : 10
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-6"
      aria-current={active ? "true" : "false"}
      tabIndex={-1}
    >
      <div className="space-y-2">
        {section.highlight && (
          <span className="rounded-full bg-[rgb(var(--bg-rgb)/0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-red)]">
            {section.highlight}
          </span>
        )}
        <h3 className="text-3xl font-bold text-[var(--text)]">{section.title}</h3>
        <p className="text-[var(--text)]/80 leading-relaxed">{section.description}</p>
      </div>

      {section.badges && section.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {section.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgb(var(--text-rgb)/0.15)] bg-[rgb(var(--bg-rgb)/0.6)] px-3 py-1 text-xs font-semibold text-[var(--text)]"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {section.steps && section.steps.length > 0 && (
        <ol className="space-y-3 text-[var(--text)]/80">
          {section.steps.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-red)]" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )}

      {section.stats && section.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 text-[var(--text)]">
          {section.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[rgb(var(--text-rgb)/0.1)] bg-[rgb(var(--bg-rgb)/0.6)] p-4">
              <div className="text-lg font-bold text-[var(--brand-red)]">{stat.value}</div>
              <div className="text-sm text-[var(--text)]/70">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {section.cta && (
        <button
          onClick={() => router.push(section.cta!.href)}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-red)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-coral)]"
        >
          {section.cta.label}
        </button>
      )}
    </motion.div>
  );
}
