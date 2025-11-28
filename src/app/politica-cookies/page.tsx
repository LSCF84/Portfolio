import Link from 'next/link';
import type { Metadata } from 'next';

// --- METADATA ---
export const metadata: Metadata = {
  title: 'Política de Cookies | LSCF Development Hub',
  description: 'Política de uso de cookies para el portafolio personal.',
};

const CookiePolicyPage = () => {
  // Definición de colores principales usados consistentemente con el tema general
  const primaryColor = 'text-indigo-600 dark:text-indigo-400';
  const containerBg = 'bg-white dark:bg-gray-800';
  const sectionBg = 'bg-gray-100 dark:bg-gray-700';
  const textColor = 'text-gray-700 dark:text-gray-300';
  const titleColor = 'text-gray-900 dark:text-white';
  const lastUpdated = "27 de noviembre de 2025";

  return (
    // Usa un contenedor flexbox para asegurar que el contenido se centre vertical y horizontalmente
    <div className={`min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 ${containerBg}`}>
      <div className={`max-w-4xl w-full p-8 sm:p-10 rounded-xl shadow-2xl transition-colors duration-300 ${sectionBg}`}>
        
        <Link href="/" className={`inline-flex items-center ${primaryColor} mb-6 hover:underline`}>
            {/* Icono de flecha SVG simple */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Inicio
        </Link>
        
        <h1 className={`text-4xl font-extrabold mb-4 ${titleColor}`}>Política de Cookies</h1>
        <p className={`text-sm ${textColor} mb-8`}>
          Última actualización: {lastUpdated}
        </p>

        {/* --- 1. INTRODUCCIÓN --- */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>1. Introducción y Definición</h2>
          <p className={`mb-4 ${textColor}`}>
            Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en el sitio web de LSCF. Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web. Tienen la función de recordar información sobre su visita para mejorar su experiencia futura.
          </p>
          <p className={textColor}>
            Al utilizar este sitio web, usted acepta el uso de cookies de acuerdo con esta política. Si no está de acuerdo, le rogamos que desactive las cookies siguiendo las instrucciones a continuación, o que no utilice el sitio.
          </p>
        </section>

        {/* --- 2. TIPOS DE COOKIES UTILIZADAS --- */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>2. ¿Qué tipos de cookies utilizamos?</h2>
          
          <h3 className={`text-xl font-semibold mt-4 mb-2 ${titleColor}`}>2.1. Cookies Estrictamente Necesarias (Técnicas)</h3>
          <p className={`mb-2 ${textColor}`}>
            Estas cookies son esenciales para el funcionamiento básico del sitio y no se pueden desactivar en nuestros sistemas. Generalmente se configuran para responder a acciones realizadas por usted, como ajustar sus preferencias de privacidad o iniciar sesión.
          </p>
          <ul className={`list-disc list-inside ml-5 ${textColor}`}>
            <li>**Finalidad:** Garantizar la seguridad, la funcionalidad básica y recordar la preferencia de consentimiento de cookies.</li>
            <li>**Ejemplo:** Cookie de consentimiento (`{CONSENT_KEY}`).</li>
          </ul>

          <h3 className={`text-xl font-semibold mt-4 mb-2 ${titleColor}`}>2.2. Cookies de Rendimiento y Análisis (De terceros)</h3>
          <p className={`mb-2 ${textColor}`}>
            Estas cookies, administradas por terceros (como Google Analytics), nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo se mueven los visitantes por el sitio.
          </p>
          <ul className={`list-disc list-inside ml-5 ${textColor}`}>
            <li>**Finalidad:** Medir el tráfico web, optimizar la experiencia del usuario y evaluar el rendimiento del portafolio.</li>
            <li>**Aceptación:** Solo se instalan si el usuario las acepta explícitamente a través del banner de consentimiento.</li>
          </ul>
        </section>

        {/* --- 3. GESTIÓN DE COOKIES --- */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>3. Gestión y Desactivación de Cookies</h2>
          <p className={`mb-4 ${textColor}`}>
            Usted tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador.
          </p>
          <p className={textColor}>
            Puede configurar sus preferencias específicas utilizando el botón **"Configurar"** en el banner de consentimiento que aparece al acceder a nuestra web. Si desea eliminar cookies existentes, puede hacerlo directamente a través de las opciones de su navegador:
          </p>
          <ul className={`list-disc list-inside ml-5 mt-4 ${textColor}`}>
            <li>**Chrome:** <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={primaryColor}>Guía de Google Chrome</a></li>
            <li>**Firefox:** <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer" className={primaryColor}>Guía de Mozilla Firefox</a></li>
            <li>**Safari:** <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={primaryColor}>Guía de Apple Safari</a></li>
            <li>**Edge:** <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className={primaryColor}>Guía de Microsoft Edge</a></li>
          </ul>
        </section>

        {/* --- 4. CONTACTO --- */}
        <section>
          <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>4. Contacto</h2>
          <p className={textColor}>
            Si tiene alguna pregunta sobre esta Política de Cookies, puede contactarnos a través del correo electrónico: <a href="mailto:contacto@lscfdevhub.com" className={primaryColor}>contacto@lscfdevhub.com</a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default CookiePolicyPage;
