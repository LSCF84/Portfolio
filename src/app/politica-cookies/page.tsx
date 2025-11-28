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

    // Clases de Tailwind ajustadas para un estilo más integrado (menos agresivo)
    const bannerClasses = `fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white p-4 shadow-2xl transition-transform duration-500 ${
        isBannerVisible ? 'translate-y-0' : 'translate-y-full'
    }`;
    // Nota: Mantenemos el color oscuro para que no choque con el resto del contenido y sea visible en cualquier fondo.

    const modalClasses = `fixed inset-0 z-[110] bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
        isModalVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;
    
    if (!isBannerVisible && !isModalVisible) return null;

    return (
        <>
            {/* BANNER PRINCIPAL DE COOKIES - Fila simple, fondo oscuro sutil */}
            <div className={bannerClasses} role="alert" aria-live="polite">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-200">
                        Utilizamos cookies propias y de terceros para mejorar la navegación y analizar el tráfico. Al continuar, acepta su uso. Lea nuestra{' '}
                        <Link href="/politica-cookies" className="font-semibold underline text-purple-400 hover:text-white transition-colors">
                            Política de Cookies
                        </Link>
                        .
                    </p>
                    <div className="flex flex-shrink-0 space-x-3">
                        <button onClick={acceptAll} className="px-5 py-2 text-sm font-semibold rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-200 shadow-md">
                            Aceptar Todo
                        </button>
                        <button onClick={showModal} className="px-5 py-2 text-sm font-semibold rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition duration-200 shadow-md">
                            Configurar
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL DE CONFIGURACIÓN - Fondo oscuro, Modal centrado */}
            <div className={modalClasses} onClick={(e) => e.target === e.currentTarget && hideModal()} aria-modal="true" role="dialog">
                <div className="bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full m-4 p-6 transform transition-transform duration-300 translate-y-0 border border-gray-700">
                    <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-3">Ajustes de Cookies</h3>
                    
                    <div className="space-y-4">
                        {/* Opción 1: Necesarias (Obligatorias) */}
                        <div className="flex items-start justify-between">
                            <div className="mr-4">
                                <p className="font-semibold text-white">Cookies Estrictamente Necesarias</p>
                                <p className="text-xs text-gray-400 mt-1">Esenciales para la funcionalidad básica del sitio (ej. recordar esta preferencia).</p>
                            </div>
                            <span className="text-xs font-semibold text-green-500 py-1 px-2 rounded-full bg-green-900/50 flex-shrink-0">Siempre Activas</span>
                        </div>
                        
                        {/* Opción 2: Analítica y Rendimiento */}
                        <div className="flex items-start justify-between pt-4 border-t border-gray-700">
                            <div className="mr-4">
                                <p className="font-semibold text-white">Cookies de Análisis y Rendimiento</p>
                                <p className="text-xs text-gray-400 mt-1">Nos ayudan a entender cómo los visitantes usan el sitio para mejorarlo.</p>
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
                                {/* Diseño de interruptor más limpio */}
                                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                        </div>
                        
                    </div>

                    <div className="flex justify-end mt-8 space-x-3">
                        <button onClick={hideModal} className="px-5 py-2 text-sm font-semibold rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600 transition duration-200">
                            Cerrar
                        </button>
                        <button onClick={savePreferences} className="px-5 py-2 text-sm font-semibold rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-200 shadow-md">
                            Guardar Preferencias
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookieConsentBanner;
