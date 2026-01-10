"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Headphones,
  Leaf,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import AboutImage from "@/../public/asset/images/distribution.jpg";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-petrol-950 dark:text-white ">
      <section className="relative overflow-hidden py-24 md:pt-32">
        <div className="relative z-10 mx-auto max-w-6xl md:px-6 px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="font-display text-3xl font-bold md:text-6xl">
              À propos de <br />{" "}
              <span className="text-brand-green text-3xl md:text-4xl">
                DAPI OIL SARL
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[var(--text)]">
              Nous sommes une entreprise congolaise de référence dans la
              fourniture, la logistique et la distribution de produits
              pétroliers. Nous sécurisons l’énergie qui soutient la croissance
              industrielle et économique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[520px]"
          >
            <Image
              src={AboutImage}
              alt="Logistique RDC"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100 py-10 md:py-20 dark:bg-petrol-900/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:px-6 px-3 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="mb-6 inline-block rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
              Notre mission
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Alimenter l&apos;avenir, <br />
              <span className="[var(--text-rgb)]">
                du fleuve aux frontières.
              </span>
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-[var(--text)]">
              <p>
                Dans un pays aux dimensions continentales, l’énergie est le
                moteur de l’économie. Notre mission est d’assurer
                l’approvisionnement ininterrompu en produits pétroliers pour les
                industries, les transports et les ménages, de Kinshasa aux
                provinces les plus reculées. ménages, de Kinshasa aux provinces
                les plus reculées.
              </p>
              <p>
                Nous ne nous contentons pas de transporter du carburant ; nous
                apportons la fiabilité nécessaire au fonctionnement des
                hôpitaux, des usines et des transports en commun.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-2xl font-bold text-brand-red">100%</h4>
                <p className="text-sm text-gray-500">Couverture nationale</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-brand-red">+5 ans</h4>
                <p className="text-sm text-gray-500">
                  D&apos;expérience terrain
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2"
          >
            <div className="relative z-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 via-brand-yellow/10 to-white/0 p-2 backdrop-blur-md">
              <Image
                src="https://img.freepik.com/photos-gratuite/pollution-exterieur-industrie-lumiere-du-jour_23-2149057676.jpg"
                alt="Mission Congo Energy Logistics"
                width={980}
                height={640}
                className="h-auto w-full rounded-xl object-cover shadow-2xl"
              />
            </div>
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl md:px-6 px-3">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl text-brand-green">
              Notre expertise
            </h2>
            <p className="mt-4 text-[var(--text)]">
              Une maîtrise technique et logistique adaptée aux défis uniques de
              la République Démocratique du Congo.
            </p>
          </div>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              title="Logistique terrestre & fluviale"
              description="Flotte hybride capable de naviguer le fleuve Congo et de traverser les routes complexes de l'intérieur."
              icon={Truck}
              colSpan="md:col-span-2"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Service client 24/7"
              description="Réactivité immédiate pour les industriels miniers nécessitant un flux tendu."
              icon={Headphones}
              colSpan="md:col-span-1"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Réseau de dépôts"
              description="Capacités de stockage stratégiques positionnées aux nœuds économiques clés (Matadi, Kinshasa, Lubumbashi)."
              icon={Warehouse}
              colSpan="md:col-span-1"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Qualité certifiée"
              description="Contrôle rigoureux en laboratoire de chaque litre importé et distribué. Normes internationales respectées."
              icon={ShieldCheck}
              colSpan="md:col-span-2"
              rowSpan="md:row-span-1"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 py-20 dark:border-white/5 dark:bg-petrol-900">
        <div className="mx-auto max-w-6xl md:px-6 px-3">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl text-brand-green">
              Nos valeurs fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Intégrité",
                icon: Award,
                text: "Transparence totale dans nos transactions et nos relations avec l'État.",
              },
              {
                title: "Sécurité (HSE)",
                icon: Users,
                text: "Zéro compromis sur la sécurité de nos équipes et des communautés.",
              },
              {
                title: "Innovation locale",
                icon: Leaf,
                text: "Adapter les technologies mondiales aux réalités du terrain congolais.",
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group rounded-2xl   d p-8 transition-all duration-300 hover:border-brand-red/50 hover:shadow-lg hover:shadow-brand-red/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-petrol-800 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-green">
                  {value.title}
                </h3>
                <p className="mt-3 text-[rgb(var(--text-rgb)/0.75)]">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-brand-gray" />
        <div className="relative z-10 mx-auto max-w-4xl md:px-6 px-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-petrol-800 to-petrol-900 p-12 text-center shadow-2xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl text-brand-green">
              Prêt à sécuriser votre approvisionnement ?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Rejoignez les plus grandes industries de RDC qui font confiance à
              DAPI OIL SARL.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-brand-red px-8 py-4 font-bold text-white transition-colors hover:bg-brand-coral shadow-lg shadow-brand-red/20">
                Devenir partenaire B2B
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5">
                Nous contacter <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
