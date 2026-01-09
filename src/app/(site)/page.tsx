"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Globe2, Truck } from "lucide-react";
import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { value: "15K+", label: "Barils / Jour" },
  { value: "24/7", label: "Service Continu" },
  { value: "12", label: "Provinces desservies" },
  { value: "100%", label: "Capital congolais" },
];

const activities = [
  {
    title: "Logistique & Transport",
    desc: "Flotte moderne de camions-citernes et de barges pour un approvisionnement sécurisé sur tout le territoire.",
    icon: Truck,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Stockage stratégique",
    desc: "Terminaux de haute capacité garantissant l'autonomie énergétique des régions clés.",
    icon: Droplet,
    img: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2109&auto=format&fit=crop",
  },
  {
    title: "Distribution commerciale",
    desc: "Réseau de stations premium et solutions B2B pour l'industrie minière.",
    icon: Globe2,
    img: "https://images.unsplash.com/photo-1625921764953-2947a1955b20?q=80&w=2072&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-0 bg-petrol-950 text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516937941348-c09e554b944c?q=80&w=2064&auto=format&fit=crop"
            alt="Industrie pétrolière"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-petrol-950/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gold-400 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Leader downstream en RDC
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
              L&apos;énergie au cœur <br />
              <span className="bg-gradient-to-r from-gold-400 to-amber-600 bg-clip-text text-transparent">
                du développement.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-200">
              Nous assurons la vitalité économique de la République Démocratique
              du Congo grâce à une logistique pétrolière robuste, innovante et
              responsable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-4 font-bold text-petrol-950 transition-all hover:bg-gold-400">
                Découvrir nos solutions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:bg-white/5">
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-petrol-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center md:text-left"
              >
                <h3 className="font-display text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gold-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-petrol-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
                Notre expertise
              </p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                De l&apos;importation à la distribution finale, une maîtrise
                intégrale de la chaîne de valeur.
              </h2>
              <p className="max-w-xl text-gray-400">
                Nous sécurisons chaque maillon pour garantir un
                approvisionnement continu des industries et des territoires.
              </p>
            </div>
            <button className="hidden items-center gap-2 text-gold-500 transition-colors hover:text-gold-400 md:flex">
              Voir toutes les activités <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative h-[440px] overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={activity.img}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/60 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-petrol-950">
                    <activity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-200 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {activity.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
