'use client';

import Image from 'next/image';
import { CrystalButton } from './CrystalButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

// Hero.tsx
export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language];
    const [titleFirstLine, titleSecondLine] = t.hero.title.split('\n');
    const cvUrl = language === 'ES' ? '/CV-ESP.pdf' : '/CV-ENG.pdf';

    return (
        <section className="relative z-0 flex w-full flex-col items-center bg-[#F0EEF8]">
            <div className="relative h-[620px] w-full overflow-hidden sm:h-auto sm:aspect-[3/2]">
                <Image
                    src="/img/Hero-Composition.png"
                    alt=""
                    fill
                    className="object-cover object-center sm:object-fill"
                    priority
                    sizes="100vw"
                />

                <div className="pointer-events-none absolute inset-x-0 top-[16%] z-10 select-none px-4 text-center sm:top-[13%]">
                    <h1 className="font-russo text-[42px] leading-[1.05] text-[#F0EEF866] uppercase tracking-[0.01em] sm:text-[60px] lg:text-[100px]">
                        <span className="block">{titleFirstLine}</span>
                        <span className="block text-[0.7em]">{titleSecondLine}</span>
                    </h1>
                </div>

                <div className="absolute bottom-[8%] left-1/2 z-20 flex -translate-x-1/2 gap-4 sm:bottom-[9%]">
                    <CrystalButton href="https://www.linkedin.com/in/eduardo-velarde-1b93902b2/" icon="/icons/linkedin.svg" className="w-14 h-14" />
                    <CrystalButton href={cvUrl} className="px-8 py-3.5">{t.hero.cvButton}</CrystalButton>
                </div>
            </div>
        </section>
    );
}