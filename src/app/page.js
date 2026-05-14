import { headers } from 'next/headers'; // Updated metadata
import ComingSoon from "@/components/ComingSoon";
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
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // La lógica de 'Coming Soon' ha sido desactivada para el lanzamiento a producción
  // a pesar de que la variable de entorno NEXT_PUBLIC_COMING_SOON pueda ser true.

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
        <PromoBanner compact={true} />
        <AboutUsSection />
        <ValuesSection />

        <PromoBanner 
          title="Desempaca el lujo. Transforma tu espacio hoy!"
          description="Diseño de vanguardia con envío GRATIS exclusivo en Margarita. Es lujo, es simple, es Practiiko"
          compact={true}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
