"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Droplet,
  Leaf,
  Shield,
  Users,
  Workflow,
} from "lucide-react";

const pillars = [
  {
    title: "Environnement",
    icon: Leaf,
    items: [
      "Réduction des émissions (optimisation flotte & carburants alternatifs)",
      "Prévention et réponse aux déversements, plans HSE sur chaque site",
      "Suivi qualité de l'eau et des sols, reporting transparent",
    ],
  },
  {
    title: "Social",
    icon: Users,
    items: [
      "Santé & sécurité : formations régulières, équipement certifié, audits",
      "Impact local : emplois, achats responsables, soutien aux communautés",
      "Dialogue parties prenantes : consultation continue des riverains",
    ],
  },
  {
    title: "Gouvernance",
    icon: Workflow,
    items: [
      "Éthique & transparence : conformité, lutte anti-corruption, traçabilité",
      "Reporting ESG aligné aux attentes réglementaires et investisseurs",
      "Pilotage des risques climatiques et plans de continuité",
    ],
  },
];

export default function RSEPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative overflow-hidden py-24 md:pt-32">
        <div className="absolute inset-0 bg-[rgb(var(--bg-rgb)/0.2)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
              RSE & Développement durable
            </p>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Une énergie responsable, pour le climat et les territoires.
            </h1>
            <p className="text-lg text-[rgb(var(--text-rgb)/0.75)]">
              Nous intégrons les enjeux environnementaux, sociaux et de
              gouvernance dans chaque opération pétrolière : réduction des
              impacts, transparence et engagement local pour une performance
              durable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-forest)]">
                Découvrir notre charte HSE
              </button>
              <span className="text-sm text-[rgb(var(--text-rgb)/0.75)]">
                Plans climat, sécurité des équipes et contribution aux
                communautés.
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.6)] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop"
              alt="Engagement RSE"
              fill
              className="object-cover"
              sizes="400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-rgb)/0.85)] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-[rgb(var(--text-rgb)/0.08)] bg-[rgb(var(--bg-rgb)/0.6)] p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
                <ul className="space-y-3 text-[rgb(var(--text-rgb)/0.8)]">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[rgb(var(--bg-rgb)/0.08)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                Prévention & contrôle
              </p>
              <h2 className="font-display text-3xl font-bold">
                Réduire les risques environnementaux
              </h2>
              <ul className="space-y-3 text-[rgb(var(--text-rgb)/0.8)]">
                <li className="flex gap-2">
                  <Droplet className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Procédures anti-déversement, kits d’intervention rapides sur
                    chaque site.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Shield className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Contrôles qualité carburant, monitoring pression/étanchéité,
                    audits HSE réguliers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Leaf className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Optimisation énergétique de la flotte, trajectoires basse
                    émission, maintenance prédictive.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                Social & éthique
              </p>
              <h2 className="font-display text-3xl font-bold">
                Sécurité, transparence, ancrage local
              </h2>
              <ul className="space-y-3 text-[rgb(var(--text-rgb)/0.8)]">
                <li className="flex gap-2">
                  <Users className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Formations sécurité, EPI certifiés, zero accident comme
                    objectif constant.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Workflow className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Transparence contractuelle, traçabilité des flux, lutte
                    anti-corruption.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-[var(--brand-green)]" />
                  <span>
                    Emplois locaux, soutien aux communautés riveraines, écoute
                    et concertation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
