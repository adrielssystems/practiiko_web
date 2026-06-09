"use client";
import { useState, useEffect } from "react";
import { getImageUrl } from "@/lib/utils";

export default function ImageModal({ isOpen, onClose, mediaList, initialIndex, title }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex || 0);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(initialIndex || 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-50">
        <button onClick={onClose} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      <div className="absolute top-6 left-6 z-50 text-white max-w-[70%]">
        <h3 className="font-headline-md text-xl md:text-3xl drop-shadow-md">{title}</h3>
      </div>

      <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center p-4 md:p-12">
        <div 
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
           {mediaList.map((item, idx) => (
             <div 
               key={idx} 
               className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
             >
               {item.type === 'video' ? (
                 <video 
                   src={getImageUrl(item.url)}
                   controls
                   autoPlay
                   className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                 />
               ) : (
                 <img 
                   src={getImageUrl(item.url)} 
                   alt={`Gallery ${idx + 1}`}
                   className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                 />
               )}
             </div>
           ))}
           
           {mediaList.length > 1 && (
             <>
               <button 
                 onClick={handlePrev}
                 className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 w-14 h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center z-30 transition-all border border-white/10 cursor-pointer"
               >
                 <span className="material-symbols-outlined text-3xl">chevron_left</span>
               </button>
               <button 
                 onClick={handleNext}
                 className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 w-14 h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center z-30 transition-all border border-white/10 cursor-pointer"
               >
                 <span className="material-symbols-outlined text-3xl">chevron_right</span>
               </button>
               
               <div className="absolute -bottom-8 md:bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/50 px-4 py-2 rounded-full">
                  {mediaList.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-6 bg-[#F28705]' : 'w-2 bg-white/50 hover:bg-white'}`}
                    />
                  ))}
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
}
