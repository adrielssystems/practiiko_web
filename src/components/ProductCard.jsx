"use client";
import { useState } from "react";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

export default function ProductCard({ product }) {
  const [activeBadge, setActiveBadge] = useState(null);

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
  const likes = product?.likes_count || 124;
  const views = product?.views_count || 1580;
  const sales = product?.sales_count || 42;
  
  const interactiveBadges = product?.interactive_badges || [
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
        
        {/* LIFESTYLE BADGE */}
        {badgeText && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            {badgeText}
          </div>
        )}

        {/* SOCIAL STATS OVERLAY (Bottom of image) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-8 pb-3 px-4 flex justify-between items-center text-white z-20">
          <div className="flex gap-3 text-[11px] font-bold tracking-wide">
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
               {views}
            </span>
            <span className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
               {sales}
            </span>
          </div>
          <button className="bg-white/20 backdrop-blur-sm border-none rounded-full w-8 h-8 flex items-center justify-center text-white cursor-pointer transition-colors hover:bg-white/40">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
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
            className="bg-white border-2 border-slate-900 text-slate-900 py-3.5 px-2 rounded-xl font-black text-xs uppercase text-center flex items-center justify-center transition-colors hover:bg-slate-50 no-underline"
          >
            Comprar
          </a>
          
          {/* CTA PRIMARIO: DETALLES */}
          {/* Suponiendo que el slug o ID apuntan a la página de detalle */}
          <Link 
            href={`/producto/${product?.slug || product?.id}`}
            className="bg-slate-900 border-none text-white py-3.5 px-2 rounded-xl font-bold text-xs flex justify-center items-center gap-1.5 transition-all shadow-[0_8px_16px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(15,23,42,0.3)] no-underline"
          >
            Transformar mi espacio 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>

      </div>
    </div>
  );
}
