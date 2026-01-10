"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Map, Truck, Warehouse } from "lucide-react";

const highlights = [
  {
    title: "Logistique multimodale",
    desc: "Camions, barges et rail pour couvrir les corridors critiques du pays.",
    icon: Truck,
  },
  {
    title: "Stockage stratégique",
    desc: "Dépôts sécurisés avec supervision 24/7 et contrôles qualité continus.",
    icon: Warehouse,
  },
  {
    title: "Présence terrain",
    desc: "Une équipe locale sur chaque site pour opérer et coordonner les flux.",
    icon: Map,
  },
];

export default function ActivitesPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden py-24 md:pt-32">
        <div className="absolute inset-0 bg-[rgb(var(--bg-rgb)/0.2)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
              Nos activités
            </p>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Une chaîne logistique intégrée pour sécuriser l&#39;énergie.
            </h1>
            <p className="text-lg text-[rgb(var(--text-rgb)/0.75)]">
              De l&#39;importation au dernier kilomètre, DAPI OIL SARL orchestre
              le transport, le stockage et la distribution avec des équipes
              locales et des outils de suivi en temps réel.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-forest)]">
                Contacter un expert
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-sm text-[rgb(var(--text-rgb)/0.75)]">
                Livraison continue, 24/7, sur vos corridors critiques.
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.6)] shadow-lg">
            <Image
              src="/asset/images/distribution.jpg"
              alt="Opérations logistiques DAPI OIL"
              fill
              className="object-cover"
              sizes="400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-rgb)/0.8)] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.6)] p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[rgb(var(--text-rgb)/0.75)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
