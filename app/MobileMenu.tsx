"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const mobileNavigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5"
      >
        {isOpen ? (
          <X size={19} strokeWidth={1.8} />
        ) : (
          <Menu size={19} strokeWidth={1.8} />
        )}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 right-0 top-full z-[60] border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
          <div className="flex flex-col">
            {mobileNavigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between py-4 text-lg font-medium transition-opacity hover:opacity-60 ${
                  index !== mobileNavigation.length - 1
                    ? "border-b border-[var(--border)]"
                    : ""
                }`}
              >
                {item.label}

                {item.label === "Contact" && (
                  <ArrowUpRight size={19} strokeWidth={1.8} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}