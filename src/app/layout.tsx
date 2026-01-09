import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Congo Energy Logistics",
  description: "Logistique pétrolière moderne en RDC.",
  metadataBase: new URL("https://www.congoenergy.cd")
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className="bg-petrol-950">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-petrol-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}

