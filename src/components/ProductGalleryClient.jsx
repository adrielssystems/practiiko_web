"use client";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ProductCard from "./ProductCard";
import ImageModal from "./ImageModal";

export default function ProductGalleryClient({ initialProducts }) {
  const containerRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [modalData, setModalData] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada del header
      gsap.from(".gallery-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Animación de entrada de las tarjetas
      gsap.from(".product-card-wrapper", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleFlip = (id) => {
    setActiveCardId(prevId => prevId === id ? null : id);
  };

  const handleOpenModal = (product, initialIndex) => {
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
    if (mediaList.length === 0) {
      mediaList.push({ type: "image", url: "/hero-sofa.png" });
    }

    setModalData({
      isOpen: true,
      mediaList,
      initialIndex,
      title: product.name
    });
  };

  return (
    <div ref={containerRef} className="max-w-[1400px] mx-auto px-6">
      
      {/* EVOLUTION BANNER */}
      <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-2xl p-6 mb-12 text-center max-w-4xl mx-auto shadow-sm animate-in fade-in duration-500">
        <h3 className="text-[#9a3412] font-bold text-lg mb-2 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F28705]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          Estamos evolucionando para ti
        </h3>
        <p className="text-[#c2410c] text-sm md:text-base max-w-2xl mx-auto font-medium">
          Actualmente nos encontramos actualizando nuestro catálogo para ofrecerte una experiencia visual mucho más atractiva, inmersiva y detallada. ¡Pronto verás nuestros productos como nunca antes!
        </p>
      </div>

      {/* HEADER: SIMPLE & ELEGANT */}
      <div className="gallery-header flex flex-col items-center text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase">Favoritos de la comunidad</span>
        <h2 className="font-headline-lg text-5xl md:text-6xl text-on-surface mb-6 max-w-3xl leading-tight">
          Best <span className="text-primary italic">Sellers</span>
        </h2>
        <div className="w-20 h-1 bg-secondary rounded-full"></div>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {initialProducts.map((prod) => (
          <div key={prod.id} className="product-card-wrapper">
            <ProductCard 
              product={prod} 
              isFlipped={activeCardId === prod.id}
              onFlip={() => handleFlip(prod.id)}
              onOpenModal={(index) => handleOpenModal(prod, index)}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {initialProducts && initialProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
             <span className="material-symbols-outlined text-4xl text-gray-300">search_off</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface-variant">Sin diseños en esta categoría</h3>
          <p className="text-gray-400 mt-2">Estamos curando nuevas piezas para ti.</p>
        </div>
      )}

      {modalData && (
        <ImageModal 
          isOpen={modalData.isOpen}
          mediaList={modalData.mediaList}
          initialIndex={modalData.initialIndex}
          title={modalData.title}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
}
