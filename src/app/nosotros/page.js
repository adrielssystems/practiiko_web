import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import Image from "next/image";
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/AboutUsSection";
import ValuesSection from "@/components/ValuesSection";

export const metadata = {
  title: "Nosotros | Practiiko",
  description: "Conoce la historia de Practiiko, nuestra misión de transformar hogares con muebles de diseño inteligente y accesible.",
};

export default function NosotrosPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <TopNavBar />

      <main className="pt-20">
        {/* HERO / ACERCA DE NOSOTROS */}
        <AboutUsSection />

        {/* SECCIÓN VALORES */}
        <ValuesSection />

        {/* SECCIÓN EQUIPO */}
        <TeamSection />

        {/* CTA FINAL */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-headline-md text-3xl md:text-4xl mb-8">¿Listo para transformar tu espacio?</h2>
            <Link 
              href="/catalogo"
              className="inline-flex items-center px-12 py-5 bg-[#F28705] text-white font-button rounded-2xl hover:bg-[#D67604] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#F28705]/20 text-lg"
            >
              Ver nuestro Catálogo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
