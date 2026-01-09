import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe2, Truck, Droplet } from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Barils / Jour' },
  { value: '24/7', label: 'Service Continu' },
  { value: '12', label: 'Provinces Desservies' },
  { value: '100%', label: 'Capital Congolais' },
];

const activities = [
  {
    title: 'Logistique & Transport',
    desc: 'Une flotte moderne de camions-citernes et de barges pour un approvisionnement sécurisé sur tout le territoire.',
    icon: Truck,
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Stockage Stratégique',
    desc: 'Des terminaux de haute capacité garantissant l\'autonomie énergétique des régions clés.',
    icon: Droplet,
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2109&auto=format&fit=crop'
  },
  {
    title: 'Distribution Commerciale',
    desc: 'Un réseau de stations-services premium et des solutions B2B pour l\'industrie minière.',
    icon: Globe2,
    img: 'https://images.unsplash.com/photo-1625921764953-2947a1955b20?q=80&w=2072&auto=format&fit=crop'
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-petrol-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-petrol-950/70 z-10" />
            <img 
                src="https://images.unsplash.com/photo-1516937941348-c09e554b944c?q=80&w=2064&auto=format&fit=crop" 
                alt="Refinery Industry" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 text-gold-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Leader Downstream en RDC
            </div>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight mb-8">
              L'Énergie au cœur <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">
                du développement.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Nous assurons la vitalité économique de la République Démocratique du Congo grâce à une logistique pétrolière robuste, innovante et responsable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-petrol-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
                Découvrir nos solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-lg font-semibold transition-all">
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-petrol-900 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gold-500 font-medium tracking-wide text-sm uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-petrol-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Notre Expertise</h2>
              <p className="text-gray-400 max-w-lg">De l'importation à la distribution finale, nous maîtrisons chaque maillon de la chaîne de valeur.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-400 transition-colors mt-6 md:mt-0">
              Voir toutes les activités <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-950 via-petrol-950/50 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity" />
                <img 
                  src={activity.img} 
                  alt={activity.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-6 text-petrol-950">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{activity.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {activity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;