import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <img 
          src="/fondo practiiko.svg" 
          alt="Practiiko Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-in slide-in-from-left duration-700">
          <span className="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase block">Acerca de</span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-8 leading-tight">
            Nosotros
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              En <strong>Practiiko</strong> redefinimos el interiorismo contemporáneo al fusionar diseño de vanguardia con una ingeniería logística revolucionaria. Nos especializamos en mobiliario de alta gama para hogares, hoteles y oficinas, democratizando el lujo funcional a través de nuestro innovador sistema de empaque comprimido al vacío; una solución inteligente que garantiza una entrega ágil, sostenible y sin complicaciones.
            </p>
            <p>
              Cada pieza es un manifiesto de durabilidad y estilo, diseñada meticulosamente para quienes buscan transformar sus espacios con la eficiencia y el carácter que el ritmo de vida moderno exige.
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
