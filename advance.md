# Registro de Desarrollo y Cambios - Practiiko

Este archivo sirve como memoria persistente para llevar el control diario de los avances, cambios de diseño (UI/UX) y correcciones (fixes) realizados en el proyecto.

## 2026-05-03
### Tareas Completadas
* **Migración y Maquetación (Landing Page)**:
  * Conversión exitosa del diseño de la landing page de *Stitch* a la arquitectura de **Next.js** (App Router).
  * Refactorización del archivo `page.js` para incluir las secciones: Hero, Differentiators, Offer Banner, Product Gallery y Logística Inteligente.
* **Sistema de Diseño (Tailwind CSS)**:
  * Implementación de paleta de colores de la marca (Principal: `#0477BF`, Secundario: `#F28705`).
  * Integración de las familias tipográficas oficiales (*Plus Jakarta Sans* y *Work Sans*).
* **Gestión de Assets (Imágenes)**:
  * Incorporación del logo oficial de la marca (`logo.jpg`) en el TopNavBar con ajustes de proporciones para mayor legibilidad.
  * Actualización de la imagen principal del hero (`hero-sofa.png`) al formato correcto.
  * Integración de 4 imágenes reales en la sección "Colección de Muebles Destacados":
    1. Sofá Cama Nórdico (`product-nordico.jpg`)
    2. Sofá Curvo Sunset (`product-sunset.jpg`)
    3. Poltrona Botánica (`product-botanica.jpg`)
    4. Sillón Pétalo Rose (`product-rose.jpg`)

### Tareas Completadas (Actualización)
* **Refinamiento de interacciones y enlaces**:
  * Implementación de efectos *hover*, transiciones suaves y estados activos en los enlaces de navegación, botones y tarjetas de productos.
  * Añadidas animaciones en elementos de la interfaz (ej. zoom al pasar el cursor sobre imágenes, efectos de elevación con sombra).
* **Modularización de componentes**:
  * Refactorización exitosa de `page.js`. Extracción de las secciones a la carpeta `src/components/`.
  * Componentes creados: `TopNavBar.jsx`, `HeroSection.jsx`, `Differentiators.jsx`, `OfferBanner.jsx`, `ProductGallery.jsx`, `LogisticsSection.jsx`, `ErgonomicsSection.jsx`, `Footer.jsx` y `WhatsAppButton.jsx`.

### Próximos Pasos (Pendientes)
* Integrar funcionalidades de carrito de compras o enlaces dinámicos a productos.
* Optimizar SEO y metadatos de las páginas.
* Pruebas de rendimiento y accesibilidad.
