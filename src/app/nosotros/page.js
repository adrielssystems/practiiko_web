import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

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
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <span className="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase block">Acerca de</span>
              <h1 className="font-headline-lg text-5xl md:text-7xl text-on-surface mb-8 leading-tight">
                Nosotros
              </h1>
              <div className="space-y-6 text-on-surface-variant text-lg md:text-xl leading-relaxed">
                <p>
                  En <strong>Practiiko</strong>, nacimos con la visión de revolucionar la forma en que las personas amueblan sus hogares. Entendemos que el diseño de vanguardia no debería ser un lujo inaccesible, sino una solución inteligente al alcance de todos.
                </p>
                <p>
                  Nuestra trayectoria se basa en la innovación constante y el compromiso con la calidad. Nos especializamos en mobiliario que combina estética contemporánea con una funcionalidad excepcional, diseñados específicamente para adaptarse al ritmo de vida moderno y a los retos de los espacios actuales.
                </p>
                <p>
                  Cada pieza de Practiiko es el resultado de una búsqueda incansable de soluciones que respondan a las necesidades de hogares, hoteles y oficinas, garantizando durabilidad y un estilo que trasciende las tendencias.
                </p>
              </div>
            </div>

            <div className="relative group animate-in slide-in-from-right duration-700">
              <div className="rounded-[48px] overflow-hidden shadow-2xl relative aspect-[4/5] md:aspect-auto md:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80\u0026w=2000" 
                  alt="Diseño de Interiores Practiiko" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              {/* Adorno decorativo */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* SECCIÓN MISIÓN */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax effect simulation */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80\u0026w=2000" 
              alt="Nuestra Misión" 
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
            <span className="text-secondary font-bold tracking-[0.4em] text-xs mb-6 uppercase block">Nuestra Misión</span>
            <h2 className="text-white font-headline-lg text-4xl md:text-6xl mb-12 leading-tight">
              Practiiko reconoce la importancia de establecer una relación basada en la <span className="italic text-secondary">confianza</span> y el <span className="italic text-secondary">compromiso</span>.
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-12"></div>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Nuestra misión es transformar cada rincón en un espacio de bienestar, ofreciendo muebles de alta gama listos para disfrutar, entregados directamente en tu puerta.
            </p>
          </div>
        </section>

        {/* SECCIÓN VALORES (OPCIONAL PERO RECOMENDADA) */}
        <section className="py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovación</h3>
                <p className="text-on-surface-variant leading-relaxed">Buscamos constantemente nuevas formas de mejorar la funcionalidad y el diseño de nuestros muebles.</p>
              </div>
              
              <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Calidad</h3>
                <p className="text-on-surface-variant leading-relaxed">Materiales premium seleccionados para garantizar que cada pieza perdure en el tiempo.</p>
              </div>

              <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">bolt</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Accesibilidad</h3>
                <p className="text-on-surface-variant leading-relaxed">Diseño de alta gama a precios competitivos, democratizando el buen gusto en el hogar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="font-headline-md text-3xl md:text-4xl mb-8">¿Listo para transformar tu espacio?</h2>
            <Link 
              href="/catalogo"
              className="inline-flex items-center px-12 py-5 bg-[#F28705] text-white font-button rounded-2xl hover:bg-[#D67604] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#F28705]/20 text-lg"
            >
              Ver nuestra colección
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
