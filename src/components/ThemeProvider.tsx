"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/lib/theme-store";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, _hasHydrated } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Attendre que le store soit réhydraté
  useEffect(() => {
    setMounted(true);
  }, []);

  // Appliquer le thème sauvegardé au chargement initial (avant réhydratation)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("dapi-oil-theme");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const savedTheme = parsed?.state?.theme;
        if (savedTheme) {
          const root = document.documentElement;
          if (savedTheme === "dark") {
            root.classList.add("dark");
          } else {
            root.classList.remove("dark");
          }
          root.setAttribute("data-theme", savedTheme);
        }
      } catch {
        // Ignorer les erreurs de parsing
      }
    }
  }, []);

  // Appliquer le thème quand il change dans le store (après réhydratation)
  useEffect(() => {
    if (!mounted || !_hasHydrated) return;

    const root = document.documentElement;
    const currentTheme = theme || "dark";

    if (currentTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.setAttribute("data-theme", currentTheme);
  }, [theme, mounted, _hasHydrated]);

  return <>{children}</>;
}

