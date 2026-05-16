import { Noto_Serif, Manrope, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/lib/seo";
import { GoogleTagManager } from '@next/third-parties/google';

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = generateSEO({
  title: "Muebles Premium y Sofás en Caja en Margarita y Venezuela",
  description: "Compra muebles de lujo online en Practiiko. Recibe sofás de diseño y colchones premium en formato compacto con envío GRATIS en la Isla de Margarita. ¡Es lujo, es simple!",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable} ${plusJakartaSans.variable} ${workSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  "on-tertiary": "#ffffff",
                  "inverse-surface": "#2d3136",
                  "on-primary-fixed": "#001d34",
                  "on-error": "#ffffff",
                  "tertiary-container": "#af5d01",
                  "surface-container-highest": "#e0e2e9",
                  "error": "#ba1a1a",
                  "tertiary-fixed-dim": "#ffb77f",
                  "on-primary-fixed-variant": "#004a79",
                  "surface-container-low": "#f1f3fa",
                  "on-surface": "#181c21",
                  "primary-fixed": "#d0e4ff",
                  "outline": "#707882",
                  "on-tertiary-container": "#fff8f5",
                  "on-tertiary-fixed-variant": "#6f3900",
                  "surface-variant": "#e0e2e9",
                  "background": "#f8f9ff",
                  "on-secondary-fixed": "#2b1700",
                  "tertiary-fixed": "#ffdcc4",
                  "on-primary-container": "#f8f9ff",
                  "surface-tint": "#00629f",
                  "secondary-fixed": "#ffddbb",
                  "inverse-primary": "#9bcbff",
                  "inverse-on-surface": "#eef1f7",
                  "on-primary": "#ffffff",
                  "error-container": "#ffdad6",
                  "primary-container": "#0477bf",
                  "surface-dim": "#d7dae0",
                  "on-error-container": "#93000a",
                  "surface-bright": "#f8f9ff",
                  "secondary-fixed-dim": "#ffb867",
                  "on-secondary": "#ffffff",
                  "outline-variant": "#c0c7d2",
                  "secondary": "#885200",
                  "on-secondary-container": "#704300",
                  "surface-container-high": "#e6e8ef",
                  "secondary-container": "#fead4a",
                  "on-background": "#181c21",
                  "tertiary": "#8b4900",
                  "on-surface-variant": "#404751",
                  "surface-container": "#ebeef4",
                  "primary": "#005e98",
                  "surface-container-lowest": "#ffffff",
                  "primary-fixed-dim": "#9bcbff",
                  "on-secondary-fixed-variant": "#673d00",
                  "surface": "#f8f9ff",
                  "on-tertiary-fixed": "#2f1500"
                },
                borderRadius: {
                  "DEFAULT": "0.25rem",
                  "lg": "0.5rem",
                  "xl": "0.75rem",
                  "full": "9999px"
                },
                spacing: {
                  "sm": "12px",
                  "container-max": "1280px",
                  "lg": "48px",
                  "base": "8px",
                  "md": "24px",
                  "gutter": "24px",
                  "xs": "4px",
                  "xl": "80px"
                },
                fontFamily: {
                  "headline-lg": ["Plus Jakarta Sans"],
                  "body-md": ["Work Sans"],
                  "display-xl": ["Plus Jakarta Sans"],
                  "headline-md": ["Plus Jakarta Sans"],
                  "label-bold": ["Work Sans"],
                  "button": ["Plus Jakarta Sans"],
                  "body-lg": ["Work Sans"]
                },
                fontSize: {
                  "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                  "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                  "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                  "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                  "label-bold": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600"}],
                  "button": ["16px", {"lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "600"}],
                  "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                }
              }
            }
          }
        ` }} />
      </head>
      <body style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <main className="animate-fade-in">
          {children}
        </main>
        <GoogleTagManager gtmId="GTM-MX6BZTQJ" />
      </body>
    </html>
  );
}
