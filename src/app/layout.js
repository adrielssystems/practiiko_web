import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = generateSEO({
  title: "Practiiko | Lujo Modular",
  description: "Es lujo, es simple, es Practiiko. El sofá que cobra vida en tu hogar con la elegancia de una galería táctil.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: 'var(--font-manrope)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <main className="animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
