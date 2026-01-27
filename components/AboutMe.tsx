'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function AboutMe() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="w-full bg-[#F0EEF8] py-10 lg:py-20 overflow-hidden flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-16 xl:px-24 flex flex-col items-center justify-center">

                {/* Contenedor Flex para Texto e Imagen */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-12">

                    {/* LADO IZQUIERDO: TEXTO */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Saludo */}
                        <div className="flex flex-col items-center lg:items-start mb-2">
                            <span className="font-russo text-[#A3A8B1] text-[20px] lg:text-[32px] tracking-wide uppercase">
                                {t.aboutMe.greeting}
                            </span>
                            <div className="w-full h-[2px] bg-[#C0BEC6] mt-0.5"></div>
                        </div>

                        {/* Nombre */}
                        <h2 className="font-russo text-[40px] lg:text-[64px] leading-tight text-[#000000] uppercase mb-4">
                            {t.aboutMe.name}
                        </h2>

                        {/* Rol */}
                        <div className="flex flex-col items-center lg:items-start mb-6">
                            <h3 className="font-russo text-[20px] lg:text-[32px] text-[#1D2327] uppercase">
                                {t.aboutMe.role}
                            </h3>
                            <div className="w-full h-[2px] bg-[#C0BEC6] mt-0.5"></div>
                        </div>

                        {/* Descripción técnica */}
                        <div className="font-varela text-[#161B1E] text-[14px] lg:text-[16px] leading-relaxed max-w-2xl">
                            <span className="block text-[18px] font-bold mb-3">
                                {t.aboutMe.specialty}
                            </span>
                            <p className="mb-4">
                                {t.aboutMe.description1}
                            </p>
                            <p className="opacity-80">
                                {t.aboutMe.description2}
                            </p>
                        </div>
                    </div>

                    {/* LADO DERECHO: IMAGEN */}
                    <div className="relative w-full lg:w-[40%] flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <div className="relative z-10 w-full max-w-[500px] lg:max-w-[600px]">
                            <Image
                                src="/img/About-Me.png"
                                alt="About Me"
                                width={700}
                                height={700}
                                className="object-contain drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* LÍNEA BASE FINAL */}
                <div className="w-full max-w-7xl h-[4px] bg-[#C0BEC6]"></div>
            </div>
        </section>
    );
}