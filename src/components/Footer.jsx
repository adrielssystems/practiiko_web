import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#F2F2F2] font-body-md text-sm">
      <div className="max-w-[1280px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <Link href="/">
            <img 
              alt="Practiiko Logo" 
              className="h-14 w-auto mb-4 block hover:opacity-80 transition-opacity cursor-pointer" 
              src="/logo.webp" 
            />
          </Link>
          <p className="text-slate-500 mb-6 max-w-xs">Transformando hogares con muebles de diseño inteligente, accesibles y listos para disfrutar.</p>
        </div>
        <div className="md:justify-self-center">
          <h4 className="font-bold text-[#0477BF] mb-6">Explorar</h4>
          <nav className="flex flex-col gap-4">
            <a className="text-slate-500 hover:text-[#F28705] hover:translate-x-1 transition-all inline-block" href="/terminos">Términos y Condiciones</a>
            <a className="text-slate-500 hover:text-[#F28705] hover:translate-x-1 transition-all inline-block" href="/privacidad">Aviso de Privacidad</a>
          </nav>
        </div>
        <div className="md:justify-self-end">
          <h4 className="font-bold text-[#0477BF] mb-6">Conéctate con nosotros</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/practiiko?igsh=dWtqaGUxbW80M3E2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white text-[#0477BF] h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#F28705] hover:text-white hover:-translate-y-1 transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1CJAtpEkn8/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white text-[#0477BF] h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#F28705] hover:text-white hover:-translate-y-1 transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@practiiko?_r=1&_t=ZS-964xlDIHFyO" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-white text-[#0477BF] h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#F28705] hover:text-white hover:-translate-y-1 transition-all shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.61-.6 3.16-1.7 4.31-1.1 1.15-2.6 1.83-4.2 1.95-1.6.12-3.2-.23-4.56-1.02-1.35-.79-2.4-1.99-2.96-3.41-.56-1.42-.6-3.01-.11-4.46.49-1.45 1.44-2.66 2.7-3.45 1.25-.79 2.78-1.09 4.3-.85v4.06c-.66-.1-1.34-.04-1.96.2-.62.24-1.17.65-1.55 1.16-.38.51-.57 1.14-.54 1.78.03.64.28 1.25.72 1.72.44.47 1.05.77 1.69.86.64.09 1.3-.02 1.88-.3.58-.28 1.05-.73 1.35-1.28.3-.55.45-1.19.42-1.84V.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Ubicación / Mapa */}
      <div className="max-w-[1280px] mx-auto px-8 pb-12">
        <h4 className="font-bold text-[#0477BF] mb-6 text-center">Nuestra Ubicación</h4>
        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200" style={{ height: '300px' }}>
          <iframe 
            src="https://maps.google.com/maps?q=10.969919,-63.8512784&hl=es&z=17&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Practiiko"
          ></iframe>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 py-6 border-t border-gray-300 text-center">
        <p className="text-slate-500">© 2024 Practiiko. Muebles de diseño, entregados en una caja.</p>
      </div>
    </footer>
  );
}
