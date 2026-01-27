'use client';

import Image from 'next/image';
import { CrystalButton } from './CrystalButton';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    const handleEmailClick = () => {
        navigator.clipboard.writeText('edujovelardeg@gmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <footer className="w-full relative overflow-hidden min-h-screen flex flex-col">
            {/* Forma curva blanca con bordes redondeados CSS */}
            <div className="absolute top-0 left-0 right-0 w-full pointer-events-none z-20">
                {/* Contenedor con overflow-hidden para cortar los bordes redondeados */}
                <div className="w-full overflow-hidden rounded-b-[120px] lg:rounded-b-[160px]" style={{ height: '200px' }}>
                    {/* Rectángulo blanco superior */}
                    <div className="absolute top-0 left-0 right-0 bg-[#F0EEF8] h-[100px]"></div>

                    {/* SVG para la curva central - tercera parte inferior de un óvalo */}
                    <svg
                        viewBox="0 0 1440 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="w-full absolute top-0"
                        style={{ height: '200px' }}
                    >
                        <path
                            d="M 550,100
                               C 550,100 600,140 720,140
                               C 840,140 890,100 890,100
                               L 890,0
                               L 550,0
                               Z"
                            fill="#F0EEF8"
                        />
                    </svg>
                </div>
            </div>

            {/* Background con imagen */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/Footer-Background.png"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                />
                {/* Patrón de cuadrícula con desvanecimiento lateral */}
                <div className="absolute inset-0">
                    {/* Cuadrícula base */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px'
                        }}
                    ></div>

                    {/* Puntos más marcados en las intersecciones cada 4 cuadros (200px) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)',
                            backgroundSize: '200px 200px',
                            backgroundPosition: '0 0'
                        }}
                    ></div>

                    {/* Máscara de degradado para desvanecer en los extremos */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.7) 100%)'
                        }}
                    ></div>
                </div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex-1 flex flex-col pt-40 lg:pt-48">
                <div className="container mx-auto px-6 lg:px-16 xl:px-24">
                    <div className="w-full max-w-7xl mx-auto">

                        {/* Título principal */}
                        <div className="text-center mb-12">
                            <h2 className="font-russo text-[28px] lg:text-[32px] text-white leading-tight">
                                {t.footer.title}
                            </h2>
                        </div>

                        {/* Botones de contacto */}
                        <div className="flex flex-col items-center gap-4 mb-12">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <CrystalButton
                                    icon="/icons/LinkedIn.svg"
                                    href="https://www.linkedin.com/in/eduardo-velarde-1b93902b2/"
                                    className="w-14 h-14 p-3"
                                />
                                <CrystalButton
                                    icon="/icons/WhatsApp.svg"
                                    href="https://wa.me/51961947073"
                                    className="w-14 h-14 p-3"
                                />
                                <CrystalButton
                                    icon="/icons/Email.svg"
                                    onClick={handleEmailClick}
                                    className="w-14 h-14 p-3"
                                />
                            </div>
                            {emailCopied && (
                                <div className="text-white/70 text-sm font-varela animate-pulse">
                                    {t.footer.emailCopied}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Imagen del móvil - Ocupa todo el espacio restante hasta el fondo */}
                <div className="flex-1 flex items-end justify-center">
                    <div className="relative w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]">
                        <Image
                            src="/img/Footer-Mobile.png"
                            alt="Mobile App"
                            width={600}
                            height={800}
                            className="object-contain object-bottom w-full h-auto"
                            style={{ maxHeight: '60vh' }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}