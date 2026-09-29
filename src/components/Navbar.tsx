"use client";

import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import LogoImage from "@/assets/icons/logo1.svg";
import { cn } from "@/components/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#metrics", label: "Metrics" },
  { href: "#values", label: "Values" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "backdrop-blur-md bg-surface/40"
      )}
    >
      <div className="h-20 canvas-padding flex items-center justify-between gap-space-md">
        <a href="#" className="flex items-center gap-space-sm shrink-0">
          <LogoImage className="h-8 w-8" aria-hidden />
          <span className="font-manrope text-headline-sm font-semibold tracking-tight text-on-surface hidden sm:inline">
            Devixa Technologies
          </span>
        </a>

        <div className="hidden lg:flex items-center glass-nav px-space-md py-space-xs rounded-full">
          <nav className="flex items-center gap-space-xs">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-space-md py-space-xs rounded-full font-geist text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-sm">
          <a href="#quote" className="btn-primary hidden sm:inline-flex text-sm py-2.5">
            Get Free Quote
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
            <User className="w-4 h-4 text-on-primary" />
          </div>
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full glass-nav flex items-center justify-center"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-on-surface" />
            ) : (
              <Menu className="w-5 h-5 text-on-surface" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-surface-container-low/95 backdrop-blur-2xl"
          >
            <nav className="canvas-padding py-space-md flex flex-col gap-space-xs">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-space-md py-space-sm rounded-xl font-geist text-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
                >
                  {link.label}
                </a>
              ))}
              <a href="#quote" className="btn-primary mt-space-sm justify-center" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
