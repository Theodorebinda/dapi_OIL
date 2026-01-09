"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/lib/theme-store";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-900 shadow-sm transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:bg-petrol-900 dark:text-gray-100 dark:hover:border-gold-400"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

