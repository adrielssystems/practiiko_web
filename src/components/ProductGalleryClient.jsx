"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getImageUrl } from "@/lib/utils";

export default function ProductGalleryClient({ initialProducts }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Animaciones GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada de la sección
      gsap.from(".gallery-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Animación de las tarjetas
      gsap.fromTo(".product-card", 
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          clearProps: "all"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });

    const img = card.querySelector(".parallax-img");
    if (img) {
      gsap.to(img, {
        x: (x - centerX) / 15,
        y: (y - centerY) / 15,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    });

    const img = card.querySelector(".parallax-img");
    if (img) {
      gsap.to(img, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={containerRef} className="max-w-[1400px] mx-auto px-6">
      
      {/* HEADER: SIMPLE & ELEGANT */}
      <div className="gallery-header flex flex-col items-center text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase">Favoritos de la comunidad</span>
        <h2 className="font-headline-lg text-5xl md:text-6xl text-on-surface mb-6 max-w-3xl leading-tight">
          Los más <span className="text-primary italic">vendidos</span>
        </h2>
        <div className="w-20 h-1 bg-secondary rounded-full"></div>
      </div>

      {/* GRID DE PRODUCTOS (Solo Best Sellers) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {initialProducts.map((prod, idx) => (
          <div 
            key={prod.id} 
            ref={el => cardsRef.current[idx] = el}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="product-card group relative bg-white rounded-[40px] p-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(4,119,191,0.12)] border border-transparent hover:border-gray-50"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-50 mb-6">
              <img 
                alt={prod.name} 
                className="parallax-img w-full h-full object-contain scale-90 group-hover:scale-100 transition-transform duration-700" 
                src={getImageUrl(prod.main_image)} 
              />
              
              {/* Overlay Tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {(prod.tags?.includes('Best Seller') || prod.is_featured) && (
                  <div className="bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                    Top Pick
                  </div>
                )}
                {prod.is_promotion && (
                  <div className="bg-[#D93004] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                    Limited
                  </div>
                )}
              </div>

              {/* Action Overlay */}
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-10 group-hover:translate-y-0">
                <Link 
                  href={`/catalogo/${prod.slug || prod.id}`}
                  className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-2xl hover:scale-105 transition-transform"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>

            {/* Info */}
            <div className="px-4 pb-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-primary/60 font-black uppercase tracking-[0.2em]">{prod.category_name}</span>
                <span className="text-secondary font-black text-xs uppercase">{prod.code}</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                {prod.name}
              </h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-primary">${parseFloat(prod.price_cash || 0).toLocaleString()}</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Inversión única</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State - Usando la lista correcta initialProducts */}
      {initialProducts && initialProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
             <span className="material-symbols-outlined text-4xl text-gray-300">search_off</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface-variant">Sin diseños en esta categoría</h3>
          <p className="text-gray-400 mt-2">Estamos curando nuevas piezas para ti.</p>
        </div>
      )}

      <style jsx>{`
        .product-card {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
