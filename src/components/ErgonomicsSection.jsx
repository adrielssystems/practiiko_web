export default function ErgonomicsSection() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="group">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Diseño Ergonómico Premium: Confort que se adapta a ti</h2>
          <p className="text-on-surface-variant mb-10">Nuestros muebles no solo son bellos; están diseñados bajo estrictos estándares de soporte corporal para asegurar que cada momento de descanso sea reparador.</p>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between mb-2">
                <span className="font-label-bold text-xs uppercase tracking-tighter">Blando</span>
                <span className="font-label-bold text-xs uppercase tracking-tighter">Medio</span>
                <span className="font-label-bold text-xs uppercase tracking-tighter">Firme</span>
              </div>
              <div className="h-3 w-full bg-gradient-to-r from-[#F28705] via-white to-[#0477BF] rounded-full border border-outline-variant relative overflow-hidden group-hover:shadow-inner transition-shadow">
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#0477BF] rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
              </div>
              <p className="mt-4 text-sm text-center text-[#0477BF] font-semibold">Nivel Comfort Plus: Soporte equilibrado para uso diario</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img 
            alt="Ergonomía" 
            className="w-full rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
            src="/ergonomia.avif" 
          />
          <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white/60 backdrop-blur-md px-8 py-10 rounded-3xl text-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-[#0477BF] font-display-xl text-5xl mb-2 scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">100%</div>
              <p className="font-label-bold uppercase text-xs tracking-widest text-on-surface-variant">Satisfacción Total</p>
              <div className="w-12 h-1 bg-[#F28705] mx-auto my-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
              <p className="text-sm">Si el diseño o la comodidad no cumplen tus expectativas, facilitamos tu devolución.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
