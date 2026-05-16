import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import Differentiators from "@/components/Differentiators";
import OfferBanner from "@/components/OfferBanner";
import ProductGallery from "@/components/ProductGallery";
import MattressSection from "@/components/MattressSection";
import LogisticsSection from "@/components/LogisticsSection";
import ErgonomicsSection from "@/components/ErgonomicsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
