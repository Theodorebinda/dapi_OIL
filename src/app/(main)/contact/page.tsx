"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    title: "Numéro de téléphone",
    value: "+243 81 000 0000",
    icon: Phone,
    href: "tel:+243810000000",
  },
  {
    title: "Adresse email",
    value: "contact@dapioil.cd",
    icon: Mail,
    href: "mailto:contact@dapioil.cd",
  },
  {
    title: "Notre localisation",
    value: "Blvd du 30 Juin, Kinshasa - Gombe, RDC",
    icon: MapPin,
    href: "https://maps.google.com/?q=Blvd+du+30+Juin,+Kinshasa",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] overflow-hidden ">
      <section className="relative flex min-h-[60vh] items-center">
        <Image
          src="https://img.freepik.com/photos-gratuite/personne-au-bureau-pendant-journee-travail_23-2150690164.jpg"
          alt="Logistique et énergie"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-petrol-950/75" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h3 className="mb-4 md:text-7xl  font-display  font-bold text-4xl  uppercase tracking-[0.1em] text-[var(--brand-green)]">
            Contact
          </h3>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="font-display  font-bold text-[var(--text)] ">
              24/7
            </span>
          </motion.span>
        </div>
      </section>

      {/* FORM + CONTACT */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className=" gap-16 px-6 flex lg:flex-row flex-col items-center  justify-between">
          {/* FORM */}
          <div className="rounded-3xl bg-[rgb(var(--bg-rgb)/0.75)]  w-4/7  p-8 ">
            <h2 className="font-display text-2xl font-bold">
              Envoyer un message
            </h2>
            <p className="mt-2 text-sm text-[rgb(var(--text-rgb)/0.7)]">
              Remplissez le formulaire, nous vous recontactons rapidement.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-[rgb(var(--text-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.8)] shadow-sm px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-0"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="vous@entreprise.com"
                    className="w-full rounded-xl border border-[rgb(var(--text-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.8)] shadow-sm px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+243…"
                    className="w-full rounded-xl border border-[rgb(var(--text-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.8)] shadow-sm px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-0"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="Objet de votre demande"
                  className="w-full rounded-xl border border-[rgb(var(--text-rgb)/0.12)] bg-[rgb(var(--bg-rgb)/0.8)] shadow-sm px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-0"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre besoin…"
                  className="w-full resize-none rounded-xl bg-[rgb(var(--bg-rgb)/0.8)] shadow-sm px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-green)] focus:ring-offset-0"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--brand-green)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-forest)]"
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          {/* CONTACT INFOS */}
          <div className="flex flex-col justify-center space-y-6 w-3/7">
            {contacts.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex h-40 px-6 flex-col items-center justify-center gap-3 rounded-2xl bg-[rgb(var(--bg-rgb)/0.85)] text-center shadow-md transition hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <item.icon className="h-10 w-10" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-sm font-semibold text-[rgb(var(--text-rgb)/0.7)]">
                    {item.title}
                  </p>
                  <p className="text-base font-bold text-[var(--text)]">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* Map pleine largeur */}
      <section className="py-0">
        <div className="h-[500px] w-full overflow-hidden">
          <iframe
            title="Localisation DAPI OIL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.804946214949!2d15.2663!3d-4.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33b19b286f31%3A0x6e8d4e271edffb62!2sBlvd%20du%2030%20Juin%2C%20Kinshasa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
