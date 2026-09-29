"use client";

import { Clock, Headphones, Users, Verified } from "lucide-react";
import { motion } from "framer-motion";
import { SectionReveal, StaggerContainer, staggerItem } from "@/components/motion/SectionReveal";
import { BentoTilt } from "@/components/motion/BentoTilt";

function GrowthChart() {
  return (
    <div className="relative w-full h-56 bg-surface-container-lowest/80 rounded-xl p-space-md flex flex-col justify-between overflow-hidden">
      <div className="flex justify-between text-[11px] text-on-surface-variant font-mono border-b border-outline-variant/15 pb-1">
        {["70%", "75%", "80%", "85%", "90%", "95%", "100%"].map((l, i) => (
          <span key={l} className={i === 6 ? "text-primary font-bold" : undefined}>
            {l}
          </span>
        ))}
      </div>
      <svg className="w-full h-32 overflow-visible" viewBox="0 0 600 160" aria-hidden>
        <defs>
          <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b76dff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3131c0" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" width="140%" height="140%" x="-20%" y="-20%">
            <feGaussianBlur result="blur" stdDeviation="3" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 0 130 Q 80 110, 150 90 T 300 70 T 450 40 T 600 15 L 600 160 L 0 160 Z"
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M 0 130 Q 80 110, 150 90 T 300 70 T 450 40 T 600 15"
          fill="none"
          filter="url(#glow)"
          stroke="#ddb7ff"
          strokeWidth="3.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {[
          [150, 90],
          [300, 70],
          [450, 40],
          [600, 15],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={i === 3 ? 5 : 4}
            fill="#ffffff"
            stroke="#b76dff"
            strokeWidth={i === 3 ? 3 : 2}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
          />
        ))}
      </svg>
      <div className="flex items-center justify-between text-xs text-on-surface-variant font-mono pt-2 border-t border-outline-variant/15">
        <span>Phase 1: Architecture</span>
        <span>Phase 2: Deployment</span>
        <span className="text-primary font-bold">Phase 3: Hyper-Scale</span>
      </div>
    </div>
  );
}

function SideCard({
  icon: Icon,
  iconWrap,
  title,
  description,
  foot,
  footIcon: FootIcon,
  footClass,
  badges,
}: {
  icon: typeof Users;
  iconWrap: string;
  title: string;
  description: string;
  foot: string;
  footIcon: typeof Verified;
  footClass: string;
  badges: string[];
}) {
  return (
    <BentoTilt>
      <div className="glass-card hover:bg-surface-container-high transition-all duration-300 p-space-xl flex flex-col justify-between min-h-[240px] hover:shadow-glow-primary">
        <div>
          <div className="flex items-center gap-space-sm mb-space-md">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconWrap}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="w-7 h-7 rounded-full bg-surface-container-high border border-primary/30 flex items-center justify-center text-xs font-bold text-on-surface"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <h3 className="font-manrope text-headline-sm text-on-surface font-bold mb-space-xs">
            {title}
          </h3>
          <p className="font-geist text-on-surface-variant leading-relaxed">{description}</p>
        </div>
        <div
          className={`mt-space-md pt-space-sm border-t border-outline-variant/15 font-geist text-xs font-semibold flex items-center gap-1 ${footClass}`}
        >
          <FootIcon className="w-4 h-4" />
          <span>{foot}</span>
        </div>
      </div>
    </BentoTilt>
  );
}

export const Features = () => {
  return (
    <section id="features" className="w-full py-space-3xl relative overflow-hidden">
      <div className="canvas-padding">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="section-kicker">Why Choose Us</span>
          <h2 className="font-manrope text-3xl md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Why Choose <span className="text-primary">Devixa Technologies</span>
          </h2>
          <p className="font-geist text-on-surface-variant mt-space-sm">
            We combine cutting-edge technology with innovative design to deliver software solutions
            that exceed expectations and drive measurable business results.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <motion.div variants={staggerItem} className="lg:col-span-7">
            <BentoTilt>
              <div className="glass-card p-space-xl flex flex-col justify-between backdrop-blur-xl min-h-full hover:shadow-glow-primary">
                <div>
                  <div className="flex items-center justify-between mb-space-md flex-wrap gap-2">
                    <div>
                      <span className="font-geist text-xs text-on-surface-variant uppercase font-semibold">
                        Client Success Metrics
                      </span>
                      <div className="font-manrope text-headline-sm text-on-surface font-bold">
                        Proven Results
                      </div>
                    </div>
                    <span className="px-space-md py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                      Average Growth +300%
                    </span>
                  </div>
                  <p className="font-geist text-sm text-on-surface-variant mb-space-lg">
                    Our custom software solutions have helped businesses achieve 300% average growth
                    in efficiency and productivity. We deliver measurable ROI through innovative
                    technology.
                  </p>
                </div>
                <GrowthChart />
              </div>
            </BentoTilt>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-5 flex flex-col gap-gutter">
            <SideCard
              icon={Users}
              iconWrap="bg-primary-container/20 text-primary"
              title="Expert Team"
              description="Our experienced developers and designers work with cutting-edge technologies to build scalable, secure, and user-friendly applications that exceed expectations."
              foot="Top 3% Technical Talent"
              footIcon={Verified}
              footClass="text-primary"
              badges={["a", "⌘", "7"]}
            />
            <SideCard
              icon={Headphones}
              iconWrap="bg-secondary-container/20 text-secondary"
              title="24/7 Support"
              description="Round-the-clock technical support and maintenance to ensure your software runs smoothly and your business never stops growing."
              foot="Global Sub-Hour SLA Response"
              footIcon={Clock}
              footClass="text-secondary"
              badges={["a", "⌘", "7"]}
            />
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
};
