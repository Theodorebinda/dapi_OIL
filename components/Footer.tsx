import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-petrol-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl text-white">
              CONGO<span className="text-gold-500">ENERGY</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leader de la logistique pétrolière en RDC. Nous alimentons le développement industriel et social de la nation avec intégrité et innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Accueil', 'À Propos', 'Nos Activités', 'Carrières', 'Espace Presse'].map((item) => (
                <li key={item} className="hover:text-gold-500 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Légal & RSE</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Mentions Légales', 'Politique de Confidentialité', 'Conformité EITI', 'Code de Conduite', 'Rapport Annuel'].map((item) => (
                <li key={item} className="hover:text-gold-500 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact Siège</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>Blvd du 30 Juin, Kinshasa - Gombe, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+243 81 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>contact@congoenergy.cd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Congo Energy Logistics. Tous droits réservés. Entreprise 100% Congolaise.
          </p>
          <div className="flex gap-4">
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;