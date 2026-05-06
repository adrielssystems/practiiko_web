"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { getImageUrl } from "@/lib/utils";
import ProductCard from "./ProductCard";

export default function CatalogClient({ initialProducts, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

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
    <div ref={containerRef} className="max-w-[1440px] mx-auto px-6">
      
      {/* HEADER SECTION */}
      <div className="catalog-header mb-20 text-left">
        <h1 className="font-headline-lg text-6xl md:text-7xl text-on-surface mb-8 leading-[0.9] flex flex-wrap items-center gap-x-4">
          Explora la <br /> <span className="text-primary italic">Nueva Colección Practiiko</span>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCG7EaiBjMSrU-0q_ojcRnLs63GXDXeZDjK6pPAKmgRCv1lZaYwDO3unNHbpEYrSJjrSQMuiyOuxvMPQnaSxQ6kFSK6jMFWwxfgCp9U84S_XlPGv26uJS0qQzyVfH0H6Fh87uiDyoLrDsBC10T2DxqMrs19UEnxS6qMhTQO92nAl4yid8nXre_bC7k5x2e4vPz_X7jKdm89KjnacidXhCSfb14PHKk0WQzKGNA4yGXLcLG1nOmQ7fc20zZuEHSbErg9wK_PQ-fvgp" 
            alt="Practiiko" 
            className="h-12 md:h-16 w-auto inline-block object-contain"
          />
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-on-surface text-xl font-bold leading-tight mb-2">
                El sofá de moda que llega en caja y cobra vida en tu casa.
              </p>
              <p className="text-on-surface-variant text-lg">
                ¡Dale un toque de tendencia a tu hogar!
              </p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-gray-50 rounded-3xl border border-gray-100">
              <button 
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === 'all' ? 'bg-primary text-white shadow-xl scale-105' : 'text-gray-400 hover:text-primary'}`}
              >
                Todos
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id.toString())}
                  className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.id.toString() ? 'bg-primary text-white shadow-xl scale-105' : 'text-gray-400 hover:text-primary'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((prod, idx) => (
          <ProductCard key={prod.id} product={prod} />
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
  );
}
