"use client";
 
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
 
export default function ProductCard({ product, isFlipped, onFlip, onOpenModal, isPreview = false }) {
  // 1. Unificar imágenes y video en una sola lista
  const mediaList = [];
  const rawImages = product.images || [];
  
  if (rawImages.length > 0) {
    rawImages.forEach(img => mediaList.push({ type: "image", url: img }));
  } else if (product.main_image) {
    mediaList.push({ type: "image", url: product.main_image });
  }

  if (product.video_url) {
    mediaList.push({ type: "video", url: product.video_url });
  }

  // Fallback seguro si no hay multimedia
  if (mediaList.length === 0) {
    mediaList.push({ type: "image", url: "/hero-sofa.png" });
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto-play/Pause al cambiar de slide
  useEffect(() => {
    if (mediaList[activeIndex]?.type === "video") {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(err => console.log("Video auto-play blocked/failed:", err));
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [activeIndex]);

  const handleNext = (e) => {
    e.stopPropagation(); // Evitar que la tarjeta gire
    setActiveIndex(prev => (prev + 1) % mediaList.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation(); // Evitar que la tarjeta gire
    setActiveIndex(prev => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation(); // Evitar que la tarjeta gire
    setActiveIndex(index);
  };

  const handleFlip = (e) => {
    e.stopPropagation();
    onFlip();
  };
 
  return (
    <div 
      className={`product-card-container group w-full perspective-1000 transition-[height] duration-500 ease-in-out ${isFlipped ? 'is-flipped h-[540px]' : 'h-[460px]'}`}
    >
      <div className="product-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-[40px]">
        
        {/* CARA FRONTAL (DISEÑO OXARELLYS) */}
        <div className="product-card-front absolute inset-0 backface-hidden bg-white rounded-[40px] flex flex-col border-2 border-[#F28705]/20 shadow-[0_15px_40px_rgba(242,135,5,0.04)] overflow-hidden">
          {/* Contenedor de Imagen */}
          <div className="relative w-full flex-1 overflow-hidden bg-white group/media border-b border-gray-100 min-h-[200px]">
            {/* Badges Section */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {product.is_new && (
                <span className="animate-badge-pop bg-[#0477BF] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-blue-500/30 uppercase tracking-widest" style={{ animationDelay: '0.6s' }}>
                  Nuevo
                </span>
              )}
              {product.is_promotion && (
                <span className="animate-badge-pop bg-[#ef4444] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-red-500/30 uppercase tracking-widest" style={{ animationDelay: '0.8s' }}>
                  Promoción
                </span>
              )}
              {product.is_clearance && (
                <span className="animate-badge-pop bg-[#1e293b] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-black/20 uppercase tracking-widest" style={{ animationDelay: '1s' }}>
                  Liquidación
                </span>
              )}
              {product.is_coming_soon && (
                <span className="animate-badge-pop bg-[#7c3aed] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-purple-500/30 uppercase tracking-widest" style={{ animationDelay: '1.2s' }}>
                  Próximamente
                </span>
              )}
            </div>
            
            {/* Renderizado de Media (Imágenes / Video) */}
            <div 
              className="w-full h-full relative cursor-pointer"
              onClick={() => onOpenModal && onOpenModal(activeIndex)}
            >
              {mediaList.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  {item.type === 'video' ? (
                    <video 
                      ref={videoRef}
                      src={getImageUrl(item.url)}
                      muted 
                      playsInline
                      loop
                      className="w-full h-full"
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <img 
                      alt={`${product.name} - ${idx + 1}`}
                      className="w-full h-full"
                      style={{ objectFit: 'contain' }}
                      src={getImageUrl(item.url)} 
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Flechas de Navegación (Visibles en Hover cuando hay más de 1 item) */}
            {mediaList.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-30 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  title="Anterior"
                >
                  <span className="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-30 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  title="Siguiente"
                >
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </>
            )}

            {/* Puntos de Navegación (Dots) */}
            {mediaList.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 bg-black/35 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {mediaList.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => handleDotClick(e, idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 flex items-center justify-center relative ${idx === activeIndex ? 'w-4 bg-[#F28705]' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                    title={item.type === 'video' ? 'Ver Video' : `Ver Imagen ${idx + 1}`}
                  >
                    {item.type === 'video' && idx === activeIndex && (
                      <span className="absolute text-[6px] font-black text-white">▶</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col flex-none px-6 pt-5 pb-5">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] text-[#0477BF] font-black uppercase tracking-[0.2em]">{product.category_name || 'Muebles'}</span>
            </div>
            <h3 className="font-headline-md text-xl text-gray-900 mb-4 leading-tight">
              {product.name || "Nombre del Producto"}
            </h3>
            
            <div className="flex items-center justify-between mt-auto mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0477BF]">
                  ${parseFloat(product.price_bcv || product.price_cash || 0).toLocaleString('es-VE')}
                </span>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Ref.</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#F28705]/10 mb-2">
               <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Ver Características</span>
               <div 
                 onClick={handleFlip}
                 className="w-8 h-8 rounded-full bg-[#F28705]/10 flex items-center justify-center text-[#F28705] hover:bg-[#F28705] hover:text-white transition-all duration-500 cursor-pointer"
               >
                <span className="material-symbols-outlined text-lg">sync_alt</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARA TRASERA (DISEÑO OXARELLYS) */}
        <div className="product-card-back absolute inset-0 backface-hidden bg-primary text-white rounded-[40px] p-5 sm:p-6 flex flex-col rotate-y-180 shadow-2xl overflow-hidden">
          <div className="flex flex-col h-full justify-between items-center text-center">
            {/* Decoración superior: Logo Practiiko */}
            <div className="mt-1 mb-2 relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150"></div>
              <img 
                src="/logo-p.jpeg" 
                alt="Practiiko Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            
            <div className="flex-shrink-0">
              <h4 className="text-white/60 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-1">Más información</h4>
              <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{product.name}</h3>
            </div>

            {/* Contenedor de descripción con scroll elegante y tamaño de letra responsivo/adaptable */}
            <div className="flex-1 w-full my-1 overflow-y-auto pr-1 description-scroll flex items-center justify-center">
              <p className={`text-white/90 text-center ${
                (product.description || "").length > 350
                  ? "text-[11px] sm:text-xs leading-snug"
                  : (product.description || "").length > 250 
                    ? "text-xs sm:text-[13px] leading-relaxed" 
                    : (product.description || "").length > 120 
                      ? "text-[13px] sm:text-sm leading-relaxed" 
                      : "text-sm sm:text-base leading-relaxed"
              }`}>
                {product.description || "Esta pieza exclusiva de Practiiko combina ergonomía de vanguardia con un diseño minimalista pensado para espacios modernos."}
              </p>
            </div>

            {!isPreview && (
              <div 
                className="mt-2 pt-3 border-t border-white/10 w-full relative z-10 flex-shrink-0 cursor-pointer"
                onClick={handleFlip}
              >
                <a 
                  href={`https://wa.me/584248948664?text=${encodeURIComponent(`Hola, vengo de la pagina web y quiero comprar este producto: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#F28705] text-white px-8 py-2 sm:px-10 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xl hover:bg-white hover:text-primary transition-all duration-300 inline-block mb-2"
                >
                  Comprar Ahora
                </a>
                <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mt-1">Haz clic para volver</p>
              </div>
            )}
          </div>
          
          {/* Slogan Decorativo */}
          <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
            <img src="/logo-white.png" alt="" className="h-10 w-auto grayscale" />
          </div>
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .is-flipped .product-card-inner {
          transform: rotateY(180deg);
        }
        .product-card-container:hover .product-card-inner {
           ${!isFlipped ? 'transform: rotateY(10deg);' : ''}
        }

        .animate-badge-pop {
          opacity: 0;
          animation: badge-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .description-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
        }
        .description-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .description-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .description-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.25);
          border-radius: 4px;
        }
        .description-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        @keyframes badge-pop-in {
          0% {
            transform: scale(0.5) translateY(10px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
