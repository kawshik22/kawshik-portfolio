"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");

      setDarkMode(false);
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");

      setDarkMode(true);

      localStorage.setItem("theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");

      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-20 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
    >
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <Moon
          size={18}
          strokeWidth={1.7}
          className={`absolute transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
            darkMode
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-50 opacity-0"
          }`}
        />

        <Sun
          size={18}
          strokeWidth={1.7}
          className={`absolute transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
            darkMode
              ? "-rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </span>
    </button>
  );
}