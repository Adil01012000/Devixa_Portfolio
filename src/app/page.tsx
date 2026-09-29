import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-0 bg-surface flex-1">
        <Hero />
        <Metrics />
        <AboutUs />
        <Services />
        <Features />
        <FAQs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
