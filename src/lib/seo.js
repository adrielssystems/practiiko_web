/**
 * Utility for dynamic SEO metadata generation in Next.js App Router.
 */
export function generateSEO({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  noIndex = false,
}) {
  const baseUrl = "https://practtiko.com"; // Replace with actual domain
  const fullTitle = title ? `${title} | Practtiko` : "Practtiko - Gestión Inteligente";
  
  return {
    title: fullTitle,
    description: description || "Practtiko es la plataforma líder para la autogestión de servicios web con enfoque en eficiencia y diseño premium.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: `${baseUrl}${path}`,
      siteName: "Practtiko",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
