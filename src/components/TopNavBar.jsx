"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(4,119,191,0.08)] transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <Link className="text-2xl font-extrabold tracking-tight text-[#0477BF] font-headline-lg group flex items-center gap-2" href="/">
            <img 
              alt="Practiiko Logo" 
              className="h-9 sm:h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
              src="/logo.webp" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/">Inicio</Link>
            <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/#nosotros">Nosotros</Link>
            <Link className="text-slate-600 font-medium hover:text-[#F28705] transition-all duration-200 text-[16px] hover:-translate-y-0.5 inline-block" href="/catalogo">Catálogo</Link>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/584248948664?text=${encodeURIComponent('Hola, vengo de la pagina web, me interesa comprar uno de sus productos, puede darme mayor informacion?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F28705] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-button text-xs sm:text-sm active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 whitespace-nowrap"
            >
              Comprar Ahora
            </a>
            {/* Hamburger Button (mobile only) */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col px-6 py-4 gap-1">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-3 text-slate-700 font-semibold border-b border-slate-100 hover:text-[#F28705] transition-colors">Inicio</Link>
          <Link href="/#nosotros" onClick={() => setMenuOpen(false)} className="py-3 text-slate-700 font-semibold border-b border-slate-100 hover:text-[#F28705] transition-colors">Nosotros</Link>
          <Link href="/catalogo" onClick={() => setMenuOpen(false)} className="py-3 text-slate-700 font-semibold hover:text-[#F28705] transition-colors">Catálogo</Link>
        </nav>
      </div>
    </>
  );
}
