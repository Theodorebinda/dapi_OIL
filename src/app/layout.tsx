import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DAPI OIL SARL",
  url: "https://dapioil.com",
  logo: "https://dapioil.com/asset/logo/2-removebg-preview.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+243990615892",
      contactType: "customer service",
      email: "contact@dapioil.com",
      areaServed: "CD",
      availableLanguage: ["fr", "en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+243850301852",
      contactType: "customer service",
      areaServed: "CD",
      availableLanguage: ["fr", "en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "156 Boulevard du 30 Juin",
    postalCode: "BP 1609",
    addressLocality: "Kinshasa",
    addressRegion: "Kinshasa",
    addressCountry: "CD",
  },
  taxID: "A1502520 G",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Registration.No",
      value: "CD/KIN/RCCM/14-B-5707",
    },
    { "@type": "PropertyValue", propertyID: "ID.NAT", value: "01-95-N91957H" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Fourniture, logistique et distribution pétrolière en RDC : transport multimodal, stockage sécurisé, qualité et engagements RSE."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
