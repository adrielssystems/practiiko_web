"use client";
import { useState } from 'react';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center mt-[-100px] pt-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Practiiko Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="max-w-2xl transition-all duration-700 transform translate-y-0 opacity-100 py-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-label-bold text-xs mb-6 uppercase tracking-wider backdrop-blur-md border border-white/30">
              DISEÑO INTELIGENTE
            </span>
            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-xl">
              Muebles de diseño, entregados en una caja
            </h1>
            <p className="font-body-lg text-lg text-white/90 mb-10 max-w-lg drop-shadow-md">
              Transforma tu hogar con mobiliario premium que llega a tu puerta en formato compacto. Tecnología de ensamble intuitivo para un estilo de vida moderno y práctico.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/catalogo" className="bg-[#F28705] text-white px-8 py-4 rounded-xl font-button text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-orange-500/30 inline-block text-center">
                Ver Catálogo
              </a>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-button text-lg hover:bg-white hover:text-[#0477BF] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/10 flex items-center gap-2"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Cómo funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-[#F28705] bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <video 
              controls 
              autoPlay 
              className="w-full h-auto aspect-video object-contain"
              src="/revelacion-mueble.mp4"
            >
              Tu navegador no soporta el formato de video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
