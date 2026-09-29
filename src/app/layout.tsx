import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devixa Technologies",
  description:
    "Custom software development, mobile applications, and UX/UI design — precision-crafted digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          manrope.variable,
          geist.variable,
          "min-h-screen flex flex-col relative"
        )}
      >
        <div
          className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(183,109,255,0.12)_0%,rgba(5,20,36,0)_60%)]"
          aria-hidden
        />
        {children}
      </body>
    </html>
  );
}
