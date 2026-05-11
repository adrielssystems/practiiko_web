export default function ValuesSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-4xl text-on-surface mb-4">Nuestra misión y Valores</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <div className="max-w-4xl mx-auto mb-16 px-6">
            <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-medium italic">
              "Nuestra misión es transformar cada rincón en un espacio de bienestar, ofreciendo muebles de alta gama listos para disfrutar. <span className="text-primary font-bold">Desempaca y ¡Listo!</span> Es lujo, es simple, es Practiiko."
            </p>
          </div>
          <p className="text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold opacity-60">Nuestros pilares fundamentales</p>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-24 h-24 bg-primary/5 rounded-[32px] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-xl transition-all duration-500 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-5xl transition-transform duration-500 group-hover:rotate-12">lightbulb</span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 group-hover:text-primary transition-colors duration-300">Innovación</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">Buscamos constantemente nuevas formas de mejorar la funcionalidad y el diseño de nuestros muebles.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-24 h-24 bg-secondary/5 rounded-[32px] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-secondary/10 group-hover:shadow-xl transition-all duration-500 border border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-5xl transition-transform duration-500 group-hover:scale-110">verified</span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 group-hover:text-secondary transition-colors duration-300">Calidad</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">Materiales premium seleccionados para garantizar que cada pieza perdure en el tiempo.</p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-primary/5 rounded-[32px] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-xl transition-all duration-500 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-5xl transition-transform duration-500 group-hover:-translate-y-1">bolt</span>
            </div>
            <h3 className="font-headline-md text-2xl mb-4 group-hover:text-primary transition-colors duration-300">Accesibilidad</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">Diseño de alta gama a precios competitivos, democratizando el buen gusto en el hogar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
