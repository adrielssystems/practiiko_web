import ComingSoon from "@/components/ComingSoon";
import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import Differentiators from "@/components/Differentiators";
import OfferBanner from "@/components/OfferBanner";
import ProductGallery from "@/components/ProductGallery";
import LogisticsSection from "@/components/LogisticsSection";
import ErgonomicsSection from "@/components/ErgonomicsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  const comingSoonVar = process.env.COMING_SOON || process.env.NEXT_PUBLIC_COMING_SOON;
  const isComingSoon = comingSoonVar?.trim().toLowerCase() === 'true';

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <TopNavBar />

      <main className="pt-20">
        <HeroSection />
        <Differentiators />
        <OfferBanner />
        <ProductGallery />
        <LogisticsSection />
        <ErgonomicsSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
