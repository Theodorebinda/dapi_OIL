"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { StorySection } from "@/lib/story-section.type";

export function SectionImageBlock({ activeSection }: { activeSection?: StorySection }) {
  if (!activeSection) return null;

  return (
    <div className="sticky" style={{ top: "25%" }}>
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSection.image}
              alt={activeSection.imageAlt || activeSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
              quality={70}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
