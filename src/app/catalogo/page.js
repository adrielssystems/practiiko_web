import { query } from "@/lib/db";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProducts() {
  try {
    const res = await query(`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.status = 'active'
      ORDER BY p.created_at DESC
    `);
    return res.rows;
  } catch (e) {
    console.error("Error fetching products:", e);
    return [];
  }
}

export default async function CatalogoPage() {
  const products = await getProducts();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <TopNavBar />

      <main className="pt-28 pb-24 flex-grow bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-xs mb-4 uppercase tracking-wider">
              NUESTRA COLECCIÓN
            </span>
            <h1 className="font-headline-lg text-headline-lg text-[#0477BF]">
              Catálogo de Muebles
            </h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl">
              Explora nuestra línea completa de muebles de diseño. Encuentra la pieza perfecta para transformar tu espacio con estilo y comodidad.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
              <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">inventory_2</span>
              <h3 className="text-xl font-headline-md text-gray-500">Aún no hay productos disponibles en el catálogo</h3>
              <p className="text-gray-400 mt-2">Vuelve más tarde para descubrir nuestras nuevas colecciones.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((prod) => {
                // Determine main image or fallback
                let mainImage = "/hero-sofa.png"; // Fallback
                return (
                  <div key={prod.id} className="bg-white border border-[#E0E0E0] rounded-3xl overflow-hidden hover:border-transparent hover:shadow-[0_15px_40px_rgba(4,119,191,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col cursor-pointer">
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-50 p-6 flex-shrink-0 flex items-center justify-center">
                      <img 
                        alt={prod.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                        src={mainImage} 
                      />
                      {prod.category_name && (
                        <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                          {prod.category_name}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <h4 className="font-headline-md text-lg group-hover:text-[#0477BF] transition-colors duration-300 line-clamp-2">
                          {prod.name}
                        </h4>
                      </div>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 flex-1">
                        {prod.description || "Sin descripción disponible."}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-headline-lg text-xl text-[#0477BF]">
                          ${parseFloat(prod.price_cash || 0).toLocaleString()}
                        </span>
                        <button className="text-[#0477BF] font-button text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                          Ver <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
