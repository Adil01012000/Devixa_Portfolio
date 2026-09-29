"use client";

import {
  ArrowRight,
  Brain,
  ChevronRight,
  PlayCircle,
  Terminal,
  Verified,
} from "lucide-react";
import LogoImage from "@/assets/icons/logo1.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const partners = [
  { icon: "corporate", name: "ACME CORP" },
  { icon: "quantum", name: "QUANTUM" },
  { icon: "echo", name: "ECHO VALLEY" },
  { icon: "celestial", name: "CELESTIAL" },
  { icon: "pulse", name: "PULSE LABS" },
];

export const Hero = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const showcaseY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const showcaseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.98]);
  const showcaseRotate = useTransform(scrollYProgress, [0, 1], [4, -2]);

  return (
    <section className="relative w-full overflow-hidden pb-space-3xl pt-28 md:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-container/20 via-inverse-primary/10 to-transparent blur-[120px] rounded-full -z-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 w-[450px] h-[450px] bg-secondary-container/15 blur-[100px] rounded-full -z-10"
        aria-hidden
      />

      <div className="canvas-padding flex flex-col items-center text-center">
        <SectionReveal y={24}>
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/80 border border-primary/20 backdrop-blur-xl shadow-[0_0_25px_rgba(183,109,255,0.2)] mb-space-lg transition-transform hover:scale-105 duration-300">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-geist text-xs text-primary-fixed uppercase tracking-wider font-semibold">
              The New Standard in Digital Engineering & UI/UX
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-primary" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <h1 className="font-manrope text-display-hero-mobile md:text-display-hero text-transparent bg-clip-text bg-gradient-to-b from-white via-on-surface to-on-surface-variant max-w-4xl tracking-tight mb-space-md leading-none">
            Transforming ideas into{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary text-transparent bg-clip-text">
              powerful
            </span>{" "}
            digital solutions.
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.14}>
          <p className="font-geist text-lg text-on-surface-variant max-w-2xl mb-space-xl leading-relaxed">
            At Devixa Technologies, we specialize in custom software development,
            mobile applications, and UX/UI design that drive business success and
            deliver exceptional user experiences.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-2xl">
            <a href="#quote" className="btn-primary group">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-glass">
              <PlayCircle className="w-4 h-4" />
              <span>View Portfolio</span>
            </a>
          </div>
        </SectionReveal>

        <motion.div
          ref={showcaseRef}
          style={{ y: showcaseY, scale: showcaseScale, rotateX: showcaseRotate }}
          className="w-full relative max-w-5xl rounded-2xl bg-surface-container-lowest/80 p-space-xs md:p-space-sm shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl transform-gpu"
        >
          <div className="relative w-full rounded-xl bg-surface-container-low/90 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-space-md py-3 bg-surface-container/90 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/80" />
                <span className="w-3 h-3 rounded-full bg-secondary-fixed/50" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="font-geist text-sm text-on-surface-variant font-medium ml-3 flex items-center gap-1.5">
                  <LogoImage className="w-4 h-4" aria-hidden />
                  devixa-core-v4.9.kernel.ts — Production
                </span>
              </div>
              <div className="flex items-center gap-space-xs font-geist text-xs text-on-surface-variant bg-surface-container-lowest/60 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span>Live Cluster: 99.98% Healthy</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter p-space-md md:p-space-lg">
              <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container-lowest/90 rounded-lg p-space-md text-left font-mono text-xs">
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20 mb-space-sm">
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    Devixa.Engine.EngineConfig
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Architecture: Cloud-Native Microkernel
                  </span>
                </div>
                <pre className="text-on-surface space-y-1 overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-secondary-fixed">import</span>
                    {" { IntelligentRouter, QuantumCache } "}
                    <span className="text-secondary-fixed">from</span>
                    {" "}
                    <span className="text-primary-fixed">&apos;@devixa/core&apos;</span>;
                    {"\n\n"}
                    <span className="text-outline">/** Enterprise Microservices Mesh Config */</span>
                    {"\n"}
                    <span className="text-secondary-fixed">export const</span> enterpriseApp ={" "}
                    <span className="text-primary">new</span> IntelligentRouter({"{"}
                    {"\n"} throughput: <span className="text-tertiary">&quot;1.2M req/sec&quot;</span>,
                    {"\n"} securityMesh: <span className="text-tertiary">&quot;Zero-Trust Multi-region&quot;</span>,
                    {"\n"} latencyOptimization: <span className="text-tertiary">&quot;&lt; 14ms Global&quot;</span>,
                    {"\n"} autoScalingTier: <span className="text-secondary">&quot;Autonomous Elastic&quot;</span>,
                    {"\n"} status: <span className="text-primary font-bold">&quot;LIVE_PRODUCTION&quot;</span>
                    {"\n}"});
                    {"\n\n"}
                    <span className="text-outline">// System telemetry synchronizing with 25+ global nodes...</span>
                    {"\n"}
                    <span className="text-primary font-semibold">DevixaPipeline</span>.dispatch({"{"} latency:{" "}
                    <span className="text-primary">12.4</span>, uptime: <span className="text-primary">0.9998</span> {"}"});
                  </code>
                </pre>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 text-primary">
                    <Verified className="w-3.5 h-3.5" /> Validated Deployment
                  </span>
                  <span>Latency: 12.4ms</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-space-sm text-left">
                <div className="glass-card p-space-md flex flex-col relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-geist text-xs text-on-surface-variant uppercase font-semibold">
                      System Velocity
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      +312% Growth
                    </span>
                  </div>
                  <div className="font-manrope text-headline-sm text-on-surface font-bold">4.88 Gbps</div>
                  <p className="font-geist text-sm text-on-surface-variant mt-1">
                    Autonomous throughput across high-frequency load clusters.
                  </p>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-secondary to-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "84%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    />
                  </div>
                </div>

                <div className="glass-card p-space-md flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-manrope text-headline-sm text-on-surface font-semibold leading-tight">
                      AI & Mobile Ready
                    </div>
                    <p className="font-geist text-sm text-on-surface-variant">
                      Tailored modern stacks built for hyper-scale ventures.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-container/20 to-transparent p-space-md rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping" />
                    <span className="font-geist text-sm text-on-surface font-medium">
                      Enterprise SLA Status
                    </span>
                  </div>
                  <span className="font-geist text-sm text-primary font-bold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <SectionReveal delay={0.25} className="w-full mt-space-2xl">
          <p className="section-kicker mb-space-lg text-center">Trusted by world&apos;s most innovative teams</p>
          <div className="flex flex-wrap items-center justify-center gap-space-xl opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partners.map((p) => (
              <div
                key={p.name}
                className="font-manrope text-headline-sm text-on-surface-variant font-bold tracking-tighter"
              >
                {p.name}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
