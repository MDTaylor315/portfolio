'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import LoadingDots from './LoadingDots';

interface ExperienceItem {
    company: string;
    period: string;
    description: string;
}

export default function Experience() {
    const { language } = useLanguage();
    const t = translations[language];
    const experiences = t.experience.experiences;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [language]);

    if (isLoading) {
        return (
            <section className="w-full bg-[#F0EEF8] pt-12 lg:pt-16 pb-8 lg:pb-12 overflow-hidden flex items-center justify-center">
                <LoadingDots />
            </section>
        );
    }

    return (
        <section className="w-full bg-[#F0EEF8] pt-12 lg:pt-16 pb-8 lg:pb-12 overflow-hidden flex items-center justify-center">
            {/* CONTENEDOR PRINCIPAL CENTRADO - Mismo padding que AboutMe */}
            <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">

                {/* TÍTULO */}
                <div className="w-full max-w-7xl mb-8 lg:mb-12">
                    <h2 className="font-russo text-[20px] lg:text-[32px] leading-tight text-[#161B1E] uppercase">
                        {t.experience.title}
                    </h2>
                </div>

                {/* CONTENEDOR DE EXPERIENCIAS - USANDO GRID */}
                <div className="w-full max-w-7xl">
                    {experiences.map((exp, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-[20%_80px_1fr] gap-6 lg:gap-x-0 relative pb-16 lg:pb-20">

                            {/* COLUMNA 1: Empresa y Período */}
                            <div className="flex flex-col items-start">
                                <h3 className="font-varela text-[18px] lg:text-[24px] text-[#161B1E]">
                                    {exp.company}
                                </h3>
                                <p className="font-varela text-[12px] lg:text-[16px] text-[#A3A8B1] tracking-wide">
                                    {exp.period}
                                </p>
                            </div>

                            {/* COLUMNA 2: CÍRCULO NEGRO CON BORDE PUNTEADO Y LÍNEA VERTICAL */}
                            <div className="hidden lg:flex flex-col items-center relative pt-4">
                                {/* Círculo negro con borde punteado - Alineado con el texto */}
                                <div className="relative flex items-center justify-center flex-shrink-0">
                                    {/* Círculo negro interior - Centrado */}
                                    <div className="w-8.5 h-8.5 rounded-full bg-[#161B1E] z-10"></div>

                                    {/* Borde punteado alrededor - Centrado con el círculo */}
                                    <svg className="absolute" width="48" height="48" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="23"
                                            fill="none"
                                            stroke="#161B1E"
                                            strokeWidth="2"
                                            strokeDasharray="9 4"
                                        />
                                    </svg>
                                </div>

                                {/* Línea vertical punteada que conecta borde a borde */}
                                {index < experiences.length - 1 && (
                                    <div
                                        className="border-l-2 border-dashed border-[#161B1E] absolute"
                                        style={{
                                            top: '55px', // Después del borde inferior del primer círculo (24px centro + 24px radio)
                                            bottom: '-90px', // Hasta antes del borde superior del siguiente círculo
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '2px',
                                            strokeDasharray: '4 8'
                                        }}
                                    ></div>
                                )}
                            </div>

                            {/* COLUMNA 3: Descripción */}
                            <div className="flex flex-col lg:pl-24">
                                <p className="font-varela text-[#161B1E] text-[14px] leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
