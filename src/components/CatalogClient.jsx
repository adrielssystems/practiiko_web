"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function CatalogClient({ initialProducts, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(initialProducts);
    } else {
      setFilteredProducts(initialProducts.filter(p => p.category_id === parseInt(activeCategory)));
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
        <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-primary"></span>
            <span className="text-primary font-black tracking-widest text-[10px] uppercase">Curaduría de Excelencia</span>
        </div>
        <h1 className="font-headline-lg text-6xl md:text-7xl text-on-surface mb-8 leading-[0.9]">
          Explora la <br /> <span className="text-primary italic">Nueva Colección</span>
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              Cada pieza en nuestro catálogo es el resultado de una búsqueda incansable por el equilibrio perfecto entre la ergonomía moderna y el arte mobiliario.
            </p>
            
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
          <div 
            key={prod.id} 
            ref={el => cardsRef.current[idx] = el}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="product-card group flex flex-col"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Visual Container */}
            <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden bg-[#F0F4F7] mb-8 group-hover:shadow-[0_40px_100px_rgba(4,119,191,0.15)] transition-shadow duration-700">
              <img 
                alt={prod.name} 
                className="parallax-img w-full h-full object-contain p-8 scale-90 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                src={prod.main_image || "/placeholder-furniture.jpg"} 
              />
              
              {/* Labels Overlay */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                {prod.is_featured && (
                  <div className="bg-white/80 backdrop-blur-md text-primary text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
                    Edición de Autor
                  </div>
                )}
                {prod.is_promotion && (
                  <div className="bg-secondary text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    Precio Cashea
                  </div>
                )}
              </div>

              {/* Action Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
                 <Link 
                   href={`/catalogo/${prod.slug || prod.id}`}
                   className="bg-white text-on-surface px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl"
                 >
                   Descubrir
                 </Link>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 px-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{prod.category_name}</span>
                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                <span className="text-[10px] text-gray-400 font-bold uppercase">{prod.code || "PR-001"}</span>
              </div>
              
              <h3 className="font-headline-md text-2xl text-on-surface mb-6 group-hover:text-primary transition-colors duration-300">
                {prod.name}
              </h3>
              
              <div className="flex items-end justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">${parseFloat(prod.price_cash || 0).toLocaleString()}</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Venta Directa</span>
                </div>
                <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform duration-300">
                   <span className="font-bold text-[10px] uppercase tracking-widest">Ver más</span>
                   <span className="material-symbols-outlined text-lg">east</span>
                </div>
              </div>
            </div>
          </div>
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
