"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { cn } from "@/components/lib/utils";

const items = [
  {
    question: "What types of custom software do you develop?",
    answer:
      "We develop comprehensive web platforms, bespoke desktop software, cloud-native SaaS systems, cross-platform mobile apps (iOS & Android), high-concurrency microservices, and specialized API integrations tailored to specific enterprise workflows.",
  },
  {
    question: "How long does a typical software development project take?",
    answer:
      "Timelines depend on scope and complexity. Agile MVP builds typically take 4 to 8 weeks, while full-scale enterprise systems range from 3 to 6 months. We work in rapid two-week sprints with transparent milestones.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer 24/7 SLA maintenance tiers covering security patching, cloud infrastructure monitoring, bug fixes, performance optimization, and regular feature updates.",
  },
  {
    question: "What technologies and frameworks do you use?",
    answer:
      "Our stack includes Next.js, React, Node.js, Python, TypeScript, Flutter, Swift, Kotlin, PostgreSQL, Redis, Docker, and AWS/GCP cloud environments, selected precisely to match scalability requirements.",
  },
  {
    question: "How do you ensure the security of our software?",
    answer:
      "Security is engineered from day zero with zero-trust architectural principles, OWASP Top 10 compliance audits, encrypted data-at-rest & in-transit, role-based access control (RBAC), and automated vulnerability scans.",
  },
  {
    question: "Can you work with our existing systems and integrate them?",
    answer:
      "Absolutely. We frequently modernize legacy codebases, architect seamless middleware layers, and build bi-directional API bridges between legacy databases and modern cloud microservices.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl glass-card transition-all duration-300 overflow-hidden",
        open && "shadow-glow-primary border-primary/30"
      )}
    >
      <button
        type="button"
        className="w-full p-space-lg flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-manrope text-headline-sm text-on-surface font-semibold pr-4">
          {question}
        </span>
        <span
          className={cn(
            "text-primary transition-transform duration-300 shrink-0",
            open && "rotate-45"
          )}
        >
          {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-space-lg pb-space-lg text-on-surface-variant font-geist leading-relaxed border-t border-outline-variant/10 pt-space-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const FAQs = () => {
  return (
    <section id="faq" className="w-full py-space-3xl bg-surface-container-lowest/60 relative">
      <div className="max-w-[860px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
        <SectionReveal className="text-center mb-space-2xl">
          <span className="section-kicker">Support & Answers</span>
          <h2 className="font-manrope text-3xl md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Frequently Asked Questions
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-space-sm">
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
