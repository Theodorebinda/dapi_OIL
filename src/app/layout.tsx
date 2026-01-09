import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "DAPI OIL SARL",
  description: "Logistique et distribution pétrolière moderne par DAPI OIL SARL.",
  metadataBase: new URL("https://www.dapioil.cd"),
  icons: {
    icon: "/asset/logo/2-removebg-preview.png",
    shortcut: "/asset/logo/2-removebg-preview.png",
    apple: "/asset/logo/2-removebg-preview.png"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className="dark bg-white dark:bg-petrol-950">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-white text-slate-900 dark:bg-petrol-950 dark:text-slate-50`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

