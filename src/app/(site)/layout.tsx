"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shards/Footer";

// import Header from "./components/header";
// import MobileHeader from "./components/MobileHeader";
// import FooterComponent from "./components/footer";
// import { ThemeSync } from "./components/ThemeSync";

export default function MainPublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-neutral-900 flex flex-col">
        <Navbar />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
