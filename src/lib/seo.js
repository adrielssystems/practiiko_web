/**
 * Utility for dynamic SEO metadata generation in Next.js App Router.
 */
export function generateSEO({
  title,
  description,
  path = "",
  image = "/hero-bg.jpg",
  noIndex = false,
}) {
  const baseUrl = "https://practiiko.com"; // User should update this when live
  const fullTitle = title ? `${title} | Practiiko` : "Practiiko | Muebles Premium en Caja en Venezuela y Margarita";
  const fullDescription = description || "Descubre Practiiko: Muebles de diseño de alta gama que llegan en caja a toda Venezuela. Especialistas en sofás y colchones premium con envío exclusivo en la Isla de Margarita.";
  const absoluteImageUrl = `${baseUrl}${image}`;
  
  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `${baseUrl}${path}`,
      siteName: "Practiiko",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: "Practiiko Premium Furniture",
        },
      ],
      locale: "es_VE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [absoluteImageUrl],
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
