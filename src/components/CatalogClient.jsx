"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getImageUrl } from "@/lib/utils";
import ProductCard from "./ProductCard";

export default function CatalogClient({ initialProducts, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [activeCardId, setActiveCardId] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const handleFlip = (id) => {
    setActiveCardId(prevId => prevId === id ? null : id);
  };

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(initialProducts);
    } else {
      // Usamos comparación suave para evitar problemas de tipos (string vs number)
      setFilteredProducts(initialProducts.filter(p => p.category_id == activeCategory));
    }
  }, [activeCategory, initialProducts]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".catalog-header", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out"
      });

      gsap.fromTo(".product-card", 
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.08, 
          ease: "elastic.out(1, 0.75)",
          clearProps: "all"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    gsap.to(card, {
      rotateX: (y - centerY) / 25,
      rotateY: (centerX - x) / 25,
      duration: 0.4,
      ease: "power3.out",
      transformPerspective: 1200
    });

    const img = card.querySelector(".parallax-img");
    if (img) {
      gsap.to(img, {
        x: (x - centerX) / 12,
        y: (y - centerY) / 12,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    const img = card.querySelector(".parallax-img");
    if (img) gsap.to(img, { x: 0, y: 0, duration: 1, ease: "power2.out" });
  };

  return (
    <div ref={containerRef} className="w-full">
      
      {/* HEADER SECTION - FULL WIDTH HERO */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[650px] flex items-center mt-[-160px] pt-[160px] mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-catalogo-practiiko.svg" 
            alt="Nueva Colección Practiiko" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for text readability - Consistent with landing page */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="max-w-3xl py-12 md:py-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-black text-[10px] mb-6 uppercase tracking-widest backdrop-blur-md border border-white/30">
              NUEVA COLECCIÓN
            </span>
            <h1 className="font-headline-lg text-5xl md:text-8xl text-white mb-6 leading-[0.9] drop-shadow-2xl">
              Explora la <br /> <span className="text-[#F28705] italic">Nueva Colección Practiiko</span>
            </h1>
            <div className="max-w-xl">
              <p className="text-white text-xl md:text-2xl font-bold leading-tight mb-3 drop-shadow-lg">
                El sofá de moda que llega en caja y cobra vida en tu casa.
              </p>
              <p className="text-white/80 text-lg md:text-xl font-medium drop-shadow-md">
                ¡Dale un toque de tendencia a tu hogar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER AND CONTENT SECTION - CONSTRAINED */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-gray-400 font-black text-xs uppercase tracking-[0.3em] mb-2">Filtrar por categoría</h2>
              <div className="h-1 w-12 bg-[#F28705] rounded-full"></div>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-2 bg-white/50 backdrop-blur-md rounded-[28px] border border-gray-100 shadow-xl shadow-gray-200/20">
              <button 
                onClick={() => setActiveCategory("all")}
                className={`px-8 py-3.5 rounded-[20px] text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === 'all' ? 'bg-[#F28705] text-white shadow-xl shadow-orange-500/30 scale-105' : 'text-gray-400 hover:text-[#F28705]'}`}
              >
                Todos
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id.toString())}
                  className={`px-8 py-3.5 rounded-[20px] text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.id.toString() ? 'bg-[#F28705] text-white shadow-xl shadow-orange-500/30 scale-105' : 'text-gray-400 hover:text-[#F28705]'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
        </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((prod, idx) => (
          <ProductCard 
            key={prod.id} 
            product={prod} 
            isFlipped={activeCardId === prod.id}
            onFlip={() => handleFlip(prod.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-40 bg-gray-50 rounded-[60px] border border-dashed border-gray-200">
          <span className="material-symbols-outlined text-6xl text-gray-200 mb-6">architecture</span>
          <h3 className="text-2xl font-black text-on-surface-variant">Próximos lanzamientos</h3>
          <p className="text-gray-400 mt-2 max-w-xs text-center">Estamos diseñando nuevas piezas para esta categoría. ¡Mantente atento!</p>
        </div>
      )}

      <style jsx>{`
        .product-card {
          perspective: 1500px;
        }
      `}</style>
      </div>
    </div>
  );
}
