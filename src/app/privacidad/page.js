import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso de Privacidad | Practiiko",
  description: "Políticas y aviso de privacidad de Practiiko, garantizando la protección de tus datos personales conforme a las leyes venezolanas.",
};

export default function AvisoPrivacidad() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      <TopNavBar />

      <main className="pt-32 pb-24 flex-grow bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline-lg text-4xl text-[#0477BF] mb-8 font-bold">
            Aviso de Privacidad
          </h1>
          
          <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
            <p>
              En <strong>Practiiko</strong>, valoramos su confianza y estamos profundamente comprometidos con la protección de su información personal. Este Aviso de Privacidad detalla cómo recopilamos, utilizamos, protegemos y gestionamos sus datos, en estricto apego al recurso de <em>Habeas Data</em> consagrado en el <strong>Artículo 28 de la Constitución de la República Bolivariana de Venezuela</strong>, así como lo dispuesto en la <em>Ley Especial Contra los Delitos Informáticos</em> y demás normativas que resguardan la privacidad electrónica.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">1. Recopilación de la Información</h2>
            <p>
              Para brindarle una experiencia de compra fluida en practiiko.com, recopilamos los siguientes tipos de datos personales cuando usted se registra, realiza una compra, se suscribe a nuestro boletín o se comunica con nuestro servicio de atención al cliente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de Identificación:</strong> Nombre, apellido, número de cédula de identidad o RIF (para propósitos de facturación).</li>
              <li><strong>Datos de Contacto:</strong> Correo electrónico, números de teléfono y dirección exacta de envío.</li>
              <li><strong>Datos Transaccionales:</strong> Información sobre métodos de pago (transferencias, pago móvil o pasarelas de pago), sin almacenar datos sensibles como claves o códigos de seguridad bancaria.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">2. Uso de los Datos</h2>
            <p>
              La información suministrada es utilizada única y exclusivamente para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesar, facturar y despachar sus pedidos de mobiliario a nivel nacional.</li>
              <li>Mantener comunicación sobre el estado de su envío o atender consultas post-venta.</li>
              <li>Cumplir con las obligaciones fiscales y tributarias exigidas por el SENIAT.</li>
              <li>Enviar boletines informativos o promociones exclusivas (sólo si ha dado su consentimiento expreso), de los cuales podrá darse de baja en cualquier momento.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">3. Protección y Confidencialidad (Ley de Delitos Informáticos)</h2>
            <p>
              Implementamos medidas de seguridad técnicas, físicas y administrativas diseñadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Está terminantemente prohibida la comercialización, alquiler o cesión de sus datos a terceros. Toda intrusión o vulneración externa será procesada según lo tipificado en la <em>Ley Especial Contra los Delitos Informáticos</em> de Venezuela.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">4. Compartir Información con Terceros</h2>
            <p>
              Sus datos solo serán compartidos estrictamente bajo los siguientes escenarios:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Logística:</strong> Con las empresas de encomienda o transporte (MRW, Tealca, fletes) únicamente para garantizar la entrega de su pedido.</li>
              <li><strong>Requerimiento Legal:</strong> Cuando sea requerido por una orden judicial o autoridades competentes venezolanas bajo un proceso legal formal.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">5. Derechos del Usuario (Habeas Data)</h2>
            <p>
              Usted tiene el derecho inalienable de conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, puede comunicarse directamente con nuestro equipo de soporte técnico o atención al cliente a través de los canales oficiales publicados en el sitio web.
            </p>

            <h2 className="text-xl font-bold text-[#0477BF] mt-8">6. Uso de Cookies</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, recordar sus preferencias en el catálogo y analizar el tráfico de nuestro sitio de manera anónima. Usted puede configurar su navegador para rechazar todas las cookies, aunque esto podría afectar la funcionalidad de algunas áreas del portal.
            </p>
            
            <p className="mt-8 text-sm text-gray-500">
              Última actualización: Mayo de 2026. Al utilizar practiiko.com, usted acepta los términos expuestos en este Aviso de Privacidad.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
