"use client";

import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-6 py-24 text-[var(--text)]">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl   px-8 py-12 text-center ">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-red)]/10 text-[var(--brand-red)]">
          <Compass className="h-8 w-8" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-green)]">
          Page introuvable
        </p>
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          Oups, cette page n’existe pas
        </h1>
        <p className="max-w-2xl text-base text-[rgb(var(--text-rgb)/0.75)] md:text-lg">
          L’URL que vous avez saisie est incorrecte ou la page a été déplacée.
          Retournez à l’accueil ou contactez-nous si vous pensez qu’il s’agit
          d’une erreur.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-forest)]"
          >
            <Home className="h-4 w-4" />
            Retour à l’accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[rgb(var(--text-rgb)/0.15)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Contacter le support
          </Link>
        </div>
      </div>
    </div>
  );
}
