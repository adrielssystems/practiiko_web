"use client";

import { useState } from "react";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

export default function ProductCard({ product, isPreview = false }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    // Si es un link dentro de la tarjeta, no girar
    if (e.target.tagName === 'A' || e.target.closest('a')) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`product-card-container group h-[540px] w-full cursor-pointer perspective-1000 ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="product-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-xl rounded-[40px]">
        
        {/* CARA FRONTAL (DISEÑO OXARELLYS) */}
        <div className="product-card-front absolute inset-0 backface-hidden bg-white rounded-[40px] p-6 flex flex-col border border-gray-100 overflow-hidden">
          {/* Contenedor de Imagen */}
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-50 mb-6 group">
            <img 
              alt={product.name} 
              className="w-full h-full object-contain p-4 scale-90 group-hover:scale-100 transition-transform duration-700" 
              src={getImageUrl(product.main_image || (product.images && product.images[0]))} 
            />
          </div>

          {/* Información del Producto */}
          <div className="flex flex-col flex-1 px-2">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{product.category_name || 'Muebles'}</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-4 leading-tight">
              {product.name || "Nombre del Producto"}
            </h3>
            
            <div className="flex items-center justify-between mt-auto mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-primary">
                  ${parseFloat(product.price_cash || product.price_bcv || 0).toLocaleString()}
                </span>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Inversión única</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50 mb-2">
               <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Ver Características</span>
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-lg">sync_alt</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARA TRASERA (DISEÑO OXARELLYS) */}
        <div className="product-card-back absolute inset-0 backface-hidden bg-primary text-white rounded-[40px] p-10 flex flex-col rotate-y-180 shadow-2xl overflow-hidden">
          <div className="flex flex-col h-full justify-center items-center text-center">
            {/* Decoración superior: Logo Practiiko */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150"></div>
              <img 
                src="/logo-p.png" 
                alt="Practiiko Logo" 
                className="w-16 h-16 object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            
            <h4 className="text-white/60 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Más información</h4>
            <h3 className="text-2xl font-bold mb-6 leading-tight">{product.name}</h3>

            <div className="flex-1 flex items-center">
              <p className="text-white/90 text-base leading-relaxed line-clamp-[6]">
                {product.description || "Esta pieza exclusiva de Practiiko combina ergonomía de vanguardia con un diseño minimalista pensado para espacios modernos."}
              </p>
            </div>

            {!isPreview && (
              <div className="mt-8 pt-6 border-t border-white/10 w-full relative z-10">
                <Link 
                  href={`/catalogo/${product.slug || product.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-secondary text-white px-10 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-white hover:text-primary transition-all duration-300 inline-block mb-4"
                >
                  Ver Ficha Completa
                </Link>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Haz clic para volver</p>
              </div>
            )}
          </div>
          
          {/* Slogan Decorativo */}
          <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
            <img src="/logo-white.png" alt="" className="h-12 w-auto grayscale" />
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
      `}</style>
    </div>
  );
}
