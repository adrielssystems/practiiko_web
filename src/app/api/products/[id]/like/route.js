import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;
  
  if (!id) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
  }

  try {
    const result = await query(
      "UPDATE products SET likes_count = likes_count + 1 WHERE id = $1 RETURNING likes_count",
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, likes_count: result.rows[0].likes_count });
  } catch (error) {
    console.error("Error liking product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
