import Link from "next/link";

export default function MattressSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <img 
          src="/fondo practiiko.svg" 
          alt="Practiiko Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Columna Izquierda: Contenido */}
        <div className="animate-in slide-in-from-left duration-700">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            <span className="text-on-surface">Colchones Practiiko</span>{" "}
            <span className="text-[#0477BF]">El descanso perfecto</span>
          </h2>
          <p className="text-[#F28705] font-label-bold mb-6 text-lg uppercase tracking-wide">
            ¡El descanso que soñaste llegó a la Isla de Margarita, en caja!
          </p>
          <div className="space-y-4 text-on-surface-variant text-body-lg mb-10">
            <p>
              Nuestra línea de colchones incorpora tecnología de vanguardia para garantizar un amanecer feliz y placentero. Cada unidad está construida con materiales de calidad premium, integrando capas de confort diseñadas a medida que se adaptan a la ergonomía de tu cuerpo, brindando el soporte necesario para un sueño profundo y reparador.
            </p>
            <p>
              Experimenta la mayor frescura del mercado gracias a nuestros textiles inteligentes de alta porosidad, todo esto al mejor precio del mercado y con la facilidad de entrega que solo Practiiko puede ofrecerte en toda la Isla de Margarita.
            </p>
          </div>
          <Link 
            href="/catalogo"
            className="inline-flex items-center px-10 py-4 bg-[#F28705] text-white font-button rounded-2xl hover:bg-[#D67604] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#F28705]/20"
          >
            Ver catálogo
          </Link>
        </div>

        {/* Columna Derecha: Tarjeta Visual */}
        <div className="relative group animate-in slide-in-from-right duration-700">
          <div className="bg-gradient-to-br from-[#0477BF] to-[#003859] rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>
            
            {/* Logo de Marca Flotante (Referencia Regal) */}
            <div className="w-full flex justify-end mb-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white font-bold tracking-widest text-sm border border-white/20">
                PRACTIIKO
              </div>
            </div>

            {/* Imagen del Colchón */}
            <div className="relative z-10 w-full transform group-hover:scale-105 transition-transform duration-700">
              <img 
                src="/colchon-premium.png" 
                alt="Colchón Premium Practiiko" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Texto de Garantía */}
            <div className="mt-8 text-center z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="material-symbols-outlined text-[#F28705] text-xl">verified</span>
                <p className="text-white font-headline-md text-lg tracking-wide">
                  Garantía de confort Practiiko
                </p>
              </div>
            </div>
          </div>
          
          {/* Adorno decorativo exterior */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-[#F28705]/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
