// Este componente está diseñado para ser la página de error 404
// en un proyecto Next.js (App Router, app/not-found.jsx).

// NOTA: En el entorno de previsualización, usamos un tag <a> estándar en lugar de
// el componente <Link> de Next.js, pero funcionará perfectamente en tu despliegue.

const ACCENT_ORANGE = '#ff5722';
const PRIMARY_TEXT = '#1a1a1a';
const SECONDARY_TEXT = '#555555';

export default function NotFound() {
  return (
    // Estilo del cuerpo: fondo muy claro, centrado, tipografía estándar.
    <div style={{ backgroundColor: '#f9f9f9' }} className="font-sans min-h-screen flex items-center justify-center p-4 antialiased">

      {/* Contenedor Principal: Tarjeta blanca con sombra y bordes redondeados */}
      <div className="max-w-xl w-full text-center p-8 md:p-12 rounded-xl border border-gray-200 bg-white shadow-xl">

        {/* Bloque del Icono y Humor */}
        <div className="flex flex-col items-center justify-center mb-6">
          {/* Icono SVG de Advertencia/Error con color naranja de acento */}
          <svg 
            className="w-24 h-24" 
            style={{ color: ACCENT_ORANGE }} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Camino de un icono de advertencia/peligro */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
           {/* Mensaje de Humor */}
          <h3 className="text-xl md:text-2xl font-semibold mt-4" style={{ color: SECONDARY_TEXT }}>
            ¡Oops! Parece que la página se ha tomado unas vacaciones.
          </h3>
        </div>

        {/* Código de Error Principal */}
        <h1 className="text-[6rem] md:text-[9rem] font-extrabold leading-none mb-4" style={{ color: ACCENT_ORANGE }}>
          404
        </h1>

        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide" style={{ color: PRIMARY_TEXT }}>
          RUTA DESCONOCIDA
        </h2>

        {/* Descripción */}
        <p className="mb-10 text-lg md:text-xl" style={{ color: SECONDARY_TEXT }}>
          No te preocupes, esto es solo un pequeño error de navegación. Volvamos a la base de operaciones.
        </p>

        {/* Botón de Retorno al Inicio */}
        <a 
            href="/" // El enlace estándar funciona en Next.js si se mantiene la misma ruta base
            className="inline-block px-8 py-3 text-lg font-semibold uppercase tracking-wider text-white border-2 rounded-lg transition-colors duration-300 shadow-md hover:opacity-90 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50"
            style={{ backgroundColor: ACCENT_ORANGE, borderColor: ACCENT_ORANGE, boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)` }}
          >
            Volver al Inicio
        </a>
        
        {/* Pie de página sutil con humor */}
        <div className="mt-12 text-sm tracking-widest" style={{ color: SECONDARY_TEXT }}>
          (El servidor jura que no fue su culpa)
        </div>

      </div>
    </div>
  );
}
