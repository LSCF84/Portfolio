import React from 'react';

const ExperienceSec = () => {
    const experiences = [
    {
        year: "Nov 2020 – Mar 2025",
        title: "Técnico IT Nivel 3 → Nivel 4",
        company: "Microsyscom",
        type: "Indefinido",
        description: "Liderazgo en optimización de Soporte Técnico (gestión de tickets avanzada), modernización integral de infraestructura de red (fibra, firewalls Fortigate), expansión de servicios IT mediante virtualización y administración proactiva de seguridad (identidades, credenciales) para asegurar la continuidad operativa en entornos críticos."
    },
    {
        year: "Dic 2019 – Mar 2020",
        title: "Técnico IT / Técnico de Campo (Electromecánico)",
        company: "Tokheim Koppens Ibérica",
        type: "Indefinido",
        description: "Implementación integral de sistemas de suministro de combustible (instalación y configuración eléctrica/mecánica). Configuración avanzada de consolas de monitoreo de tanques (Veeder Root) y cableado estructurado. Diagnóstico y reparación de fallos complejos en hardware y software multiplataforma (Windows, Linux, Mac)."
    },
    {
        year: "Sep 2019 – Dic 2019",
        title: "Soporte Técnico Especializado / Mantenimiento Hw/Sw",
        company: "Alertaphone",
        type: "Indefinido",
        description: "Diagnóstico y reparación experto de hardware y software en una amplia gama de equipos y dispositivos móviles (Apple, Samsung, Sony, Bq). Gestión eficiente de la cadena de suministro, control de inventario y optimización de recursos. Instalación y personalización avanzada de sistemas operativos para maximizar rendimiento."
    },
    {
        year: "Ago 2016 – Sep 2019",
        title: "Soporte Técnico y Gestión de Servicio al Cliente IT",
        company: "PCccomponentes",
        type: "Indefinido",
        description: "Provisión de soporte técnico experto de alto nivel (hardware y software) con enfoque en la alta satisfacción del cliente. Ejecución de diagnósticos precisos, reparaciones avanzadas y optimización de equipos. Control exhaustivo del stock de repuestos y coordinación efectiva con fabricantes y proveedores."
    },
    {
        year: "Jul 2016 – Ago 2016",
        title: "Técnico Electrónico (Suplencia)",
        company: "Indra",
        type: "ETT",
        description: "Aplicación de técnicas de microsoldadura (SMD) y reballing para la reparación y recuperación de componentes electrónicos críticos (e.g., placas base). Mantenimiento preventivo/correctivo y participación en operaciones en sala limpia (ISO Clase 7). Montaje y testeo de sistemas electrónicos de precisión."
    },
    {
        year: "Jul 2011 – Mar 2016",
        title: "Técnico y Responsable de Área y Servicio",
        company: "Bq readers",
        type: "Indefinido",
        description: "Liderazgo en mejora continua (ITIL/Service Desk) e implantación/monitorización de KPIs para estándares de excelencia. Administración de infraestructura Cloud (Azure/AWS: VPN Gateway, balanceadores). Soporte Multi-Sistema (Nivel 2/3) en Android, Linux, Windows. Desarrollo y liderazgo de equipos técnicos y gestión de clientes."
    },
    {
        year: "Oct 2008 – Jul 2011",
        title: "Responsable de IT",
        company: "Kfibergroup",
        type: "Indefinido",
        description: "Gestión integral del Centro de Datos (CPD) y redes empresariales. Configuración de networking y seguridad (routers Cisco, firewalls Fortigate, VPN Site-to-Site/SSL). Administración de virtualización Hyper-V y migración a telefonía VoIP. Soporte remoto avanzado y resolución efectiva de incidencias complejas."
    },
    {
        year: "Mar 2008 – Oct 2008",
        title: "Técnico/Comercial",
        company: "Urende",
        type: "Indefinido",
        description: "Diagnóstico, reparación y mantenimiento de hardware/software de equipos informáticos. Soporte técnico avanzado para conectividad de datos. Gestión de la satisfacción del cliente y diseño de estrategias comerciales para la venta de material informático."
    },
    {
        year: "Sep 2007 – Feb 2008",
        title: "Técnico/Comercial",
        company: "Pc Box",
        type: "Indefinido",
        description: "Diagnóstico avanzado, troubleshooting y resolución de problemas de conectividad de datos. Soporte y orientación al cliente. Administración y configuración de sistemas operativos multiplataforma (Windows, Linux, Mac)."
    },
    {
        year: "Ene 2006 – Sep 2007",
        title: "Técnico",
        company: "Kfibergroup",
        type: "Indefinido",
        description: "Soporte técnico integral (N1/N2) y resolución efectiva de incidentes. Diagnóstico avanzado, troubleshooting de conectividad y asistencia remota multi-plataforma (VPN, VNC, RDP). Gestión del CPD y administración de cuentas de usuario (correo, VPN, VoIP)."
    },
    {
        year: "Sep 2005 – Ene 2006",
        title: "Técnico Instalador",
        company: "Productos Telefónicos",
        type: "Indefinido",
        description: "Configuración avanzada de routers y switches Cisco Catalyst. Desarrollo e instalación de infraestructuras de datos, incluyendo Fibra Óptica (FTTH). Instalación y soporte de tecnologías de telecomunicación (Cobre, ADSL, XDSL, VDSL) y mantenimiento de líneas de voz/datos (RTB, RDSI)."
    }
];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experiencia</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
