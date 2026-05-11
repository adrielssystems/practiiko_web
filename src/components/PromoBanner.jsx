import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative overflow-hidden bg-[#F28705] rounded-[32px] p-8 md:p-12 shadow-xl shadow-orange-500/20">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-headline-lg text-white text-3xl md:text-5xl mb-4 leading-tight">
                ¡Lujo comprimido, estilo expandido!
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
                Dale a tu espacio el nivel que merece con <span className="font-bold underline decoration-white/40">envío GRATIS exclusivo en Margarita</span>. ¡Tu nueva sala está a un clic de distancia!
              </p>
            </div>
            
            <Link 
              href="/catalogo" 
              className="whitespace-now7rap bg-white text-[#F28705] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95 shadow-lg"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
