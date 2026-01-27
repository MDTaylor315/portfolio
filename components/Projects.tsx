'use client';

import Image from 'next/image';
import { CrystalButton } from './CrystalButton';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

interface Project {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    icons: string[];
    images: string[];
}

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language];

    const AdipixPath: string = '/img/AdiPix/Adipix-';
    const SystMapPath: string = '/img/SystMap/SystMap-';
    const BediaPath: string = '/img/Bedia/Bedia-';

    const projects: Project[] = t.projects.list.map((project, index) => {
        let images: string[] = [];

        if (index === 0) {
            images = [`${AdipixPath}0.png`, `${AdipixPath}1.png`, `${AdipixPath}2.png`, `${AdipixPath}3.png`, `${AdipixPath}4.png`, `${AdipixPath}5.png`, `${AdipixPath}6.png`, `${AdipixPath}7.png`, `${AdipixPath}8.png`];

        } else if (index === 1) {
            images = [`${SystMapPath}0.png`, `${SystMapPath}1.png`, `${SystMapPath}2.png`, `${SystMapPath}3.png`, `${SystMapPath}4.png`, `${SystMapPath}5.png`, `${SystMapPath}6.png`, `${SystMapPath}7.png`];
        } else if (index === 2) {
            images = [`${BediaPath}0.png`, `${BediaPath}1.png`, `${BediaPath}2.png`, `${BediaPath}3.png`, `${BediaPath}4.png`];
        } else if (index === 3) {
            images = ['/img/Planiweb.png'];
        }

        return {
            ...project,
            images,
            icons: project.icons || ['/icons/Flutter.svg', '/icons/Android.svg']
        };
    });

    return (
        <section className="w-full relative overflow-hidden rounded-b-[80px] lg:rounded-b-[120px]">
            {/* Background con patrón de puntos */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-t-[80px] lg:rounded-t-[120px] rounded-b-[80px] lg:rounded-b-[120px]">
                <Image
                    src="/img/Projects-Background.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                />
                {/* Patrón de puntos generado con CSS */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                ></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-24">

                {/* TÍTULO */}
                <div className="w-full max-w-7xl mx-auto mb-12 lg:mb-16">
                    <h2 className="font-russo text-[24px] lg:text-[40px] leading-tight text-white uppercase">
                        {t.projects.title}
                    </h2>
                </div>

                {/* PROYECTOS */}
                <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
                    {projects.map((project, index) => (
                        <ProjectSlider key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Componente Slider para cada proyecto
function ProjectSlider({ project }: { project: Project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-play: cambiar imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, [project.images.length]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Información del proyecto - PRIMERO EN MÓVIL, A LA DERECHA EN DESKTOP */}
            <div className="lg:order-2 flex flex-col space-y-4">
                {/* Título y subtítulo */}
                <div>
                    <h3 className="font-varela font-normal text-[40px] text-[#F0EEF8] leading-tight">
                        {project.title} <span className="text-[#F0EEF8]/80">|</span> {project.subtitle}
                    </h3>
                </div>

                {/* Período e iconos */}
                <div className="flex items-center gap-4 flex-wrap">
                    <CrystalButton className="px-4 h-12">
                        <span className="font-varela text-[14px] lg:text-[16px] text-white">
                            {project.period}
                        </span>
                    </CrystalButton>

                    <CrystalButton className="px-4 h-12">
                        <div className="flex items-center gap-3">
                            {project.icons.map((icon, iconIndex) => (
                                <Image
                                    key={iconIndex}
                                    src={icon}
                                    alt="Technology icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            ))}
                        </div>
                    </CrystalButton>
                </div>

                {/* Descripción */}
                <div>
                    <p className="font-varela text-[14px] lg:text-[16px] text-[#F0EEF8]/90 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Slider de imágenes - SEGUNDO EN MÓVIL, A LA IZQUIERDA EN DESKTOP */}
            <div className="lg:order-1 flex flex-col items-center lg:items-start gap-4">
                <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
                    {/* Contenedor de imágenes con crossfade */}
                    <div className="relative w-full" style={{ height: '650px' }}>
                        {project.images.map((image, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-700 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} - ${idx + 1}`}
                                    width={320}
                                    height={650}
                                    className="object-contain drop-shadow-2xl"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicadores de puntos estilo Instagram/TikTok - CENTRADOS */}
                <div className="flex gap-2 justify-center w-full max-w-[280px] lg:max-w-[320px]">
                    {project.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 shadow-lg ${idx === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-2 hover:bg-white/70'
                                }`}
                            aria-label={`Ir a imagen ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
