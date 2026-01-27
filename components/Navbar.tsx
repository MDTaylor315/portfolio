// components/Navbar.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function Navbar() {
    const { language } = useLanguage();
    const t = translations[language];

    const navItems = [
        { name: t.navbar.inicio, active: true },
        { name: t.navbar.sobreMi, active: false },
        { name: t.navbar.experiencia, active: false },
        { name: t.navbar.proyectos, active: false },
        { name: t.navbar.contacto, active: false },
    ];

    return (

        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
            {/* EL MARCO: Esquinas gruesas y brillantes, resto delgado  AGREGAR fixed AL INICIO PARA VELRO SIEMPRE*/}
            <div
                className="rounded-[24px] relative"
                style={{
                    padding: '1px',
                    backgroundImage: `
                        radial-gradient(ellipse 35% 35% at 0% 0%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.25) 35%, transparent 65%),
                        radial-gradient(ellipse 35% 35% at 100% 100%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.25) 35%, transparent 65%),
                        radial-gradient(ellipse 30% 30% at 100% 0%, rgba(13,13,13,0.5) 0%, transparent 50%),
                        radial-gradient(ellipse 30% 30% at 0% 100%, rgba(13,13,13,0.5) 0%, transparent 50%)
                    `,
                    backgroundColor: 'rgba(255,255,255,0.08)'
                }}
            >

                {/* CONTENEDOR INTERIOR: Fondo negro */}
                <div className="relative overflow-hidden flex items-center gap-6 xl:gap-10 px-6 xl:px-10 py-3 xl:py-4 rounded-[23px] bg-[#0D0D0D]">

                    {/* Degradado de negro a gris en la parte inferior */}
                    <div
                        className="absolute inset-0 rounded-[23px] pointer-events-none"
                        style={{
                            background: `
                                linear-gradient(to bottom, 
                                    transparent 0%, 
                                    transparent 50%, 
                                    rgba(60,60,60,0.3) 100%
                                )
                            `
                        }}
                    ></div>

                    {/* Capa de granulado/ruido */}
                    <div
                        className="absolute inset-0 rounded-[23px] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            opacity: 0.2,
                            mixBlendMode: 'screen'
                        }}
                    ></div>

                    {/* ITEMS */}
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                            className={`relative z-10 font-poppins font-normal text-[14px] xl:text-[16px] tracking-tight transition-all duration-300 whitespace-nowrap ${item.active
                                ? 'text-white'
                                : 'text-[#949494] hover:text-white/80'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}