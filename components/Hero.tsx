'use client';

import Image from 'next/image';
import Background from './Background';
import { CrystalButton } from './CrystalButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

// Hero.tsx
export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language];
    const cvUrl = language === 'ES' ? '/CV-ESP.pdf' : '/CV-ENG.pdf';

    return (
        <section className="relative w-full bg-white flex flex-col items-center z-0">
            {/* HERO - bg-[#030303] */}
            {/* Añadimos z-0 para que quede por debajo de lo que venga después */}
            <div className="relative w-full bg-[#030303] rounded-b-[100px] lg:rounded-b-[150px] overflow-visible shadow-2xl z-0">
                <Background />

                <div className="relative z-10 flex flex-col items-center">
                    {/* TÍTULO */}
                    <div className="mt-[15vh] text-center select-none pointer-events-none px-4">
                        <h1 className="font-russo text-[50px] sm:text-[60px] lg:text-[100px] leading-[1.05] text-[#F0EEF866] uppercase tracking-[0.01em] whitespace-pre-line">
                            {t.hero.title}
                        </h1>
                    </div>

                    {/* COMPOSICIÓN VISUAL */}
                    <div className="relative w-full max-w-[1700px] flex justify-center items-end h-[500px] -mt-20 lg:-mt-32">

                        {/* Celular Izquierdo - Más pequeño y más abajo */}
                        <div className="absolute left-4 lg:left-50 bottom-[-150px] rotate-[-10deg] drop-shadow-[0_60px_120px_rgba(0,0,0,0.95)] z-20">
                            <Image
                                src="/img/AdiPix/Adipix-1.png"
                                alt="AdiPix"
                                width={260}
                                height={536}
                                className="opacity-90"
                                priority
                            />
                        </div>

                        {/* AVATAR */}
                        <div className="relative w-[500px] h-[504px] z-30 translate-y-10">
                            <Image src="/img/Avatar-Hero1.png" alt="Avatar" fill className="object-contain" priority />
                        </div>

                        {/* Celular Derecho - Más pequeño y más abajo */}
                        <div className="absolute right-4 lg:right-50 bottom-[-150px] rotate-[10deg] drop-shadow-[0_60px_120px_rgba(0,0,0,0.95)] z-20">
                            <Image
                                src="/img/Bedia/Bedia-1.png"
                                alt="Bedia"
                                width={260}
                                height={536}
                                className="opacity-90"
                                priority
                            />
                        </div>

                        {/* BOTONES */}
                        <div className="absolute bottom-16 z-50 flex gap-4">
                            <CrystalButton href="https://www.linkedin.com/in/eduardo-velarde-1b93902b2/" icon="/icons/linkedin.svg" className="w-14 h-14" />
                            <CrystalButton href={cvUrl} className="px-8 py-3.5">{t.hero.cvButton}</CrystalButton>
                        </div>
                    </div>
                </div>
            </div>
            {/* Eliminamos el div de espaciado h-20 para que la sección blanca suba */}
        </section>
    );
}