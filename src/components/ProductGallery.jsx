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
      ORDER BY p.is_featured DESC, p.created_at DESC
    `);

    const categoriesRes = await query("SELECT * FROM categories ORDER BY name ASC");

    return {
      products: productsRes.rows,
      categories: categoriesRes.rows
    };
  } catch (e) {
    console.error("Error fetching gallery data:", e);
    return { products: [], categories: [] };
  }
}

export default async function ProductGallery() {
  const { products, categories } = await getGalleryData();

  if (products.length === 0) return null;

  return (
    <section id="productos" className="py-32 bg-[#F9FBFC] overflow-hidden">
      <ProductGalleryClient 
        initialProducts={products} 
        categories={categories} 
      />
    </section>
  );
}


