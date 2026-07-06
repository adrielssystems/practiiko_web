import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import Differentiators from "@/components/Differentiators";
import OfferBanner from "@/components/OfferBanner";
import ProductGallery from "@/components/ProductGallery";
import MattressSection from "@/components/MattressSection";
import LogisticsSection from "@/components/LogisticsSection";
import ErgonomicsSection from "@/components/ErgonomicsSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

import AboutUsSection from "@/components/AboutUsSection";
import ValuesSection from "@/components/ValuesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased relative">
      {/* Global Background SVG Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none">
        <img 
          src="/fondo practiiko.svg" 
          alt="Practiiko Pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <TopNavBar />

      <main className="pt-20">
        <HeroSection />
        <ImageCarousel />
        <Differentiators />
        <OfferBanner />
        <ProductGallery />
        <MattressSection />
        <LogisticsSection />
        <ErgonomicsSection />
        <PromoBanner 
          title="¡Contamos con planes de financiamiento que se ajustan a sus POSIBILIDADES!"
          description="Pregunta por nuestras cuotas y facilidades de pago para que lleves el mueble de tus sueños hoy mismo."
          compact={true} 
        />
        <AboutUsSection />
        <ValuesSection />

        <PromoBanner 
          title="Resistencia máxima de hasta 600 kgs con garantía de 5 años"
          description="Calidad insuperable diseñada para durar. Es lujo, es simple, es Practiiko"
          compact={true}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
