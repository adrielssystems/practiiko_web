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
  const baseUrl = "https://practiiko.com";
  const fullTitle = title ? `${title} | Practiiko` : "Practiiko | Muebles Premium en Caja en Venezuela y Margarita";
  
  return {
    title: fullTitle,
    description: description || "Descubre Practiiko: Muebles de diseño de alta gama que llegan en caja a toda Venezuela. Especialistas en sofás y colchones premium con envío exclusivo en la Isla de Margarita.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: `${baseUrl}${path}`,
      siteName: "Practiiko",
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
    icons: {
      icon: "/favicon Practiiko.png",
      shortcut: "/favicon Practiiko.png",
      apple: "/favicon Practiiko.png",
    },
  };
}
