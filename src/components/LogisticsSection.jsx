export default function LogisticsSection() {
  const steps = [
    { step: "1. Compresión", desc: "Tecnología de vacío industrial que reduce el volumen del mueble hasta un 75% sin dañar los materiales.", icon: "compress" },
    { step: "2. Empaque", desc: "Cajas planas y reforzadas diseñadas para proteger cada pieza y facilitar el transporte.", icon: "package_2" },
    { step: "3. Entrega", desc: "Recibe en tu puerta un empaque compacto que cabe en cualquier ascensor o maleta de auto.", icon: "delivery_dining" },
    { step: "4. Expansión", desc: "Abre, expande y estrena. Tu mueble toma su forma final en pocos minutos.", icon: "expand_content" }
  ];

  return (
    <section className="bg-[#F2F2F2] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-[#0477BF] mb-4">Logística de Mobiliario Premium: Tu hogar en una caja</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Nuestra tecnología de empaque comprimido revoluciona la entrega de muebles de alta gama en Venezuela.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#0477BF]/10 flex items-center justify-center text-[#0477BF] mb-6 group-hover:bg-[#0477BF] group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg mb-3 group-hover:text-[#0477BF] transition-colors duration-300">{item.step}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
