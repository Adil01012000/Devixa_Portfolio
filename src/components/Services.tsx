"use client";

import {
  ArrowRight,
  Building2,
  Calendar,
  Laptop,
  Palette,
  Smartphone,
} from "lucide-react";
import { SectionReveal, StaggerContainer, staggerItem } from "@/components/motion/SectionReveal";
import { motion } from "framer-motion";
import { BentoTilt } from "@/components/motion/BentoTilt";
import type { LucideIcon } from "lucide-react";

type Service = {
  num: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkClass: string;
  icon: LucideIcon;
  iconWrap: string;
  iconColor: string;
};

const services: Service[] = [
  {
    num: "01 / ARCHITECTURE",
    category: "architecture",
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from scratch to meet your unique business requirements. We create scalable, secure, and efficient applications that drive your business forward.",
    tags: ["Web Applications", "Desktop Software", "API Development", "Database Design"],
    link: "Request Architecture Review",
    linkClass: "text-primary",
    icon: Laptop,
    iconWrap: "bg-primary-container/20 text-primary",
    iconColor: "text-primary",
  },
  {
    num: "02 / MOBILITY",
    category: "mobility",
    title: "Mobile Application Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, we build apps that users love and businesses rely on.",
    tags: ["iOS Apps", "Android Apps", "React Native", "Flutter", "Custom Mobile Apps"],
    link: "Explore Mobile Capabilities",
    linkClass: "text-secondary",
    icon: Smartphone,
    iconWrap: "bg-secondary-container/20 text-secondary",
    iconColor: "text-secondary",
  },
  {
    num: "03 / PRODUCT EXPERIENCE",
    category: "design",
    title: "UX/UI Design",
    description:
      "User-centered design that combines beautiful aesthetics with intuitive functionality. We create interfaces that not only look stunning but also provide seamless user experiences.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    link: "View Design Gallery",
    linkClass: "text-tertiary",
    icon: Palette,
    iconWrap: "bg-tertiary-container/20 text-tertiary",
    iconColor: "text-tertiary",
  },
  {
    num: "04 / ENTERPRISE",
    category: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Comprehensive enterprise-grade solutions that integrate seamlessly with your existing systems. Built for scale, security, compliance, and sustained computational performance.",
    tags: ["System Integration", "Cloud Migration", "DevOps", "Security"],
    link: "Consult an Enterprise Architect",
    linkClass: "text-primary-fixed",
    icon: Building2,
    iconWrap: "bg-primary-container/20 text-primary-fixed",
    iconColor: "text-primary-fixed",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <BentoTilt>
      <div className="glass-card hover:bg-surface-container-high transition-all duration-300 p-space-xl flex flex-col justify-between min-h-[420px] group overflow-hidden hover:shadow-glow-primary">
        <div>
          <div className="flex items-center justify-between mb-space-lg">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.iconWrap}`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <span className="font-geist text-xs text-on-surface-variant font-mono">
              {service.num}
            </span>
          </div>
          <h3 className="font-manrope text-headline-sm text-on-surface font-bold mb-space-sm">
            {service.title}
          </h3>
          <p className="font-geist text-on-surface-variant leading-relaxed mb-space-lg">
            {service.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-space-lg">
            {service.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#quote"
            className={`inline-flex items-center gap-2 font-geist text-sm font-semibold ${service.linkClass} group-hover:translate-x-1 transition-transform`}
          >
            <span>{service.link}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </BentoTilt>
  );
}

export const Services = () => {
  return (
    <section id="services" className="w-full py-space-3xl bg-surface-container-lowest/70 relative">
      <div className="canvas-padding">
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="section-kicker tracking-wider">Engineered for Performance</span>
            <h2 className="font-manrope text-3xl md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
              Built for Scale. <span className="text-primary">Our Services</span>
            </h2>
          </div>
          <p className="font-geist text-on-surface-variant max-w-md">
            From concept to deployment, we provide end-to-end software development services that
            drive real business growth.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          {services.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </StaggerContainer>

        <SectionReveal className="mt-space-2xl text-center" delay={0.2}>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-space-xl py-space-sm rounded-full bg-primary-container text-on-primary font-geist text-sm font-semibold hover:bg-inverse-primary transition-all duration-300 shadow-md"
          >
            <span>Get Free Consultation</span>
            <Calendar className="w-4 h-4" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
};
