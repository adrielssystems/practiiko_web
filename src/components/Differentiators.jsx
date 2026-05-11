export default function Differentiators() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">¿Por qué elegir los Muebles Premium de Practiiko?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Reinventamos la experiencia de amueblar tu espacio con soluciones modulares y entrega eficiente.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-container/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 group-hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-[#0477BF] text-4xl group-hover:scale-110 transition-transform duration-300">inventory_2</span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 group-hover:text-[#0477BF] transition-colors duration-300">Diseño Ready-to-Box</h3>
            <p className="text-on-surface-variant font-body-md">Sofás y sillones diseñados para viajar en cajas optimizadas, facilitando su ingreso a cualquier espacio reducido.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-secondary-container/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-secondary-container/20 group-hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-[#F28705] text-4xl group-hover:scale-110 transition-transform duration-300">build</span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 group-hover:text-[#F28705] transition-colors duration-300">Ensamble sin Estrés</h3>
            <p className="text-on-surface-variant font-body-md">Sistema de armado intuitivo que no requiere herramientas. Solo desempaca y listo! Tendrás tu nuevo mueble en minutos.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-container/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 group-hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-[#0477BF] text-4xl group-hover:scale-110 transition-transform duration-300">chair</span>
            </div>
            <h3 className="font-headline-md text-xl mb-4 group-hover:text-[#0477BF] transition-colors duration-300">Confort Garantizado</h3>
            <p className="text-on-surface-variant font-body-md">Estructuras sólidas y espumas de alta densidad que ofrecen el equilibrio perfecto entre estética y comodidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
