import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-in slide-in-from-left duration-700">
          <span className="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase block">Acerca de</span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-8 leading-tight">
            Nosotros
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
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

        <div className="relative group animate-in slide-in-from-right duration-700 h-[400px] md:h-[600px] w-full">
          <div className="rounded-[48px] overflow-hidden shadow-2xl relative h-full w-full">
            <Image 
              src="/nosotros1.jpg" 
              alt="Diseño de Interiores Practiiko" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
          {/* Adorno decorativo */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
