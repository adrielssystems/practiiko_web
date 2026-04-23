import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = generateSEO({
  title: "Inicio",
  description: "Bienvenido a Practtiko, la solución definitiva para la autogestión de tu presencia web.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${outfit.variable}`}>
      <body>
        <main className="animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
