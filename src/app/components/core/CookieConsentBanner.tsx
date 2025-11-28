'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Clave para guardar el consentimiento en localStorage
const CONSENT_KEY = 'cookie_consent_lscf_main';

const useCookieConsent = () => {
    const [consent, setConsentState] = useState<{ analytics: boolean } | null>(null);
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [analyticsChecked, setAnalyticsChecked] = useState(true); 

    useEffect(() => {
        try {
            // Este código se ejecuta solo en el navegador (lado cliente)
            if (typeof window === 'undefined') return;

            const consentString = localStorage.getItem(CONSENT_KEY);
            if (consentString) {
                const loadedConsent = JSON.parse(consentString);
                setConsentState(loadedConsent);
                setAnalyticsChecked(loadedConsent.analytics);
            } else {
                // Si no hay consentimiento, mostramos el banner después de un pequeño retraso
                setTimeout(() => setIsBannerVisible(true), 500); 
            }
        } catch (e) {
            console.error("Error al cargar el consentimiento de cookies:", e);
            setTimeout(() => setIsBannerVisible(true), 500);
        }
    }, []);

    const setConsent = useCallback((analytics: boolean) => {
        const newConsent = { date: new Date().toISOString(), analytics };
        localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
        setConsentState(newConsent);
        setIsBannerVisible(false);
        setIsModalVisible(false);

        // Lógica para cargar/bloquear scripts de terceros (Ej. Google Analytics)
        if (analytics) {
            console.log("Analytics permitido: Cargar script aquí.");
        } else {
            console.log("Analytics denegado: Asegúrate de bloquear scripts.");
        }
    }, []);

    const acceptAll = () => setConsent(true);

    const savePreferences = () => setConsent(analyticsChecked);

    const showModal = () => {
        setIsBannerVisible(false);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        if (!consent) {
            setIsBannerVisible(true);
        }
    };

    return {
        isBannerVisible,
        isModalVisible,
        analyticsChecked,
        setAnalyticsChecked,
        acceptAll,
        showModal,
        hideModal,
        savePreferences,
    };
};

const CookieConsentBanner = () => {
    const {
        isBannerVisible,
        isModalVisible,
        analyticsChecked,
        setAnalyticsChecked,
        acceptAll,
        showModal,
        hideModal,
        savePreferences,
    } = useCookieConsent();

    // ESTILO CLARO/MINIMALISTA
    // Fondo blanco, texto oscuro, borde y sombra sutiles
    const bannerClasses = `fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 text-gray-800 p-4 shadow-xl transition-transform duration-500 ${
        isBannerVisible ? 'translate-y-0' : 'translate-y-full'
    }`;
    
    // Modal de fondo ligeramente oscuro para tapar el contenido detrás
    const modalClasses = `fixed inset-0 z-[110] bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
        isModalVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;
    
    if (!isBannerVisible && !isModalVisible) return null;

    // Colores de marca: Usamos un azul oscuro/indigo para los enlaces para mantener la profesionalidad
    const primaryColorClasses = "text-indigo-600 hover:text-indigo-800";
    const primaryButtonClasses = "px-5 py-2 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 shadow-md";
    const secondaryButtonClasses = "px-5 py-2 text-sm font-semibold rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-200 shadow-sm";
    
    return (
        <>
            {/* BANNER PRINCIPAL DE COOKIES - Fila simple, fondo blanco */}
            <div className={bannerClasses} role="alert" aria-live="polite">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-700">
                        Utilizamos cookies propias y de terceros para mejorar la navegación y analizar el tráfico. Al continuar, acepta su uso. Lea nuestra{' '}
                        <Link href="/politica-cookies" className={`font-semibold underline ${primaryColorClasses}`}>
                            Política de Cookies
                        </Link>
                        .
                    </p>
                    <div className="flex flex-shrink-0 space-x-3">
                        <button onClick={acceptAll} className={primaryButtonClasses}>
                            Aceptar Todo
                        </button>
                        <button onClick={showModal} className={secondaryButtonClasses}>
                            Configurar
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL DE CONFIGURACIÓN - Fondo blanco, centrado */}
            <div className={modalClasses} onClick={(e) => e.target === e.currentTarget && hideModal()} aria-modal="true" role="dialog">
                <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full m-4 p-6 transform transition-transform duration-300 translate-y-0 border border-gray-300">
                    <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Ajustes de Cookies</h3>
                    
                    <div className="space-y-4">
                        {/* Opción 1: Necesarias (Obligatorias) */}
                        <div className="flex items-start justify-between">
                            <div className="mr-4">
                                <p className="font-semibold text-gray-800">Cookies Estrictamente Necesarias</p>
                                <p className="text-xs text-gray-500 mt-1">Esenciales para la funcionalidad básica del sitio (ej. recordar esta preferencia).</p>
                            </div>
                            <span className="text-xs font-semibold text-green-700 py-1 px-2 rounded-full bg-green-100 flex-shrink-0">Siempre Activas</span>
                        </div>
                        
                        {/* Opción 2: Analítica y Rendimiento */}
                        <div className="flex items-start justify-between pt-4 border-t border-gray-200">
                            <div className="mr-4">
                                <p className="font-semibold text-gray-800">Cookies de Análisis y Rendimiento</p>
                                <p className="text-xs text-gray-500 mt-1">Nos ayudan a entender cómo los visitantes usan el sitio para mejorarlo.</p>
                            </div>
                            {/* Toggle para la analítica */}
                            <label htmlFor="analytics-toggle-main" className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                                <input 
                                    type="checkbox" 
                                    id="analytics-toggle-main" 
                                    className="sr-only peer" 
                                    checked={analyticsChecked}
                                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                                />
                                {/* Diseño de interruptor más limpio (Indigo) */}
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-400 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        </div>
                        
                    </div>

                    <div className="flex justify-end mt-8 space-x-3">
                        <button onClick={hideModal} className={secondaryButtonClasses}>
                            Cerrar
                        </button>
                        <button onClick={savePreferences} className={primaryButtonClasses}>
                            Guardar Preferencias
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookieConsentBanner;
