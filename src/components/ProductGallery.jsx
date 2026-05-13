import { query } from "@/lib/db";
import ProductGalleryClient from "./ProductGalleryClient";

async function getGalleryData() {
  const isDev = process.env.NODE_ENV === 'development';
  const hasDb = process.env.DATABASE_URL;

  // Defensive check for local development without DB
  if (isDev && !hasDb) {
    return [
      { 
        id: 1, 
        name: "Sofá Abrazo de Mamá | Confort Premium Verde", 
        price_bcv: 630,
        price_cash: 630, 
        description: "Experimenta la máxima relajación con nuestro sofá individual de alta gama. Diseño ergonómico con espumas de alta densidad, ideal para salas modernas en Margarita. Calidad superior que llega en caja.",
        main_image: "/hero-sofa.png", 
        category_name: "Salas",
        is_featured: true,
        code: "PR-001"
      },
      { 
        id: 2, 
        name: "Sofá Cama Versátil Beige | Estilo y Funcionalidad", 
        price_bcv: 685,
        price_cash: 685, 
        description: "Optimiza tu espacio con este sofá cama premium de líneas rectas. Perfecto para apartamentos en la Isla de Margarita. Tapicería resistente y ensamble intuitivo sin herramientas.",
        main_image: "/hero-sofa.png", 
        category_name: "Sofá Cama",
        is_featured: true,
        code: "PR-002"
      },
      { 
        id: 3, 
        name: "Colchón Practiiko Premium 100x190 | Descanso Avanzado", 
        price_bcv: 325,
        price_cash: 325, 
        description: "Colchón ortopédico de espuma comprimida al vacío. Tecnología de soporte reforzado y textiles frescos. El mejor descanso en Margarita, entregado directamente en tu puerta.",
        main_image: "/hero-sofa.png", 
        category_name: "Colchón",
        is_featured: true,
        code: "PR-003"
      }
    ];
  }

  try {
    const productsRes = await query(`
      SELECT p.*, c.name as category_name, 
             (SELECT url FROM product_images WHERE product_id = p.id AND is_main = true LIMIT 1) as main_image
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.status = 'active'
      ORDER BY p.created_at DESC
      LIMIT 8
    `);

    if (productsRes && productsRes.rows) {
      return productsRes.rows;
    }
    throw new Error("No data returned from DB");
  } catch (e) {
    console.warn("Database connection failed, using fallback data for gallery:", e.message);
    
    // Mock data for local development
    return [
      { 
        id: 1, 
        name: "Sofá Abrazo Mamá Verde", 
        price_bcv: 630,
        price_cash: 630, 
        description: "Sofá individual, modelo Abrazo de Mamá, color Verde Claro. Diseño ergonómico y materiales de alta durabilidad.",
        main_image: "/hero-sofa.png", 
        category_name: "Salas",
        is_featured: true,
        code: "PR-001"
      },
      { 
        id: 2, 
        name: "Sofá Cama Beige Rectos", 
        price_bcv: 685,
        price_cash: 685, 
        description: "Sofá cama versátil con diseño de líneas rectas en color beige. Ideal para optimizar espacios sin sacrificar estilo.",
        main_image: "/hero-sofa.png", 
        category_name: "Sofá Cama",
        is_featured: true,
        code: "PR-002"
      },
      { 
        id: 3, 
        name: "Colchón Individual 100x190", 
        price_bcv: 325,
        price_cash: 325, 
        description: "Colchón de espuma comprimida con soporte reforzado y cubierta premium. Dimensiones: 100*190*35 cm.",
        main_image: "/hero-sofa.png", 
        category_name: "Colchón",
        is_featured: true,
        code: "PR-003"
      }
    ];
  }
}

export default async function ProductGallery() {
  const products = await getGalleryData();

  if (!products || products.length === 0) return null;

  return (
    <section id="productos" className="py-32 bg-transparent relative overflow-hidden">
      <ProductGalleryClient 
        initialProducts={products} 
      />
    </section>
  );
}
