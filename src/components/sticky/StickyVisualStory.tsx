"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { StorySection } from "@/lib/story-section.type";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionTextBlock } from "./SectionTextBlock";
import { SectionImageBlock } from "./SectionImageBlock";

export default function StickyVisualStory({ sections }: { sections: StorySection[] }) {
  const { activeIndex, sectionRefs } = useActiveSection(sections.length);
  const router = useRouter();

  if (!sections || sections.length === 0) return null;

  return (
    <div className="layout-shell mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-2">
      {/* Colonne texte (desktop) */}
      <div className="hidden flex-col gap-40 lg:flex">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="scroll-m-24"
          >
            <SectionTextBlock
              section={section}
              index={index}
              active={index === activeIndex}
              activeIndex={activeIndex}
            />
          </section>
        ))}
      </div>

      {/* Image sticky (desktop) */}
      <div className="hidden lg:block">
        <SectionImageBlock activeSection={sections[activeIndex]} />
      </div>

      {/* Version mobile : cartes empilées */}
      <div className="space-y-8 lg:hidden">
        {sections.map((section) => (
          <article key={section.id} className="overflow-hidden rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.7)] shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={section.image}
                alt={section.imageAlt || section.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  {section.highlight || ""}
                </p>
                <h3 className="text-2xl font-bold text-[var(--text)]">{section.title}</h3>
                <p className="text-[var(--text)]/80 leading-relaxed">{section.description}</p>
              </div>

              {section.badges && section.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {section.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[rgb(var(--text-rgb)/0.1)] bg-[rgb(var(--bg-rgb)/0.6)] px-3 py-1 text-xs font-semibold text-[var(--text)]"
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
