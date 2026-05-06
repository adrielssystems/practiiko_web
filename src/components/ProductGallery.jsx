import { query } from "@/lib/db";
import ProductGalleryClient from "./ProductGalleryClient";

async function getGalleryData() {
  try {
    const productsRes = await query(`
      SELECT p.*, c.name as category_name, 
             (SELECT url FROM product_images WHERE product_id = p.id AND is_main = true LIMIT 1) as main_image
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.status = 'active'
      AND (
        COALESCE(p.tags, '[]'::jsonb) @> '["Best Seller"]'::jsonb 
        OR COALESCE(p.is_featured, false) = true
      )
      ORDER BY p.created_at DESC
    `);

    return productsRes.rows;
  } catch (e) {
    console.error("Error fetching gallery data, using mock data:", e);
    // Mock data for local development
    return [
      { id: 1, name: "Sofá Modular Cloud", price_cash: 1200, main_image: "/hero-sofa.png", category_name: "Salas" },
      { id: 2, name: "Silla Ergonómica Pro", price_cash: 450, main_image: "/hero-sofa.png", category_name: "Oficina" },
      { id: 3, name: "Cama King Size", price_cash: 800, main_image: "/hero-sofa.png", category_name: "Dormitorio" }
    ];
  }
}

export default async function ProductGallery() {
  const products = await getGalleryData();

  if (products.length === 0) return null;

  return (
    <section id="productos" className="py-32 bg-[#F9FBFC] overflow-hidden">
      <ProductGalleryClient 
        initialProducts={products} 
      />
    </section>
  );
}


