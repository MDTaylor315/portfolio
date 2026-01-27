'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function FromIdeasToReality() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="w-full bg-[#F0EEF8] py-16 lg:py-24 relative rounded-t-[80px] lg:rounded-t-[120px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 xl:px-24">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Texto e información - IZQUIERDA */}
                        <div className="flex flex-col space-y-6">
                            {/* Año */}
                            <div>
                                <h2 className="font-russo text-[60px] lg:text-[80px] text-[#161B1E]/20 leading-none">
                                    {t.fromIdeas.year}
                                </h2>
                            </div>

                            {/* Título principal */}
                            <div>
                                <h3 className="font-russo text-[32px] lg:text-[48px] text-[#161B1E] leading-tight">
                                    {t.fromIdeas.title}
                                </h3>
                            </div>

                            {/* Descripción */}
                            <div className="flex flex-col space-y-4">
                                <p className="font-varela text-[14px] lg:text-[16px] text-[#161B1E]/80 leading-relaxed max-w-2xl">
                                    {t.fromIdeas.description1}
                                </p>
                                <p className="font-varela text-[14px] lg:text-[16px] text-[#161B1E]/80 leading-relaxed max-w-2xl">
                                    {t.fromIdeas.description2}
                                </p>
                            </div>
                        </div>

                        {/* Mockup de teléfonos - DERECHA */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
                                <Image
                                    src="/img/Mockup.png"
                                    alt="Mockup de aplicaciones móviles"
                                    width={600}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
