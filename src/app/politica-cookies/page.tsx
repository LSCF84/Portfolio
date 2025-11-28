import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | LSCF Development Hub',
  description: 'Política de uso de cookies para el portfolio personal de LSCF Development Hub.',
};

const CookiePolicyPage = () => {
  const lastUpdated = "28 de noviembre de 2025";
  const siteUrl = "https://portfolio-main-lscf.vercel.app/";
  // ¡IMPORTANTE! Reemplaza este email con tu dirección de contacto real
  const contactEmail = "l.sergio.camacho.fernandez@gmail.com"; 

  // Definición de clases de color adaptadas al tema oscuro/púrpura de LSCF Main
  const primaryColor = 'text-purple-400 hover:text-purple-300';
  const containerBg = 'bg-gray-800';
  const sectionBg = 'bg-gray-700';
  const textColor = 'text-gray-300';
  const titleColor = 'text-white';
  const borderColor = 'border-gray-600';

  return (
    // Fondo general oscuro y alto mínimo para centrar el contenido
    <div className="flex flex-col items-center pt-16 pb-16 min-h-screen bg-gray-950 text-white font-sans transition duration-300">
      <div className={`max-w-4xl mx-auto w-full ${containerBg} p-8 sm:p-12 rounded-xl shadow-2xl transition-colors duration-300`}>

        <h1 className={`text-4xl font-extrabold ${titleColor} mb-6 border-b ${borderColor} pb-3`}>
          🍪 Política de Cookies
        </h1>

        <p className={`mb-8 text-lg ${textColor}`}>
          Esta Política de Cookies se aplica al sitio web{' '}
          <a href={siteUrl} className={`underline font-semibold transition-colors ${primaryColor}`}>
            {siteUrl.replace('https://', '')}
          </a>.
        </p>

        {/* Sección 1: Definición de Cookies */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          1. Definición de Cookies
        </h2>
        <p className={`mb-4 ${textColor}`}>
          Las cookies son pequeños archivos de texto que se almacenan en su navegador o dispositivo cuando visita un sitio web. Su propósito es mejorar la experiencia del usuario y ofrecer funcionalidades específicas.
        </p>
        
        {/* Sección 2: Tipos de Cookies Utilizadas */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          2. Tipos de Cookies Utilizadas
        </h2>
        <div className="space-y-6">
          
          {/* Tarjeta 1: Necesarias */}
          <div className={`p-5 ${sectionBg} rounded-lg shadow-inner`}>
            <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>
              Cookies Estrictamente Necesarias (Técnicas)
            </h3>
            <p className="text-sm text-gray-300">
              Son esenciales para el correcto funcionamiento del sitio web y no pueden ser desactivadas. Permiten la navegación, el acceso a áreas seguras y la gestión del consentimiento.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-2 space-y-1">
              <li>**Funcionalidad:** Mantienen la sesión de usuario y las preferencias básicas (ej. tema oscuro/claro).</li>
              <li>**Consentimiento:** Almacenan su decisión sobre el uso de otras cookies.</li>
              <li>**Enrutamiento:** Cookies del framework Next.js para optimizar la carga.</li>
            </ul>
            <p className="text-xs font-medium text-green-500 mt-3">
              Base legal: Interés legítimo (Necesidad técnica).
            </p>
          </div>
          
          {/* Tarjeta 2: Analítica */}
          <div className={`p-5 ${sectionBg} rounded-lg shadow-inner`}>
            <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>
              Cookies de Análisis y Rendimiento (Terceros)
            </h3>
            <p className="text-sm text-gray-300">
              Recopilan información **anónima** sobre cómo interactúan los visitantes con el sitio web (páginas visitadas, tiempo de permanencia, fuentes de tráfico, etc.), lo que nos ayuda a mejorar su rendimiento y contenido. Estas cookies **solo se activan si usted da su consentimiento explícito**.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-2 space-y-1">
              <li>**Proveedor:** Servicios como Google Analytics o Vercel Analytics (si están implementados).</li>
              <li>**Propósito:** Evaluación del comportamiento del usuario para optimizar la web.</li>
            </ul>
            <p className="text-xs font-medium text-red-500 mt-3">
              Base legal: Consentimiento explícito del usuario.
            </p>
          </div>
          
        </div>
        
        {/* Sección 3: Control de Preferencias y Revocación */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          3. Control de Preferencias y Revocación
        </h2>
        
        <p className={`mb-6 ${textColor}`}>
          Usted tiene el derecho de aceptar, rechazar o revocar el consentimiento para las cookies no esenciales en cualquier momento.
        </p>
        
        <div className="p-4 bg-yellow-700/30 rounded-lg border-l-4 border-yellow-500 text-yellow-100">
            <p className="text-base font-semibold">
                ⚙️ ¿Cómo gestionar sus cookies?
            </p>
            <p className="text-sm mt-1">
                Para cambiar sus preferencias, haga clic en el botón de **"Configurar"** en el banner de cookies o acceda al enlace de **"Gestionar Cookies"** (si lo proporcionamos en el footer) para abrir el panel de configuración. También puede borrarlas en los ajustes de privacidad de su navegador.
            </p>
        </div>
        
        {/* Sección 4: Contacto */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          4. Contacto
        </h2>
        <p className={`mb-4 ${textColor}`}>
            Si tiene alguna pregunta o necesita más información sobre nuestra Política de Cookies, puede contactarnos:
        </p>
        <p className={`font-semibold ${primaryColor}`}>
            <a href={`mailto:${contactEmail}`} className="hover:underline transition-colors">
                {contactEmail}
            </a>
        </p>

        <p className={`text-sm text-gray-500 mt-10 text-center border-t ${borderColor} pt-4`}>
            Última actualización: {lastUpdated}
        </p>

        {/* Enlace para volver a la página principal */}
        <div className="text-center mt-6">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-[1.02]">
              Volver al Portafolio
            </a>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CookiePolicyPage;
