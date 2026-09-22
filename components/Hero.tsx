'use client';

import Image from 'next/image';
import { CrystalButton } from './CrystalButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language];
    const [titleFirstLine, titleSecondLine] = t.hero.title.split('\n');
    const cvUrl = language === 'ES' ? '/CV-ESP.pdf' : '/CV-ENG.pdf';

    return (
        <section className="relative z-0 flex w-full flex-col items-center bg-[#F0EEF8]">
            <div className="relative flex w-full flex-col items-center">
                {/* Título fuera de la máscara */}
                <div className="pointer-events-none absolute inset-x-0 top-[12%] z-30 select-none px-4 text-center sm:top-[10%] lg:top-[13%]">
                    <h1 className="font-russo text-[42px] leading-[1.05] text-[#F0EEF866] uppercase tracking-[0.01em] sm:text-[60px] lg:text-[100px]">
                        <span className="block">{titleFirstLine}</span>
                        <span className="block text-[0.7em]">{titleSecondLine}</span>
                    </h1>
                </div>

                <div className="relative aspect-video w-full overflow-hidden lg:aspect-[11/5]">
                    {/* Fondo visible completo */}
                    <Image
                        src="/img/Hero-Background-1.webp"
                        alt=""
                        fill
                        className="scale-x-[1.03] object-cover object-bottom"
                        priority
                        sizes="100vw"
                    />
                    <Image
                        src="/img/Hero-Background-Pattern.webp"
                        alt=""
                        fill
                        className="pointer-events-none z-10 scale-x-[1.03] object-cover object-bottom"
                        priority
                        sizes="100vw"
                    />

                    <div
                        className="absolute inset-0 z-40 flex items-end justify-center overflow-hidden"
                        style={{
                            WebkitMaskImage: "url('/img/Hero-Background-1.webp')",
                            maskImage: "url('/img/Hero-Background-1.webp')",
                            WebkitMaskSize: 'cover',
                            maskSize: 'cover',
                            WebkitMaskPosition: 'center bottom',
                            maskPosition: 'center bottom',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                        }}
                    >
                        <div className="relative flex w-full max-w-[1200px] items-end justify-center px-4">
                            {/* Teléfono izquierdo */}
                            <div className="relative z-20 w-[28%] max-w-[280px] -rotate-[10deg] translate-y-[6%]">
                                <Image
                                    src="/img/Phone-Left.png"
                                    alt=""
                                    width={520}
                                    height={1040}
                                    className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]"
                                    priority
                                />
                            </div>

                            {/* Avatar */}
                            <div className="relative z-30 -mx-[10%] w-[45%] max-w-[520px] translate-y-[4%]">
                                <Image
                                    src="/img/Avatar-Hero1.png"
                                    alt=""
                                    width={1000}
                                    height={1008}
                                    className="h-auto w-full object-contain"
                                    priority
                                />
                            </div>

                            {/* Teléfono derecho */}
                            <div className="relative z-20 w-[28%] max-w-[280px] rotate-[10deg] translate-y-[6%]">
                                <Image
                                    src="/img/Phone-Right.png"
                                    alt=""
                                    width={520}
                                    height={1040}
                                    className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[8%] left-1/2 z-40 flex -translate-x-1/2 gap-4 sm:bottom-[9%] lg:bottom-[8%]">
                        <CrystalButton href="https://www.linkedin.com/in/eduardo-velarde-1b93902b2/" icon="/icons/linkedin.svg" className="w-14 h-14" />
                        <CrystalButton href={cvUrl} className="px-8 py-3.5">{t.hero.cvButton}</CrystalButton>
                    </div>
                </div>
            </div>
        </section>
    );
}