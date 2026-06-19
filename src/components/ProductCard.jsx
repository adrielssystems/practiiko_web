"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

export default function ProductCard({ product }) {
  const [activeBadge, setActiveBadge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const name = product?.name || "SOFÁ MODULAR ZEN";
  
  // Use first image or main image
  const rawImages = product?.images || [];
  let mainImage = product?.main_image || "/hero-sofa.png";
  if (rawImages.length > 0 && !product?.main_image) {
    mainImage = rawImages[0];
  }
  mainImage = getImageUrl(mainImage);

  const price = product?.price_cash || 0;
  const technicalSummary = product?.technical_summary || "Espuma de alta densidad / Tela premium antimanchas";
  const badgeText = product?.badge_text || "Diseño Inteligente: Llega a tu puerta";
  const likes = product?.likes_count || 0;
  const views = product?.views_count || 0;
  const sales = product?.sales_count || 0;
  
  const interactiveBadges = Array.isArray(product?.interactive_badges) ? product.interactive_badges : [
    { title: "Garantía", text: "5 años de garantía sobre defectos estructurales." },
    { title: "Cuidado", text: "Fundas lavables en máquina con agua fría." }
  ];

  return (
    <div className="w-full max-w-[380px] mx-auto bg-white rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.05)] font-sans relative transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)]">
      
      {/* HEADER IMAGE SECTION (1x1) */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden group/media">
        <img 
          src={mainImage} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        
        {/* LIFESTYLE BADGE (MEDALLA DORADA) */}
        {product?.show_badge !== false && badgeText && (
          <div className="absolute top-4 left-4 w-[86px] h-[86px] rounded-full bg-gradient-to-br from-[#FFE77A] via-[#E5B13A] to-[#B88012] border-2 border-[#FFDF73] shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center p-2 z-20">
            <span className="text-[10px] font-black text-[#3E2723] leading-[1.1] text-center [text-shadow:0_1px_1px_rgba(255,255,255,0.4)]">
              {badgeText}
            </span>
          </div>
        )}

        {/* SOCIAL STATS OVERLAY (Bottom of image) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-8 pb-3 px-4 flex justify-between items-center text-white z-20">
          <div className="flex gap-3 text-[11px] font-bold tracking-wide">
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F28705]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
               {views}
            </span>
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F28705]"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
               {sales}
            </span>
          </div>
          <button className="bg-white/20 backdrop-blur-sm border-none rounded-full px-3 h-8 flex items-center justify-center gap-1.5 text-white cursor-pointer transition-colors hover:bg-white/40">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F28705]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span className="text-[11px] font-bold">{likes}</span>
          </button>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col gap-4">
        
        {/* TITLE & DESC */}
        <div>
          <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 m-0 leading-[1.2] mb-1">
            {name}
          </h2>
          <p className="text-xs text-slate-500 m-0 font-medium">
            {technicalSummary}
          </p>
        </div>

        {/* PRICE */}
        <div className="flex items-start mt-1">
          <span className="text-3xl font-black text-[#d97706] leading-none [text-shadow:2px_2px_4px_rgba(0,0,0,0.25)]">
            <small className="text-base align-top opacity-80 mr-1 [text-shadow:none]">Ref</small>
            {parseFloat(price).toLocaleString('es-VE')}
          </span>
        </div>

        {/* INTERACTIVE BADGES */}
        <div className="flex gap-2 flex-wrap mt-1">
          {interactiveBadges.map((badge, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveBadge(activeBadge === idx ? null : idx)}
              className={`border-none px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase flex items-center gap-1 cursor-pointer transition-colors ${activeBadge === idx ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {badge.title}
            </button>
          ))}
        </div>

        {/* POPOVER TOOLTIP */}
        {activeBadge !== null && (
          <div className="bg-slate-900 text-white p-3 rounded-xl text-xs relative animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between mb-1">
              <strong className="uppercase tracking-widest">{interactiveBadges[activeBadge].title}</strong>
              <button onClick={() => setActiveBadge(null)} className="text-white/70 hover:text-white bg-transparent border-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="m-0 opacity-90 leading-relaxed">{interactiveBadges[activeBadge].text}</p>
          </div>
        )}

        {/* CTAs */}
        <div className="grid grid-cols-[1fr_1.5fr] gap-3 mt-2">
          {/* CTA SECUNDARIO: WHATSAPP */}
          <a 
            href={`https://wa.me/584248948664?text=${encodeURIComponent(`Hola, vengo de la pagina web y me interesa el modelo: ${product?.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-[#F28705] text-[#F28705] py-3.5 px-2 rounded-xl font-black text-xs uppercase text-center flex items-center justify-center transition-colors hover:bg-[#fff7ed] no-underline"
          >
            Comprar
          </a>
          
          {/* CTA PRIMARIO: DETALLES */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F28705] border-none text-white py-3.5 px-2 rounded-xl font-bold text-xs flex justify-center items-center gap-1.5 transition-all shadow-[0_8px_16px_rgba(242,135,5,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(242,135,5,0.4)] cursor-pointer text-center w-full"
          >
            Transformar mi espacio 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>

      {/* MODAL DEL PRODUCTO */}
      {isModalOpen && mounted && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            
            {/* Header / Cerrar */}
            <div className="flex justify-end p-4 pb-0">
              <button onClick={() => setIsModalOpen(false)} className="bg-slate-100 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-slate-500 hover:bg-slate-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            {/* Contenido (2 columnas) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
              
              {/* Columna Izquierda: Galería */}
              <div className="w-full md:w-[55%] flex gap-4 h-max">
                {/* Thumbnails (verticales) */}
                <div className="flex flex-col gap-2 w-16 md:w-20 shrink-0 max-h-[500px] overflow-y-auto pr-1">
                  {rawImages.length > 0 ? rawImages.map((img, i) => (
                    <img 
                      key={i} 
                      src={getImageUrl(img)} 
                      alt={`${name} thumb ${i}`} 
                      onClick={() => setModalImageIdx(i)}
                      className={`w-full aspect-square object-cover rounded-lg cursor-pointer border-2 transition-all ${modalImageIdx === i ? 'border-[#F28705]' : 'border-transparent hover:border-slate-300'}`} 
                    />
                  )) : (
                    <img src={mainImage} alt={name} className="w-full aspect-square object-cover rounded-lg border-2 border-[#F28705]" />
                  )}
                </div>
                
                {/* Imagen Principal */}
                <div className="flex-1 bg-slate-50 rounded-xl overflow-hidden aspect-square md:aspect-[4/3] relative">
                  <img src={rawImages.length > 0 ? getImageUrl(rawImages[modalImageIdx] || rawImages[0]) : mainImage} alt={name} className="absolute inset-0 w-full h-full object-contain mix-blend-multiply" />
                </div>
              </div>

              {/* Columna Derecha: Detalles */}
              <div className="w-full md:w-[45%] flex flex-col gap-6 pb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase leading-tight mb-2">
                    {name}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    {technicalSummary}
                  </p>
                </div>
                
                <div className="text-4xl font-black text-[#F28705] border-b border-slate-100 pb-6">
                  <small className="text-xl align-top opacity-80 mr-1">Ref</small>
                  {parseFloat(price).toLocaleString('es-VE')}
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">Detalles Adicionales</h4>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap m-0">
                      {product?.description || "Consulta con nuestro asesor para conocer las opciones de color, dimensiones exactas y tiempos de entrega."}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
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
    </div>
  );
}
