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

        {/* SECCIÓN MISIÓN */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/nosotros2.jpg" 
              alt="Nuestra Misión" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>

          <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
            <span className="text-secondary font-bold tracking-[0.4em] text-xs mb-6 uppercase block [text-shadow:-0.5px_-0.5px_0_#fff,0.5px_-0.5px_0_#fff,-0.5px_0.5px_0_#fff,0.5px_0.5px_0_#fff]">Nuestra Misión</span>
            <h2 className="text-white font-headline-lg text-4xl md:text-6xl mb-12 leading-tight drop-shadow-sm">
              Practiiko reconoce la importancia de establecer una relación basada en la <span className="italic text-secondary [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_4px_20px_rgba(242,135,5,0.3)]">confianza</span> y el <span className="italic text-secondary [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff,0_4px_20px_rgba(242,135,5,0.3)]">compromiso</span>.
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-12 shadow-lg shadow-secondary/20"></div>
            <p className="text-white text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
              Nuestra misión es transformar cada rincón en un espacio de bienestar, ofreciendo muebles de alta gama listos para disfrutar. <span className="text-secondary font-bold [text-shadow:-0.5px_-0.5px_0_#fff,0.5px_-0.5px_0_#fff,-0.5px_0.5px_0_#fff,0.5px_0.5px_0_#fff]">Desempaca y ¡Listo!</span> Es lujo, es simple, es Practiiko.
            </p>
          </div>
        </section>

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
