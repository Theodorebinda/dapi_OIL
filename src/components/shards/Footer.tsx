import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top separator */}
      <div className="mx-auto max-w-full md:max-w-6xl md:px-6 px-3 pt-20">
        <div className="mb-16 border-t border-white/20" />
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-full md:max-w-6xl md:px-6 px-3 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-wide">
              DAPI <span className="text-brand-red">OIL</span> SARL
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Acteur congolais de référence dans la fourniture, la logistique et
              la distribution de produits pétroliers. Nous sécurisons l’énergie
              qui soutient la croissance industrielle et économique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Accueil",
                "À propos",
                "Nos activités",
                "Carrières",
                "Presse",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors hover:text-brand-red"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gouvernance */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Gouvernance
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Mentions légales",
                "Politique de confidentialité",
                "Conformité & Éthique",
                "Code de conduite",
                "Rapports annuels",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors hover:text-brand-red"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-red" />
                <span>
                  DAPI OIL SARL – BP 1609 Kinshasa 1 Gombe, 156 Boulevard du 30
                  Juin, Kinshasa, RDC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-red" />
                <span>
                  +243 990 615 892 <br /> +243 850 301 852
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-red" />
                <span>contact@dapioil.cd</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} DAPI OIL SARL — Tous droits réservés.
            Entreprise 100% congolaise.
          </p>

          <div className="flex gap-6">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white/60 transition hover:text-brand-red" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-white/60 transition hover:text-brand-red" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-white/60 transition hover:text-brand-red" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
