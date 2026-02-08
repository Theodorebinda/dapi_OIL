"use client";

import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Impossible d’enregistrer l’email.");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Top separator */}
      <div className="mx-auto max-w-full md:max-w-6xl md:px-6 px-3 pt-20">
        <div className="mb-16 border-t border-white/20" />
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-full md:max-w-6xl md:px-6 px-3 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand + Newsletter */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-wide">
              DAPI <span className="text-brand-red">OIL</span> SARL
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Acteur congolais de référence dans la fourniture, la logistique et
              la distribution de produits pétroliers. Nous sécurisons l’énergie
              qui soutient la croissance industrielle et économique.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">
                Rejoignez notre newsletter
              </p>
              <p className="text-xs text-white/70">
                Recevez nos actualités logistiques et offres directement par email.
              </p>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@entreprise.com"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/40"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-coral disabled:opacity-70"
                >
                  {status === "loading" ? "Envoi..." : "S’abonner"}
                </button>
              </form>
              {status === "error" && (
                <p className="text-xs font-semibold text-brand-red">
                  {error || "Erreur, merci de réessayer."}
                </p>
              )}
              {status === "success" && (
                <p className="text-xs font-semibold text-brand-green">
                  Merci, inscription enregistrée.
                </p>
              )}
            </div>
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
                <div className="flex flex-col">
                  <a href="tel:+243990615892" className="hover:underline">
                    +243 990 615 892
                  </a>
                  <a href="tel:+243850301852" className="hover:underline">
                    +243 850 301 852
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-red" />
                <a href="mailto:contact@dapioil.com" className="hover:underline">
                  contact@dapioil.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 ">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} DAPI OIL SARL — Tous droits réservés.
            Entreprise 100% congolaise.
          </p>

          <div className="flex gap-6">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white/60 transition hover:text-brand-red" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <XIcon className="h-5 w-5 text-white/60 transition hover:text-brand-red" />
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
