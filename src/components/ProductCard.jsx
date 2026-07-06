"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

export default function ProductCard({ product }) {
  const [activeBadge, setActiveBadge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const carouselRef = useRef(null);
  const scrollTimeout = useRef(null);
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (carouselRef.current) {
      const targetScroll = modalImageIdx * carouselRef.current.clientWidth;
      if (Math.abs(carouselRef.current.scrollLeft - targetScroll) > 10) {
        carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [modalImageIdx]);

  const id = product?.id;
  const initialLikes = product?.likes_count || 0;
  const [localLikes, setLocalLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (id && mounted) {
      const likedProducts = JSON.parse(localStorage.getItem('practiiko_likes') || '{}');
      if (likedProducts[id]) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasLiked(true);
      }
    }
  }, [id, mounted]);

  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasLiked || !id) return;

    setHasLiked(true);
    setLocalLikes(prev => prev + 1);
    
    const likedProducts = JSON.parse(localStorage.getItem('practiiko_likes') || '{}');
    likedProducts[id] = true;
    localStorage.setItem('practiiko_likes', JSON.stringify(likedProducts));

    try {
      await fetch(`/api/products/${id}/like`, { method: 'POST' });
    } catch (error) {
      console.error('Failed to like product', error);
      setHasLiked(false);
      setLocalLikes(prev => prev - 1);
      delete likedProducts[id];
      localStorage.setItem('practiiko_likes', JSON.stringify(likedProducts));
    }
  };

  const name = product?.name || "SOFÁ MODULAR ZEN";
  
  // Use first image or main image
  const rawImages = product?.images || [];
  let mainImage = product?.main_image || "/hero-sofa.png";
  if (rawImages.length > 0 && !product?.main_image) {
    mainImage = rawImages[0];
  }
  mainImage = getImageUrl(mainImage);

  const price = product?.price_bcv || 0;
  const technicalSummary = product?.technical_summary || "Espuma de alta densidad / Tela premium antimanchas";
  const badgeText = product?.badge_text || "Diseño Inteligente: Llega a tu puerta";
  const views = product?.views_count || 0;
  const sales = product?.sales_count || 0;
  
  const interactiveBadges = Array.isArray(product?.interactive_badges) ? product.interactive_badges : [
    { title: "Garantía", text: "5 años de garantía sobre defectos estructurales." },
    { title: "Cuidado", text: "Fundas lavables en máquina con agua fría." }
  ];

  let parsedColors = [];
  if (Array.isArray(product?.colors)) {
    parsedColors = product.colors;
  } else if (typeof product?.colors === 'string') {
    try { parsedColors = JSON.parse(product.colors); } catch(e) { parsedColors = []; }
  }

  return (
    <>
    <div className="w-full max-w-[380px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] font-sans relative transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)]">
      
      {/* HEADER IMAGE SECTION (1x1) */}
      <div className="relative w-full aspect-square bg-white overflow-hidden rounded-t-[24px] group/media">
        <img 
          src={mainImage} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        
        {/* LIFESTYLE BADGE (MEDALLA DORADA) */}
        {product?.show_badge !== false && badgeText && (
          <div className="absolute top-4 left-4 w-[86px] h-[86px] rounded-full bg-gradient-to-br from-[#FFE77A] via-[#E5B13A] to-[#B88012] border-2 border-[#FFDF73] shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center p-2 z-20">
            <span className="text-[10px] font-black text-[#3E2723] leading-[1.1] text-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
              {badgeText}
            </span>
          </div>
        )}

        {/* STATUS TAGS (TOP RIGHT) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20 items-end">
          {product?.is_featured && <span className="bg-[#0f172a] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Best Sellers</span>}
          {product?.is_new && <span className="bg-[#0477BF] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Nuevo</span>}
          {product?.is_promotion && <span className="bg-[#ef4444] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">En Promoción</span>}
          {product?.is_clearance && <span className="bg-[#6b7280] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Liquidación</span>}
          {product?.is_coming_soon && <span className="bg-[#7c3aed] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Próximamente</span>}
        </div>

        {/* SOCIAL STATS OVERLAY (Bottom of image) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-8 pb-3 px-4 flex justify-between items-center z-20">
          <div className="flex gap-3 text-[12px] font-black tracking-wide text-[#F28705] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
               {views}
            </span>
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
               {sales}
            </span>
          </div>
          <button 
            onClick={handleLike}
            className="bg-black/20 backdrop-blur-sm border-none rounded-full px-3 h-8 flex items-center justify-center gap-1.5 cursor-pointer transition-colors hover:bg-black/40 text-[#F28705] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={hasLiked ? "#F28705" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span className="text-[12px] font-black">{localLikes}</span>
          </button>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col gap-4">
        
        {/* TITLE & DESC */}
        <div>
          <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-1 leading-tight">
            {name}
          </h2>
          <p className="text-xs text-slate-500 m-0 font-medium leading-relaxed">
            {technicalSummary}
          </p>
        </div>

        {/* INTERACTIVE BADGES */}
        <div className="flex gap-2 flex-wrap mt-2 relative">
          {interactiveBadges.map((badge, idx) => (
            <button 
              key={idx}
              onMouseEnter={() => setActiveBadge(idx)}
              onMouseLeave={() => setActiveBadge(null)}
              className={`border-none px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase flex items-center gap-1 cursor-pointer transition-colors
                ${activeBadge === idx ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> 
              {badge.title}
            </button>
          ))}
          
          {/* POPOVER TOOLTIP (Absolute below) */}
          {activeBadge !== null && (
            <div className="absolute top-[110%] left-0 z-30 bg-slate-900 text-white p-3 rounded-xl text-xs w-[250px] max-w-[90vw] shadow-xl animate-in fade-in zoom-in duration-200 pointer-events-none">
              <div className="flex justify-between mb-1">
                <strong className="uppercase tracking-widest">{interactiveBadges[activeBadge].title}</strong>
              </div>
              <p className="m-0 opacity-90 leading-relaxed">{interactiveBadges[activeBadge].text}</p>
            </div>
          )}
        </div>

        {/* PRICE */}
        <div className="flex items-start mt-1">
          <span className="text-[2rem] font-black text-[#d97706] leading-none drop-shadow-sm">
            <small className="text-base align-top opacity-80 mr-1 tracking-normal font-bold">Ref</small>
            {parseFloat(price).toLocaleString('es-VE')}
          </span>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          {/* CTA COMPRAR: DESTACADO */}
          <a 
            href={`https://wa.me/584248948664?text=${encodeURIComponent(`Hola, vengo de la pagina web y me interesa el modelo: ${product?.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#F28705] text-white py-3.5 px-2 rounded-xl font-black text-xs uppercase text-center flex items-center justify-center gap-1.5 transition-all hover:shadow-[0_8px_16px_rgba(242,135,5,0.4)] hover:-translate-y-0.5 hover:bg-[#d97706] no-underline animate-[pulse_2s_infinite] shadow-[0_4px_10px_rgba(242,135,5,0.2)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Comprar
          </a>
          
          {/* CTA PRIMARIO: DETALLES */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("[DEBUG] Galería de colores clickeada. Abriendo modal...");
              setIsModalOpen(true);
            }}
            className="bg-white border border-[#F28705] text-[#F28705] py-3.5 px-1 rounded-xl font-bold text-[11px] flex justify-center items-center transition-all shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(242,135,5,0.2)] hover:bg-orange-50 cursor-pointer text-center w-full leading-tight"
          >
            Galería de fotos
          </button>
        </div>

      </div>
    </div>

      {/* MODAL DEL PRODUCTO */}
      {isModalOpen && mounted && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            
            {/* Header / Cerrar */}
            <div className="flex justify-end p-4 pb-0">
              <button onClick={() => setIsModalOpen(false)} className="bg-slate-100 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-slate-500 hover:bg-slate-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            {/* Ocultar WhatsApp Button en Mobile */}
            <style>{`
              @media (max-width: 768px) {
                a[aria-label="WhatsApp Support"] {
                  display: none !important;
                }
              }
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            
            {/* Contenido (2 columnas) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
              
              {/* Columna Izquierda: Galería */}
              <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col gap-3 h-max">

                {/* Thumbnails verticales + Imagen Principal */}
                <div className="flex gap-2">
                  {/* Thumbnails verticales — siempre visibles si hay más de 1 imagen */}
                  {rawImages.length > 1 && (
                    <div className="flex flex-col gap-1.5 w-12 sm:w-16 shrink-0 max-h-[360px] overflow-y-auto no-scrollbar">
                      {rawImages.map((img, i) => (
                        <img
                          key={i}
                          src={getImageUrl(img)}
                          alt={`${name} thumb ${i}`}
                          onClick={() => setModalImageIdx(i)}
                          className={`w-full aspect-square object-cover rounded-lg cursor-pointer border-2 transition-all ${modalImageIdx === i ? 'border-[#F28705] shadow-md' : 'border-transparent hover:border-slate-300'}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Contenedor de Imagen y Colores */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Imagen Principal — Carrusel deslizable */}
                    <div
                      ref={carouselRef}
                      className="bg-white rounded-xl overflow-x-auto snap-x snap-mandatory flex no-scrollbar w-full aspect-square"
                      onScroll={(e) => {
                        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                        scrollTimeout.current = setTimeout(() => {
                          const el = e.target;
                          const idx = Math.round(el.scrollLeft / el.clientWidth);
                          if (idx !== modalImageIdx) {
                            setModalImageIdx(idx);
                            const matchingColorIdx = parsedColors.findIndex(c => {
                              if (!c.image_url) return false;
                              const exactIdx = rawImages.findIndex(img => img === c.image_url || getImageUrl(img) === c.image_url);
                              return exactIdx === idx;
                            });
                            if (matchingColorIdx !== -1) setSelectedColorIdx(matchingColorIdx);
                          }
                        }, 50);
                      }}
                    >
                      {rawImages.length > 0 ? rawImages.map((img, i) => (
                        <div key={i} className="flex-none w-full h-full relative snap-center">
                          <img src={getImageUrl(img)} alt={`${name} ${i}`} className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                      )) : (
                        <div className="flex-none w-full h-full relative snap-center">
                          <img src={mainImage} alt={name} className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                      )}
                    </div>

                    {/* COLORES — Debajo de la imagen principal */}
                    {parsedColors.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider m-0">Elige tu color</p>
                        <div className="flex gap-3 items-center flex-wrap">
                          {parsedColors.map((color, idx) => {
                            let linkedIdx = 0;
                            if (color.image_url) {
                              const exactIdx = rawImages.findIndex(img => img === color.image_url || getImageUrl(img) === color.image_url);
                              if (exactIdx !== -1) linkedIdx = exactIdx;
                            }
                            const isSelected = selectedColorIdx === idx;
                            return (
                              <div
                                key={idx}
                                className="cursor-pointer flex flex-col items-center gap-1"
                                onClick={() => {
                                  setSelectedColorIdx(idx);
                                  setModalImageIdx(linkedIdx);
                                }}
                              >
                                <div
                                  className="transition-transform hover:scale-110"
                                  style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: color.hex,
                                    border: isSelected ? '3px solid #F28705' : '3px solid white',
                                    boxShadow: isSelected
                                      ? '0 0 0 2px #F28705, 0 4px 8px rgba(0,0,0,0.15)'
                                      : '0 0 0 2px #cbd5e1, 0 4px 6px rgba(0,0,0,0.08)',
                                    transition: 'all 0.2s ease'
                                  }}
                                />
                                <span className="text-[9px] font-bold text-slate-500 text-center max-w-[44px] leading-tight">
                                  {color.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Detalles */}
              <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col gap-4 pb-0 flex-1 min-h-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase leading-tight mb-2">
                    {name}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    {technicalSummary}
                  </p>
                </div>
                
                <div className="text-4xl font-black text-[#F28705] border-b border-slate-100 pb-4">
                  <small className="text-xl align-top opacity-80 mr-1">Ref</small>
                  {parseFloat(price).toLocaleString('es-VE')}
                </div>

                <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 no-scrollbar min-h-[100px]">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">Detalles Adicionales</h4>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap m-0">
                      {product?.description || "Consulta con nuestro asesor para conocer las opciones de color, dimensiones exactas y tiempos de entrega."}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-2 pt-2">
                  <a 
                    href={`https://wa.me/584248948664?text=${encodeURIComponent(`Hola, me encantó el modelo ${name} que vi en la web. ¡Quiero más detalles!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F28705] text-white border-none py-4 px-6 rounded-xl font-black text-sm uppercase flex items-center justify-center gap-2 hover:bg-[#d97706] transition-colors no-underline shadow-lg shadow-orange-500/20"
                  >
                    ¡Comprar por WhatsApp! 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  <p className="text-center text-xs text-slate-400 mt-3 font-medium">Asesoramiento personalizado e inmediato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </>
  );
}
