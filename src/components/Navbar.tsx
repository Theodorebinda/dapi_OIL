"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/types";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import logo from "@/../asset/logo/2-removebg-preview.png";

const navLinks: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Activités", href: "/activites" },
  { label: "RSE", href: "/rse" },
  { label: "Carrières", href: "/carrieres" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-white/10 shadow-lg shadow-petrol-900/40"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-11 w-11 relative">
            <Image
              src={logo}
              alt="DAPI OIL SARL"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-[var(--text)]">
              DAPI <span className="text-brand-green">OIL</span>
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[4px] w-4 bg-gray-400" aria-hidden />
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-brand-green">
                SARL
              </span>
              <div className="h-[4px] w-4 bg-gray-400" aria-hidden />
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-[var(--brand-red)]"
                    : "text-[color:rgba(255,255,255,0.78)] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--brand-red)] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <ThemeToggle />
          <button className="rounded-lg bg-[var(--brand-red)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-coral)]">
            Espace Client
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden"
          >
            <div className="space-y-4 border-t border-white/10 bg-[var(--bg)]/95 px-6 py-5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium ${
                    pathname === link.href
                      ? "text-[var(--brand-red)]"
                      : "text-[color:rgba(255,255,255,0.82)] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
              <button className="w-full rounded-lg bg-[var(--brand-red)] px-5 py-3 font-bold text-white hover:bg-[var(--brand-coral)] transition">
                Espace Client
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
