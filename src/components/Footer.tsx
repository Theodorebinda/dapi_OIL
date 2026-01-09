import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-petrol-950 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">
              CONGO<span className="text-gold-500">ENERGY</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Leader de la logistique pétrolière en RDC. Nous alimentons le
              développement industriel et social avec intégrité et innovation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 text-lg font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Accueil", "À propos", "Nos activités", "Carrières", "Espace presse"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer transition-colors hover:text-gold-500"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 text-lg font-semibold">
              Légal & RSE
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Mentions légales",
                "Politique de confidentialité",
                "Conformité EITI",
                "Code de conduite",
                "Rapport annuel"
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors hover:text-gold-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 text-lg font-semibold">
              Contact siège
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
                <span>Blvd du 30 Juin, Kinshasa - Gombe, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-500" />
                <span>+243 81 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold-500" />
                <span>contact@congoenergy.cd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Congo Energy Logistics. Tous droits
            réservés. Entreprise 100% congolaise.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
            </Link>
            <Link href="https://x.com" aria-label="Twitter">
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

