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

## 2026-06-03
### Tareas Completadas
* **Renombrado e Internacionalización de Etiquetas**:
  * Actualización del título de la sección de galería principal en el landing page de `"Los más vendidos"` a `"Best Sellers"` (conservando el diseño de itálicas y color naranja).
  * Actualización del checkbox de selección en el panel de administración (`ProductForm.js`) de `"Lo más Vendido"` a `"Best Sellers"`.
* **Soporte de Múltiples Etiquetas Especiales y Nueva Etiqueta "Próximamente"**:
  * Creación y soporte de la etiqueta **"Próximamente"** (badge de color morado premium `#7c3aed` con animación y sombra).
  * Modificación de la regla de validación de etiquetas principales en el formulario del panel administrativo: ahora se permite asignar hasta **dos estados principales simultáneamente** (Nuevo, Promoción, Liquidación o Próximamente). Intentar marcar un tercero muestra un mensaje toast informativo y bloquea la acción.
  * Actualización de la consulta de base de datos SQL en creación (`new/page.js`) y edición (`[id]/edit/page.js`) para parsear e insertar/actualizar la columna `is_coming_soon`.
  * Integración de la etiqueta de previsualización de **"Próximamente"** en la tarjeta del panel de administración y en la web del catálogo (`ProductCard.jsx`).
* **Lógica de Prioridades en Galería de la Landing**:
  * Reestructuración del orden prioritario en la consulta SQL de `ProductGallery.jsx`. La prioridad de mayor a menor ahora es: `Próximamente` (1) ➔ `Nuevo` (2) ➔ `En Promoción` (3) ➔ `Liquidación` (4) ➔ `Best Sellers` (5 - si está solo). Si "Best Sellers" se combina con alguna otra etiqueta principal, asume la prioridad superior de su etiqueta acompañante.

### Pendientes y DDL
* Ejecución del script DDL en **DBgate** para producción y desarrollo:
  ```sql
  ALTER TABLE products ADD COLUMN is_coming_soon BOOLEAN DEFAULT FALSE;
  ```
