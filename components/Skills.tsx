'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import SkillGroup from './SkillGroup';
import { type Skill } from './SkillCard';

const mainSkills: Skill[][] = [
    [
        { name: 'Flutter', icon: '/img/Skills/flutter.svg' },
        { name: 'Android', icon: '/img/Skills/android.svg' },
        { name: 'iOS', icon: '/img/Skills/ios.svg' },
    ],
    [{ name: 'React', icon: '/img/Skills/react.svg' }],
    [
        { name: 'Laravel', icon: '/img/Skills/laravel.svg' },
        { name: 'SQLite', icon: '/img/Skills/sqlite.svg' },
        { name: 'MySQL', icon: '/img/Skills/mysql.svg' },
    ],
];

const otherSkills: Skill[][] = [
    [
        { name: 'React Native', icon: '/img/Skills/react.svg' },
        { name: 'Next.js', icon: '/img/Skills/next.js.svg' },
    ],
    [
        { name: 'Node.js', icon: '/img/Skills/node.js.svg' },
        { name: 'Python (FastAPI)', icon: '/icons/Python.svg' },
    ],
    [
        { name: 'Supabase', icon: '/img/Skills/supabase.svg' },
        { name: 'Google Cloud', icon: '/img/Skills/google-cloud.svg' },
        { name: 'SQL', icon: '/img/Skills/sql.svg' },
        { name: 'Firebase', icon: '/img/Skills/firebase.svg' },
    ],
    [
        { name: 'Google Play Console', icon: '/img/Skills/playconsole.svg' },
        { name: 'App Store Connect', icon: '/img/Skills/appstore1.svg', iconOverlay: '/img/Skills/appstore2.svg' },
    ],
];

export default function Skills() {
    const { language } = useLanguage();
    const t = translations[language].skills;

    return (
        <section id="skills" className="w-full bg-[#F0EEF8] px-6 pb-12 pt-2 lg:px-8 lg:pb-16 lg:pt-4">
            <div className="container mx-auto max-w-7xl rounded-[28px] border border-[#DED9E8] bg-[#F8F7FC] p-5 shadow-[0_3px_12px_rgba(22,27,30,0.08)] lg:p-8">
                <h2 className="mb-8 font-russo text-[24px] uppercase leading-tight text-[#161B1E] lg:text-[32px]">{t.title}</h2>

                <div className="grid gap-5 lg:grid-cols-[1fr_216px]">
                    <div className="rounded-[24px] border border-[#E1DDE9] bg-[#F9F8FC] p-4 shadow-[0_2px_8px_rgba(22,27,30,0.06)] lg:p-6">
                        <h3 className="mb-6 font-russo text-[18px] uppercase text-[#161B1E] lg:text-[22px]">{t.mainStack}</h3>
                        <div className="grid gap-5 lg:grid-cols-[1.35fr_.55fr_1.35fr]">
                            <SkillGroup title={t.mobile} skills={mainSkills[0]} />
                            <SkillGroup title={t.frontend} skills={mainSkills[1]} />
                            <SkillGroup title={t.backendDatabase} skills={mainSkills[2]} />
                        </div>
                    </div>

                    <aside className="relative flex min-h-[230px] flex-col justify-end overflow-hidden rounded-[24px] border-2 border-[#A982DF] bg-[#F8F6FD] p-5">
                        <Image
                            src="/img/Skills/ide.png"
                            alt="IDE"
                            width={200}
                            height={134}
                            className="absolute left-1/2 top-2 h-auto w-[190px] -translate-x-1/2 object-contain"
                        />
                        <div className="relative z-10 mt-24 border-l-2 border-[#9C6ADE] pl-2">
                            <p className="font-poppins text-[13px] font-semibold text-[#161B1E]">{t.evolving}</p>
                            <p className="mt-1 font-poppins text-[11px] leading-snug text-[#4F4D56]">{t.evolvingDescription}</p>
                        </div>
                    </aside>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#E1DDE9] bg-[#F9F8FC] p-4 shadow-[0_2px_8px_rgba(22,27,30,0.06)] lg:p-6">
                    <h3 className="mb-6 font-russo text-[18px] uppercase text-[#161B1E] lg:text-[22px]">{t.otherTechnologies}</h3>
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.8fr_1fr]">
                        <SkillGroup title={t.mobileWeb} skills={otherSkills[0]} />
                        <SkillGroup title={t.backend} skills={otherSkills[1]} />
                        <SkillGroup title={t.databasesCloud} skills={otherSkills[2]} />
                        <SkillGroup title={t.deployTools} skills={otherSkills[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}
