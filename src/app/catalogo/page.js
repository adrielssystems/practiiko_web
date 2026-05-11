import { query } from "@/lib/db";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogClient from "@/components/CatalogClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCatalogData() {
  const isDev = process.env.NODE_ENV === 'development';
  const hasDb = !!process.env.DATABASE_URL;

  if (isDev && !hasDb) {
    console.log("Local development: No DATABASE_URL found, using mock data.");
    return getMockData();
  }

  try {
    const productsRes = await query(`
      SELECT p.*, c.name as category_name,
             (SELECT url FROM product_images WHERE product_id = p.id AND is_main = true LIMIT 1) as main_image
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.status = 'active'
      ORDER BY p.created_at DESC
    `);
    
    const categoriesRes = await query("SELECT * FROM categories ORDER BY name ASC");

    return {
      products: productsRes.rows || [],
      categories: categoriesRes.rows || []
    };
  } catch (e) {
    console.error("Database query failed:", e.message);
    return getMockData();
  }
}

function getMockData() {
  return { 
    products: [
      { id: 1, name: "Sofá Cloud", price_cash: 1200, category_id: 1, category_name: "Salas", description: "Comodidad absoluta.", main_image: "/carrusel1.avif" },
      { id: 2, name: "Mesa Loft", price_cash: 250, category_id: 2, category_name: "Comedor", description: "Estilo industrial.", main_image: "/carrusel2.avif" },
      { id: 3, name: "Silla Nordic", price_cash: 150, category_id: 2, category_name: "Comedor", description: "Minimalismo puro.", main_image: "/carrusel3.avif" },
      { id: 4, name: "Cama Zen", price_cash: 950, category_id: 3, category_name: "Dormitorio", description: "Descanso profundo.", main_image: "/carrusel4.avif" }
    ], 
    categories: [
      { id: 1, name: "Salas" },
      { id: 2, name: "Comedor" },
      { id: 3, name: "Dormitorio" }
    ] 
  };
}

export default async function CatalogoPage() {
  const { products, categories } = await getCatalogData();

  return (
    <div className="relative font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-[-1] opacity-50 pointer-events-none"
        style={{ 
          backgroundImage: 'url("/fondo%20practiiko.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      <TopNavBar />

      <main className="pt-40 pb-32 flex-grow">
        <CatalogClient initialProducts={products} categories={categories} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

