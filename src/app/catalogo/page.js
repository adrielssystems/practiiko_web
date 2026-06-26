import { query } from "@/lib/db";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogClient from "@/components/CatalogClient";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Catálogo de Muebles Premium | Sofás y Colchones en Margarita",
  description: "Explora nuestra colección exclusiva de muebles de vanguardia. Sofás, sofás cama y colchones premium con entrega inmediata en la Isla de Margarita y envíos a toda Venezuela.",
});

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function getCategoryOrderIndex(categoryName) {
  const name = (categoryName || "").toLowerCase().trim();
  
  if (name.includes("sofá cama") || name.includes("sofa cama") || name.includes("salas cama")) {
    return 1; // 2) Sofas Cama
  }
  if (name.includes("sofá") || name.includes("sofa") || name.includes("sala")) {
    return 0; // 1) Sofas
  }
  if (name.includes("colchón") || name.includes("colchon") || name.includes("colchones")) {
    return 2; // 3) Colchones
  }
  if (name.includes("accesorio") || name.includes("hogar") || name.includes("home")) {
    return 3; // 4) Accesorios para el Hogar
  }
  return 99; // Fallback
}

async function getCatalogData() {
  const isDev = process.env.NODE_ENV === 'development';
  const hasDb = !!process.env.DATABASE_URL;

  let products = [];
  let categories = [];

  if (isDev && !hasDb) {
    console.log("Local development: No DATABASE_URL found, using mock data.");
    const mock = getMockData();
    products = mock.products;
    categories = mock.categories;
  } else {
    try {
      const productsRes = await query(`
        SELECT p.*, c.name as category_name,
               (SELECT url FROM product_images WHERE product_id = p.id AND is_main = true LIMIT 1) as main_image,
               COALESCE((
                 SELECT json_agg(url ORDER BY sort_order ASC) 
                 FROM product_images 
                 WHERE product_id = p.id
               ), '[]'::json) as images
        FROM products p 
        LEFT JOIN categories c ON p.category_id = c.id 
        WHERE p.status = 'active' AND (p.stock > 0 OR p.is_coming_soon = true)
        ORDER BY p.created_at DESC
      `);
      
      const categoriesRes = await query("SELECT * FROM categories ORDER BY name ASC");

      products = productsRes.rows || [];
      categories = categoriesRes.rows || [];
    } catch (e) {
      console.error("Database query failed:", e.message);
      const mock = getMockData();
      products = mock.products;
      categories = mock.categories;
    }
  }

  // Sort products by category order index, preserving original relative order for items in the same category
  const sortedProducts = [...products].sort((a, b) => {
    const orderA = getCategoryOrderIndex(a.category_name);
    const orderB = getCategoryOrderIndex(b.category_name);
    return orderA - orderB;
  });

  // Sort categories by category order index
  const sortedCategories = [...categories].sort((a, b) => {
    const orderA = getCategoryOrderIndex(a.name);
    const orderB = getCategoryOrderIndex(b.name);
    return orderA - orderB;
  });

  return {
    products: sortedProducts,
    categories: sortedCategories
  };
}

function getMockData() {
  return { 
    products: [
      { id: 1, name: "Sofá Abrazo de Mamá | Confort Premium Verde", price_bcv: 630, price_cash: 630, category_id: 1, category_name: "Salas", description: "Experimenta la máxima relajación con nuestro sofá individual de alta gama. Diseño ergonómico con espumas de alta densidad, ideal para salas modernas en Margarita.", main_image: "/hero-sofa.png" },
      { id: 2, name: "Sofá Cama Versátil Beige | Estilo y Funcionalidad", price_bcv: 685, price_cash: 685, category_id: 2, category_name: "Sofá Cama", description: "Optimiza tu espacio con este sofá cama premium de líneas rectas. Perfecto para apartamentos en la Isla de Margarita. Tapicería resistente.", main_image: "/hero-sofa.png" },
      { id: 3, name: "Colchón Practiiko Premium 100x190 | Descanso Avanzado", price_bcv: 325, price_cash: 325, category_id: 3, category_name: "Colchón", description: "Colchón ortopédico de espuma comprimida al vacío. Tecnología de soporte reforzado y textiles frescos.", main_image: "/hero-sofa.png" }
    ], 
    categories: [
      { id: 1, name: "Salas" },
      { id: 2, name: "Sofá Cama" },
      { id: 3, name: "Colchón" }
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

      <main className="pt-24 md:pt-40 pb-32 flex-grow">
        <CatalogClient initialProducts={products} categories={categories} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

