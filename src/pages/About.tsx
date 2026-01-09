import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Warehouse,
  Headphones,
  Award,
  Users,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { FeatureCard } from "../components/ui/FeatureCard";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-petrol-950 text-white pt-20">
      {/* 1. Hero Section "À Propos" */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Abstract grid pattern simulation */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Moteur du développement{" "}
              <span className="text-gold-500">congolais</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Une expertise locale pour une distribution sans faille à travers
              la RDC. Nous transformons les défis logistiques en opportunités de
              croissance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1548695607-9c73430ba065?q=80&w=2868&auto=format&fit=crop"
              alt="Logistique RDC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 2. Section "Notre Mission" (Layout Asymétrique) */}
      <section className="py-20 md:py-32 bg-petrol-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-6">
                Notre Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                Alimenter l'avenir, <br />
                <span className="text-gray-400">du fleuve aux frontières.</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Dans un pays aux dimensions continentales, l'énergie est le
                  sang qui irrigue l'économie. Notre mission est d'assurer
                  l'approvisionnement ininterrompu des industries minières, des
                  infrastructures publiques et des ménages, de Kinshasa aux
                  provinces les plus reculées.
                </p>
                <p>
                  Nous ne nous contentons pas de transporter du carburant ; nous
                  apportons la fiabilité nécessaire au fonctionnement des
                  hôpitaux, des usines et des transports en commun.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-gold-500 font-bold text-2xl">100%</h4>
                  <p className="text-sm text-gray-400">Couverture Nationale</p>
                </div>
                <div>
                  <h4 className="text-gold-500 font-bold text-2xl">+20 Ans</h4>
                  <p className="text-sm text-gray-400">D'expérience terrain</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              {/* Glassmorphism Abstract visual */}
              <div className="relative z-10 p-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1628135893699-5285223e74c8?q=80&w=2670&auto=format&fit=crop"
                  alt="Mission"
                  className="rounded-xl w-full h-auto shadow-2xl"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Section "Notre Expertise" (Bento Grid) */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Notre Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une maîtrise technique et logistique adaptée aux défis uniques de
              la République Démocratique du Congo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
            <FeatureCard
              title="Logistique Terrestre & Fluviale"
              description="Une flotte hybride capable de naviguer le fleuve Congo et de traverser les routes complexes de l'intérieur."
              icon={Truck}
              colSpan="md:col-span-2"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Service Client 24/7"
              description="Une réactivité immédiate pour les industriels miniers nécessitant un flux tendu."
              icon={Headphones}
              colSpan="md:col-span-1"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Réseau de Dépôts"
              description="Des capacités de stockage stratégiques positionnées aux nœuds économiques clés (Matadi, Kinshasa, Lubumbashi)."
              icon={Warehouse}
              colSpan="md:col-span-1"
              rowSpan="md:row-span-1"
            />

            <FeatureCard
              title="Qualité Certifiée"
              description="Contrôle rigoureux en laboratoire de chaque litre importé et distribué. Normes internationales respectées."
              icon={ShieldCheck}
              colSpan="md:col-span-2"
              rowSpan="md:row-span-1"
            />
          </div>
        </div>
      </section>

      {/* 4. Section "Les Valeurs" (Cartes Interactives) */}
      <section className="py-20 bg-petrol-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nos Valeurs Fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intégrité",
                icon: Award,
                text: "La transparence totale dans nos transactions commerciales et nos relations avec l'État.",
              },
              {
                title: "Sécurité (HSE)",
                icon: Users,
                text: "Zéro compromis sur la sécurité de nos employés et des communautés que nous traversons.",
              },
              {
                title: "Innovation Locale",
                icon: Leaf,
                text: "Adapter les technologies mondiales aux réalités du terrain congolais.",
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group p-8 rounded-2xl bg-petrol-950 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
              >
                <div className="w-14 h-14 bg-petrol-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                  <val.icon className="w-7 h-7 text-gold-500 group-hover:text-petrol-950 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-400">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-600/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-petrol-800 to-petrol-900 border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Prêt à sécuriser votre approvisionnement ?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Rejoignez les plus grandes industries de RDC qui font confiance à
              Congo Energy Logistics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-petrol-950 font-bold rounded-lg transition-all shadow-lg shadow-gold-500/20">
                Devenir Partenaire B2B
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                Nous Contacter <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
