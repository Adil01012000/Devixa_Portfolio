import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <AboutUs />
      
      <Features />
      <Services />
      
      {/* <ProductShowcase /> */}
      <FAQs />
      {/* <Pricing/> */}
     
      <CallToAction />
      {/* <CallToAction /> */}
      </div>
      <Footer />
    </>
  );
}
