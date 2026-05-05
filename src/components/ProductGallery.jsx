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
    console.error("Error fetching gallery data:", e);
    return [];
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


