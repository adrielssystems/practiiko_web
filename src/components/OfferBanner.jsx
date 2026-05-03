export default function OfferBanner() {
  return (
    <section className="px-6">
      <div className="max-w-[1280px] mx-auto bg-gradient-to-r from-[#F28705] to-[#F2A341] rounded-[32px] p-12 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="font-headline-lg text-headline-lg mb-2">¡Rediseña tu sala hoy!</h2>
            <p className="text-lg opacity-90">Envío sin costo en toda nuestra línea de muebles de diseño.</p>
          </div>
          <button className="bg-white text-[#F28705] px-10 py-4 rounded-xl font-button text-lg hover:bg-opacity-95 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg">
            Explorar Catálogo
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700"></div>
      </div>
    </section>
  );
}
