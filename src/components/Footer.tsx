import { Mail, Phone } from "lucide-react";
import LogoImage from "@/assets/icons/logo1.svg";

const solutions = [
  "Bespoke Software",
  "Cloud Architecture",
  "AI & Deep Learning",
  "High-Scale Web Apps",
  "UI/UX Engineering",
];

const company = [
  "About Devixa",
  "Engineering Values",
  "Client Portfolio",
  "Leadership & Team",
  "Careers",
];

const resources = [
  "System Architecture",
  "Technical Case Studies",
  "Knowledge Base",
  "Security & Compliance",
  "Privacy Policy",
];

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest/80 backdrop-blur-xl mt-space-3xl">
      <div className="canvas-padding py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-lg mb-space-2xl">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <LogoImage className="h-8 w-8" aria-hidden />
              <span className="font-manrope text-headline-sm font-semibold tracking-tight text-on-surface">
                Devixa Technologies
              </span>
            </div>
            <p className="font-geist text-sm text-on-surface-variant max-w-sm">
              Pioneering enterprise digital architecture, intelligent system engineering, and
              cinematic software craftsmanship for forward-thinking market leaders.
            </p>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs font-geist text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="mailto:sales.devixatech@gmail.com"
              >
                <Mail className="w-4 h-4" />
                sales.devixatech@gmail.com
              </a>
              <a
                className="inline-flex items-center gap-space-xs font-geist text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="tel:+923091888891"
              >
                <Phone className="w-4 h-4" />
                +92 309 188 8891
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-geist text-sm text-on-surface font-semibold uppercase tracking-wider">
              Solutions
            </span>
            <ul className="flex flex-col gap-space-xs font-geist text-sm text-on-surface-variant">
              {solutions.map((item) => (
                <li key={item} className="hover:text-on-surface transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-geist text-sm text-on-surface font-semibold uppercase tracking-wider">
              Company
            </span>
            <ul className="flex flex-col gap-space-xs font-geist text-sm text-on-surface-variant">
              {company.map((item) => (
                <li key={item} className="hover:text-on-surface transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-geist text-sm text-on-surface font-semibold uppercase tracking-wider">
              Resources
            </span>
            <ul className="flex flex-col gap-space-xs font-geist text-sm text-on-surface-variant">
              {resources.map((item) => (
                <li key={item} className="hover:text-on-surface transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-outline-variant/20">
          <span className="font-geist text-sm text-on-surface-variant">
            © 2025 Devixa Technologies. All rights reserved. Precision-crafted digital solutions.
          </span>
          <div className="flex items-center gap-space-md text-on-surface-variant">
            <span className="font-geist text-xs hover:text-on-surface cursor-pointer transition-colors duration-200">
              Privacy
            </span>
            <span className="font-geist text-xs hover:text-on-surface cursor-pointer transition-colors duration-200">
              Terms of Service
            </span>
            <span className="font-geist text-xs hover:text-on-surface cursor-pointer transition-colors duration-200">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
