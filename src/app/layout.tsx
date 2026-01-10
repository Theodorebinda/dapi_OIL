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

export const metadata: Metadata = {
  title: {
    default: "DAPI OIL SARL",
    template: "%s | DAPI OIL SARL",
  },
  description:
    "Fourniture, logistique et distribution pétrolière en RDC : transport multimodal, stockage sécurisé, qualité et RSE.",
  metadataBase: new URL("https://dapioil.com"),
  alternates: {
    canonical: "https://dapioil.com",
  },
  keywords: [
    "logistique pétrolière",
    "transport carburant RDC",
    "stockage pétrolier",
    "distribution carburant",
    "RSE énergie",
  ],
  openGraph: {
    title: "DAPI OIL SARL",
    description:
      "Logistique et distribution pétrolière moderne : flotte multimodale, dépôts sécurisés, engagements RSE en RDC.",
    url: "https://dapioil.com",
    siteName: "DAPI OIL SARL",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://dapioil.com/asset/logo/2-removebg-preview.png",
        width: 512,
        height: 512,
        alt: "DAPI OIL SARL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAPI OIL SARL",
    description:
      "Logistique et distribution pétrolière moderne : flotte multimodale, dépôts sécurisés, engagements RSE en RDC.",
    images: ["https://dapioil.com/asset/logo/2-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/asset/logo/2-removebg-preview.png",
    shortcut: "/asset/logo/2-removebg-preview.png",
    apple: "/asset/logo/2-removebg-preview.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Fourniture, logistique et distribution pétrolière en RDC : transport multimodal, stockage sécurisé, qualité et engagements RSE."
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
