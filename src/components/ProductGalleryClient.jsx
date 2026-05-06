"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getImageUrl } from "@/lib/utils";
import ProductCard from "./ProductCard";

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
        {initialProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
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
