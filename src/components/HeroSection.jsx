export default function HeroSection() {
  return (
    <section className="relative bg-[#F2F2F2] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 transition-all duration-700 transform translate-y-0 opacity-100">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-xs mb-6 uppercase tracking-wider">
            DISEÑO INTELIGENTE
          </span>
          <h1 className="font-display-xl text-display-xl text-[#0477BF] mb-6 leading-tight">
            Muebles de diseño, entregados en una caja
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Transforma tu hogar con mobiliario premium que llega a tu puerta en formato compacto. Tecnología de ensamble intuitivo para un estilo de vida moderno y práctico.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#F28705] text-white px-8 py-4 rounded-xl font-button text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-orange-500/30">
              Ver Mobiliario
            </button>
            <button className="border-2 border-[#0477BF] text-[#0477BF] px-8 py-4 rounded-xl font-button text-lg hover:bg-[#0477BF] hover:text-white transition-all duration-300 hover:-translate-y-1">
              Cómo funciona
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-video md:aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white p-4 transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              alt="Sofá modular de diseño Practiiko" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
              src="/hero-sofa.png" 
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="w-12 h-12 bg-[#F2A341]/10 rounded-full flex items-center justify-center text-[#F28705]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            </div>
            <div>
              <p className="font-label-bold text-on-surface">Envío a Domicilio</p>
              <p className="text-xs text-on-surface-variant">En formato compacto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
