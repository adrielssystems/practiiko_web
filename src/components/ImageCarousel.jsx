"use client";
import { useState } from 'react';

export default function ImageCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/carrusel1.avif', alt: 'Colección Practiiko 1' },
    { src: '/carrusel2.avif', alt: 'Colección Practiiko 2' },
    { src: '/carrusel3.avif', alt: 'Colección Practiiko 3' },
    { src: '/carrusel4.avif', alt: 'Colección Practiiko 4' },
    { src: '/carrusel5.avif', alt: 'Colección Practiiko 5' },
    { src: '/carrusel6.jpg', alt: 'Colección Practiiko 6' },
    { src: '/carrusel7.webp', alt: 'Colección Practiiko 7' },
  ];

  // Double the images array to create a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <section className="py-12 bg-white overflow-hidden">
        <div className="relative w-full">
          {/* Infinite scroll wrapper */}
          <div 
            className="flex w-fit animate-infinite-scroll"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {duplicatedImages.map((image, index) => (
              <div 
                key={index} 
                className="px-3 w-[280px] md:w-[350px] shrink-0"
              >
                <div 
                  className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0477BF]/10 transition-all duration-700 relative group/item cursor-pointer"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
                  />
                  {/* Subtle overlay with zoom icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full transform scale-50 group-hover/item:scale-100 transition-transform duration-500">
                      <span className="material-symbols-outlined text-white text-xl">zoom_in</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
            <button 
              className="absolute top-0 right-0 md:-right-12 md:-top-12 text-white hover:text-[#F28705] p-2 transition-colors z-[101] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
