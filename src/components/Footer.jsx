export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#F2F2F2] font-body-md text-sm">
      <div className="max-w-[1280px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <img 
            alt="Practiiko Logo" 
            className="h-14 w-auto mb-4 block hover:opacity-80 transition-opacity cursor-pointer" 
            src="/logo.webp" 
          />
          <p className="text-slate-500 mb-6 max-w-xs">Transformando hogares con muebles de diseño inteligente, accesibles y listos para disfrutar.</p>
        </div>
        <div className="md:justify-self-end">
          <h4 className="font-bold text-[#0477BF] mb-6">Explorar</h4>
          <nav className="flex flex-col gap-4">
            <a className="text-slate-500 hover:text-[#F28705] hover:translate-x-1 transition-all inline-block" href="/terminos">Términos y Condiciones</a>
            <a className="text-slate-500 hover:text-[#F28705] hover:translate-x-1 transition-all inline-block" href="/privacidad">Aviso de Privacidad</a>
          </nav>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-8 py-6 border-t border-gray-300 text-center">
        <p className="text-slate-500">© 2024 Practiiko. Muebles de diseño, entregados en una caja.</p>
      </div>
    </footer>
  );
}
