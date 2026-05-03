export default function ProductGallery() {
  const products = [
    { title: "Sofá Cama Nórdico", desc: "Minimalismo escandinavo con sistema de apertura fácil.", price: "$8,499", img: "/product-nordico.jpg", tag: "Nuevo" },
    { title: "Sofá Curvo Sunset", desc: "Líneas orgánicas y textura bouclé de alta resistencia.", price: "$12,200", img: "/product-sunset.jpg" },
    { title: "Poltrona Botánica", desc: "Pieza de acento ergonómica con diseño vanguardista.", price: "$10,150", img: "/product-botanica.jpg", tag: "Oferta" },
    { title: "Sillón Pétalo Rose", desc: "Estructura envolvente ideal para rincones de lectura.", price: "$5,400", img: "/product-rose.jpg" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Colección de Muebles Destacados</h2>
            <p className="text-on-surface-variant mt-2">Piezas icónicas que definen el carácter de tu hogar.</p>
          </div>
          <img 
            alt="Logo Practiiko" 
            className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCG7EaiBjMSrU-0q_ojcRnLs63GXDXeZDjK6pPAKmgRCv1lZaYwDO3unNHbpEYrSJjrSQMuiyOuxvMPQnaSxQ6kFSK6jMFWwxfgCp9U84S_XlPGv26uJS0qQzyVfH0H6Fh87uiDyoLrDsBC10T2DxqMrs19UEnxS6qMhTQO92nAl4yid8nXre_bC7k5x2e4vPz_X7jKdm89KjnacidXhCSfb14PHKk0WQzKGNA4yGXLcLG1nOmQ7fc20zZuEHSbErg9wK_PQ-fvgp" 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-white border border-[#E0E0E0] rounded-3xl overflow-hidden hover:border-transparent hover:shadow-[0_15px_40px_rgba(4,119,191,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-50 p-6 flex-shrink-0">
                <img 
                  alt={prod.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  src={prod.img} 
                />
                {prod.tag && (
                  <span className={`absolute top-4 left-4 ${prod.tag === 'Nuevo' ? 'bg-secondary' : 'bg-[#D93004]'} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10`}>
                    {prod.tag}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-headline-md text-lg mb-2 group-hover:text-[#0477BF] transition-colors duration-300">{prod.title}</h4>
                <p className="text-on-surface-variant text-sm mb-4 flex-1">{prod.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-headline-lg text-xl text-[#0477BF]">{prod.price}</span>
                  <button className="text-[#0477BF] font-button text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Detalles <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
