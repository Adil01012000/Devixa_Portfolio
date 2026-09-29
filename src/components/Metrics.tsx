"use client";

import { motion } from "framer-motion";
import { StaggerContainer, staggerItem } from "@/components/motion/SectionReveal";
import { BentoTilt } from "@/components/motion/BentoTilt";

const metrics = [
  {
    value: "50+",
    label: "Projects Delivered",
    description:
      "Successfully completed software projects across international ecosystems.",
    gradient: "from-primary to-primary-container",
  },
  {
    value: "25+",
    label: "Happy Clients",
    description:
      "Satisfied enterprise businesses and fast-moving technology startups worldwide.",
    gradient: "from-secondary to-primary",
  },
  {
    value: "5+",
    label: "Years Experience",
    description:
      "Continuous leadership in custom software engineering & digital execution.",
    gradient: "from-primary to-secondary-fixed",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description:
      "Verified satisfaction based on multi-phase project feedback and post-launch support.",
    gradient: "from-tertiary-fixed-dim to-primary",
  },
];

export const Metrics = () => {
  return (
    <section id="metrics" className="w-full py-space-xl bg-surface-container-lowest/50 relative">
      <div className="canvas-padding">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          {metrics.map((m) => (
            <motion.div key={m.label} variants={staggerItem}>
              <BentoTilt>
                <div className="group glass-card hover:bg-surface-container-high/70 transition-all duration-300 p-space-lg flex flex-col justify-between min-h-[220px] hover:shadow-glow-primary">
                  <div>
                    <span
                      className={`font-manrope text-4xl md:text-5xl lg:text-display-hero-mobile font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${m.gradient} leading-none inline-block`}
                    >
                      {m.value}
                    </span>
                    <div className="font-manrope text-headline-sm text-on-surface font-semibold mt-space-xs">
                      {m.label}
                    </div>
                  </div>
                  <p className="font-geist text-body-sm text-on-surface-variant mt-space-sm text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </BentoTilt>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
