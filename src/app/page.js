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
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/AboutUsSection";
import ValuesSection from "@/components/ValuesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  const comingSoonVar = process.env.COMING_SOON || process.env.NEXT_PUBLIC_COMING_SOON;
  let isComingSoon = comingSoonVar?.trim().toLowerCase() === 'true';

  // Omitir Coming Soon si estamos en el subdominio landing
  if (host.includes('landing.practiiko.com') || host.includes('localhost')) {
    isComingSoon = false;
  }

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
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
        <TeamSection />
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
