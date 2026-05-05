import { query } from "@/lib/db";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogClient from "@/components/CatalogClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCatalogData() {
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
      products: productsRes.rows,
      categories: categoriesRes.rows
    };
  } catch (e) {
    console.error("Error fetching catalog data:", e);
    return { products: [], categories: [] };
  }
}

export default async function CatalogoPage() {
  const { products, categories } = await getCatalogData();

  return (
    <div className="bg-[#FFFFFF] font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <TopNavBar />

      <main className="pt-40 pb-32 flex-grow">
        <CatalogClient initialProducts={products} categories={categories} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

