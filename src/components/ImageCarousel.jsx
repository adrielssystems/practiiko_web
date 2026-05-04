export default function ImageCarousel() {
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
    <section className="py-12 bg-white overflow-hidden group">
      <div className="relative w-full">
        {/* Infinite scroll wrapper */}
        <div className="flex w-fit animate-infinite-scroll group-hover:pause">
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="px-3 w-[280px] md:w-[350px] shrink-0"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0477BF]/10 transition-all duration-700 relative group/item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
