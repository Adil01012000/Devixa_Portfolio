"use client";

import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal, StaggerContainer, staggerItem } from "@/components/motion/SectionReveal";

const perks = [
  { emoji: "⚡", title: "Fast Response", desc: "Get a response within 24 hours" },
  { emoji: "💰", title: "Free Estimate", desc: "No obligation project quote" },
  { emoji: "🎯", title: "Custom Solution", desc: "Tailored to your business needs" },
];

export const CallToAction = () => {
  return (
    <section id="quote" className="w-full py-space-3xl relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary-container/20 to-transparent blur-[140px] rounded-full -z-10"
        aria-hidden
      />
      <div className="canvas-padding">
        <SectionReveal>
          <div className="bg-gradient-to-b from-surface-container/90 via-surface-container-high/90 to-surface-container-low rounded-3xl p-space-xl md:p-space-3xl border border-primary/20 backdrop-blur-2xl text-center shadow-[0_20px_80px_rgba(183,109,255,0.15)]">
            <span className="section-kicker inline-block mb-space-sm">Not technology, solutions!</span>
            <h2 className="font-manrope text-3xl md:text-headline-lg text-white font-extrabold tracking-tight max-w-3xl mx-auto mb-space-md">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary text-transparent bg-clip-text">
                Business?
              </span>
            </h2>
            <p className="font-geist text-lg text-on-surface-variant max-w-2xl mx-auto mb-space-xl">
              Let&apos;s discuss your project and create a custom software solution that drives your
              business forward. Get a free consultation and project estimate today.
            </p>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-space-md max-w-3xl mx-auto mb-space-xl">
              {perks.map((p) => (
                <motion.div
                  key={p.title}
                  variants={staggerItem}
                  className="flex items-center gap-space-sm bg-surface-container-lowest/60 p-space-md rounded-xl text-left"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <div className="font-manrope text-sm text-on-surface font-semibold">{p.title}</div>
                    <p className="font-geist text-xs text-on-surface-variant">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-2xl">
              <motion.a
                href="mailto:sales.devixatech@gmail.com"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a href="#portfolio" id="portfolio" className="btn-glass">
                <Eye className="w-4 h-4" />
                <span>View Our Portfolio</span>
              </a>
            </div>

            <div className="max-w-md mx-auto pt-space-lg border-t border-outline-variant/20">
              <span className="font-geist text-xs text-on-surface-variant uppercase font-semibold block mb-space-sm text-left">
                Newsletter
              </span>
              <form
                className="flex items-center bg-surface-container-lowest rounded-full p-1.5 focus-within:ring-2 focus-within:ring-primary transition-all"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Devixa Technologies!");
                }}
              >
                <input
                  className="w-full bg-transparent px-space-md text-on-surface text-sm focus:outline-none placeholder:text-on-surface-variant/60"
                  placeholder="Enter Your Email Address"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-primary-container hover:bg-inverse-primary text-on-primary flex items-center justify-center shrink-0 transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-space-sm text-xs text-on-surface-variant">
                <input
                  className="rounded bg-surface-container text-primary focus:ring-0"
                  id="policy-cta"
                  required
                  type="checkbox"
                />
                <label htmlFor="policy-cta">
                  I agree to the <span className="text-primary underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
