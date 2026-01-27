// components/LanguageSelector.tsx
'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-4 p-2.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.1)]">
            <button
                onClick={() => setLanguage('ES')}
                className={`flex flex-col items-center gap-1 group transition-all ${language === 'ES' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                        src="/img/spanish.png"
                        alt="ES"
                        fill
                        className="object-cover"
                        sizes="32px"
                        priority
                    />
                </div>
                <span className={`text-[10px] font-poppins transition-colors ${language === 'ES' ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    ES
                </span>
            </button>

            <div className="w-8 h-[1px] bg-white/10" />

            <button
                onClick={() => setLanguage('EN')}
                className={`flex flex-col items-center gap-1 group transition-all ${language === 'EN' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                        src="/img/english.png"
                        alt="EN"
                        fill
                        className="object-cover"
                        sizes="32px"
                        priority
                    />
                </div>
                <span className={`text-[10px] font-poppins transition-colors ${language === 'EN' ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    EN
                </span>
            </button>
        </div>
    );
};