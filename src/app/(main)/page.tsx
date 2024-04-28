"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Droplet, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import type { StatItem } from "@/lib/types";
import type { StorySection } from "@/lib/story-section.type";
import StickyVisualStory from "@/components/sticky/StickyVisualStory";
import HeaderImage from "@/../asset/images/portrait-femme.jpg";

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
  // {
  //   title: "Distribution commerciale",
  //   desc: "Réseau de stations premium et solutions B2B pour l'industrie minière.",
  //   icon: Globe2,
  //   img: "https://images.unsplash.com/photo-1625921764953-2947a1955b20?q=80&w=2072&auto=format&fit=crop",
  // },
];

const storySections: StorySection[] = [
  {
    id: "infra",
    title: "Infra pétrolière de confiance",
    description:
      "Réseau national de dépôts sécurisés et contrôles qualité continus pour garantir la disponibilité.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    badges: ["Audit HSE", "24/7 Monitoring"],
    stats: [
      { label: "Capacité stockage", value: "250k m³" },
      { label: "Taux dispo", value: "99.7%" },
    ],
    cta: { label: "Découvrir nos dépôts", href: "/about" },
    highlight: "Infrastructure",
  },
  {
    id: "flotte",
    title: "Flotte multimodale prête",
    description:
      "Camions, barges et rail pour sécuriser les flux en zones complexes, avec maintenance prédictive.",
    image:
      "https://img.freepik.com/photos-premium/vue-interne-site-industriel_100488-1104.jpg",
    badges: ["Track & trace", "Maintenance IA"],
    steps: [
      "Planification dynamique des tournées",
      "Suivi temps réel des températures",
      "Protocoles d'escalade incidents",
    ],
    stats: [{ label: "Livraisons/an", value: "18k" }],
    cta: { label: "Consulter nos flux", href: "/contact" },
    highlight: "Opérations",
  },
  {
    id: "rse",
    title: "Engagement RSE terrain",
    description:
      "Programmes santé, sécurité et communautés locales intégrés à chaque corridor logistique.",
    image:
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2109&auto=format&fit=crop",
    badges: ["Communautés", "Sécurité"],
    stats: [
      { label: "Sessions HSE", value: "+300/an" },
      { label: "Projets locaux", value: "42" },
    ],
    cta: { label: "Voir nos actions", href: "/about" },
    highlight: "RSE",
  },
];

export default function HomePage() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0 bg-white text-slate-900 dark:bg-petrol-950 dark:text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden  md:pt-0">
        <div className="absolute inset-0">
          <Image
            src={HeaderImage}
            alt="Industrie pétrolière"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 100vw"
            quality={70}
          />
          <div className="absolute inset-0 bg-white/70 dark:bg-petrol-950/75" />
        </div>

        <div className="relative z-10   w-full  pt-6">
          <div className="w-full mx-auto max-w-6xl md:px-6 px-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-7xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/70  py-1 px-2 text-sm font-medium text-brand-green backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                Leader downstream en RDC
              </div>
              <h1 className="font-display text-3xl font-extrabold leading-tight md:text-7xl">
                Votre <br />
                Partenaire fiable en <br />
                <span className="bg-gradient-to-r from-brand-green via-brand-forest to-brand-green bg-clip-text text-transparent">
                  approvisionnement.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl md:text-xl text-base leading-relaxed text-[var(--text)]">
                De la fourniture à la livraison, nous assurons un
                approvisionnement pétrolier continu et fiable pour soutenir vos
                opérations.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection("sticky-story")}
                  className="group flex items-center justify-center gap-2 rounded-lg bg-brand-green px-8 py-4 font-bold text-white transition-all hover:bg-brand-forest"
                >
                  Découvrir nos solutions
                  <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="rounded-lg border border-[var(--text)]/20 px-8 py-4 font-semibold text-[var(--text)] transition-all hover:bg-[var(--text)]/5"
                >
                  Contactez-nous
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[rgb(var(--bg-rgb)/0.95)] py-20">
        <div className="mx-auto max-w-6xl md:px-6 px-3">
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
                <h3 className="font-display text-4xl font-bold text-[var(--text)] md:text-5xl">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[var(--brand-green)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[rgb(var(--bg-rgb)/0.9)] py-24">
        <div className="mx-auto max-w-6xl md:px-6 px-3  ">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                Notre expertise
              </p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                De l&apos;importation à la distribution finale, une maîtrise
                intégrale de la chaîne de valeur.
              </h2>
              <p className="max-w-xl text-[var(--text)]">
                Nous sécurisons chaque maillon pour garantir un
                approvisionnement continu des industries et des territoires.
              </p>
            </div>
            {/* <button className="hidden items-center gap-2 text-[var(--brand-red)] transition-colors hover:text-[var(--brand-coral)] md:flex">
              Voir toutes les activités <ArrowRight className="h-4 w-4" />
            </button> */}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgb(var(--bg-rgb)/0.6)] to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--brand-red)] text-white">
                    <activity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text)] opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {activity.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <div id="sticky-story" className="scroll-m-24">
        <StickyVisualStory sections={storySections} />
      </div>
    </div>
  );
}
