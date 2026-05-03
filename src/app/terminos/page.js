import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones | Practiiko",
  description: "Términos y condiciones de uso y compra en Practiiko, conforme a las leyes venezolanas.",
};

export default function TerminosYCondiciones() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <TopNavBar />

      <main className="pt-32 pb-24 flex-grow bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline-lg text-4xl text-[#0477BF] mb-8 font-bold">
            Términos y Condiciones de Uso y Compra
          </h1>
          
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
            <p>
              Bienvenido a <strong>Practiiko</strong>. Al acceder y utilizar nuestro sitio web (landing.practiiko.com y sus subdominios), usted acepta estar sujeto a los siguientes Términos y Condiciones, los cuales se rigen por la legislación de la República Bolivariana de Venezuela, incluyendo la <em>Ley Orgánica de Precios Justos</em>, la <em>Ley sobre Mensajes de Datos y Firmas Electrónicas</em>, y demás normativas aplicables a la protección del consumidor y el comercio electrónico.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">1. Información General y Naturaleza del Servicio</h2>
            <p>
              Practiiko es una plataforma de comercio electrónico dedicada a la venta de mobiliario de diseño con logística inteligente (muebles en caja). Toda transacción realizada a través de esta plataforma constituye un contrato de compraventa electrónica validado por la Ley sobre Mensajes de Datos y Firmas Electrónicas vigente en Venezuela.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">2. Precios y Condiciones de Pago</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Todos los precios publicados están expresados tanto en la moneda de curso legal (Bolívares Digitales, Bs.) como en su equivalente referencial en divisas.</li>
              <li>Los pagos en Bolívares se calculan estrictamente utilizando la tasa de cambio oficial publicada por el <strong>Banco Central de Venezuela (BCV)</strong> el día en que se efectiviza la transacción.</li>
              <li>Aceptamos pagos mediante transferencias bancarias nacionales, pago móvil, y plataformas de pago electrónico autorizadas. La confirmación del pedido está sujeta a la validación de los fondos.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">3. Políticas de Envío y Entregas</h2>
            <p>
              Nuestro servicio de "Logística Inteligente" garantiza envíos optimizados a nivel nacional. 
              Los tiempos de entrega pueden variar según el destino y la disponibilidad de los servicios de encomienda nacionales (ej. MRW, Tealca, Zoom, o fletes privados). Practiiko no se hace responsable por retrasos imputables exclusivamente a las empresas de envío, sin embargo, garantizamos el acompañamiento durante todo el proceso de rastreo.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">4. Garantía y Política de Devoluciones</h2>
            <p>
              En apego a las normativas de la SUNDDE para la protección al consumidor, todos nuestros muebles cuentan con una garantía contra defectos de fábrica.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El cliente tiene derecho a solicitar la sustitución del producto o la reparación del mismo si presenta daños estructurales de fábrica dentro de los plazos legales establecidos desde la fecha de facturación.</li>
              <li>Nuestra promesa de "100% Satisfacción Total" permite el inicio de un proceso de evaluación si el mueble no cumple con la descripción expuesta en el portal. El producto debe ser devuelto con su empaque original (caja) y sin signos de uso indebido.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">5. Privacidad y Manejo de Datos (Habeas Data)</h2>
            <p>
              Los datos personales recolectados durante la compra serán utilizados única y exclusivamente para fines de facturación, logística de envío y comunicaciones relacionadas con su pedido. Practiiko se compromete a no vender ni ceder su información a terceros sin su consentimiento explícito, garantizando el derecho a la privacidad establecido en la Constitución Nacional.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">6. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en el sitio web. El uso continuo del sitio constituye la aceptación de dichas modificaciones.
            </p>
            
            <p className="mt-8 text-sm text-gray-500">
              Última actualización: Mayo de 2026. Para cualquier disputa legal, las partes se someten a la jurisdicción de los tribunales competentes en la República Bolivariana de Venezuela.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
