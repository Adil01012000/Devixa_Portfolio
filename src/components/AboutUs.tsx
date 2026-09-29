"use client";

import { BookOpen, ChevronRight, Verified } from "lucide-react";
import { SectionReveal, StaggerContainer, staggerItem } from "@/components/motion/SectionReveal";
import { motion } from "framer-motion";
import { BentoTilt } from "@/components/motion/BentoTilt";

const values = [
  {
    emoji: "🎯",
    title: "Excellence",
    description:
      "We strive for perfection in every project, delivering solutions that exceed expectations and drive measurable results.",
    foot: "Rigorous QA & Clean Architecture",
  },
  {
    emoji: "🤝",
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring transparent communication and shared long-term success.",
    foot: "Direct Access to Engineering Leads",
  },
  {
    emoji: "💡",
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative approaches to solve complex, high-stakes business challenges.",
    foot: "Continuous R&D Integration",
  },
];

export const AboutUs = () => {
  return (
    <section id="about" className="w-full py-space-3xl relative">
      <div className="canvas-padding">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-container/20 text-primary font-geist text-xs uppercase font-semibold mb-space-sm">
            Identity & Philosophy
          </div>
          <h2 className="font-manrope text-3xl md:text-headline-lg text-on-surface tracking-tight">
            About <span className="text-primary font-extrabold">Devixa Technologies</span>
          </h2>
          <p className="font-geist text-lg text-on-surface-variant mt-space-sm">
            We are a passionate team of developers, designers, and innovators dedicated to
            transforming your ideas into powerful digital solutions that drive business success.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-gutter">
          <motion.div variants={staggerItem} className="lg:col-span-7">
            <BentoTilt>
              <div className="glass-card hover:bg-surface-container-high/60 transition-all duration-300 p-space-xl flex flex-col justify-between min-h-full group hover:shadow-glow-primary">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary mb-space-md">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="font-manrope text-headline-md text-on-surface font-semibold mb-space-sm">
                    Our Story
                  </h3>
                  <p className="font-geist text-on-surface-variant leading-relaxed mb-space-md">
                    Devixa Technologies was born from a simple yet powerful belief: every business
                    deserves access to world-class software solutions that can transform their
                    operations and drive growth.
                  </p>
                  <p className="font-geist text-on-surface-variant leading-relaxed">
                    What started as a small team of passionate developers has grown into a
                    full-service software development agency, serving clients from startups to
                    enterprise-level organizations. We combine technical expertise with business
                    acumen, ensuring every build delivers measurable business value.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 flex items-center gap-space-sm text-on-surface font-geist text-sm font-semibold">
                  <Verified className="w-4 h-4 text-primary" />
                  <span>Bridging cutting-edge technology and business performance.</span>
                </div>
              </div>
            </BentoTilt>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-5">
            <BentoTilt>
              <div className="bg-gradient-to-br from-primary-container/40 via-inverse-primary/30 to-surface-container rounded-2xl p-space-xl backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden min-h-full shadow-[0_0_50px_rgba(183,109,255,0.2)]">
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-primary/20 blur-3xl rounded-full" aria-hidden />
                <div className="relative z-10">
                  <div className="text-4xl mb-space-md">🚀</div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/30 text-primary-fixed text-xs font-bold uppercase tracking-wider mb-space-sm">
                    Devixa Principle
                  </div>
                  <h3 className="font-manrope text-headline-md text-white font-bold mb-space-xs">
                    Innovation First
                  </h3>
                  <p className="font-manrope text-headline-sm text-primary-fixed font-medium">
                    Building the future, one line of code at a time.
                  </p>
                  <p className="font-geist text-sm text-on-surface-variant mt-space-md leading-relaxed">
                    We never settle for legacy constraints. We engineer with tomorrow&apos;s
                    architectural standards today.
                  </p>
                </div>
                <div className="mt-space-lg bg-surface-container-lowest/80 rounded-xl p-space-sm text-xs font-mono text-primary-fixed leading-tight border border-primary/20 relative z-10">
                  <code>
                    &gt; git commit -m &quot;feat(quantum): scale globally&quot;
                    <br />
                    <span className="text-secondary font-semibold">
                      &gt; Deploying to edge workers... Done [28ms]
                    </span>
                  </code>
                </div>
              </div>
            </BentoTilt>
          </motion.div>

          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="lg:col-span-4"
              id={i === 0 ? "values" : undefined}
            >
              <BentoTilt>
                <div className="glass-card hover:bg-surface-container-high/60 transition-all duration-300 p-space-lg flex flex-col justify-between min-h-[240px] h-full hover:shadow-glow-primary">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-3xl mb-space-md">
                      {v.emoji}
                    </div>
                    <h4 className="font-manrope text-headline-sm text-on-surface font-semibold mb-space-xs">
                      {v.title}
                    </h4>
                    <p className="font-geist text-on-surface-variant leading-relaxed">{v.description}</p>
                  </div>
                  <div className="font-geist text-xs text-primary font-semibold flex items-center gap-1 mt-space-md">
                    <span>{v.foot}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </BentoTilt>
            </motion.div>
          ))}

          <motion.div variants={staggerItem} className="lg:col-span-12">
            <div className="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container rounded-2xl p-space-xl text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto relative z-10">
                <span className="section-kicker block mb-space-xs">Our Mission</span>
                <p className="font-manrope text-xl md:text-headline-md text-on-surface font-medium italic leading-relaxed">
                  &ldquo;To empower businesses with innovative software solutions that drive growth,
                  enhance efficiency, and create lasting competitive advantages in the digital
                  landscape.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
};
