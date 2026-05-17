import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(4,119,191,0.08)] transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link className="text-2xl font-extrabold tracking-tight text-[#0477BF] font-headline-lg group flex items-center gap-2" href="/">
          <img 
            alt="Practiiko Logo" 
            className="h-10 sm:h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
            src="/logo.webp" 
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/">Inicio</Link>
          <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/#nosotros">Nosotros</Link>
          <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/catalogo">Catálogo</Link>
        </div>
        <a 
          href={`https://wa.me/584248948664?text=${encodeURIComponent('Hola, vengo de la pagina web, me interesa comprar uno de sus productos, puede darme mayor informacion?')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F28705] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-button text-xs sm:text-sm md:text-base active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 whitespace-nowrap"
        >
          Comprar Ahora
        </a>
      </div>
    </nav>
  );
}
