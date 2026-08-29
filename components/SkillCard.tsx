import Image from 'next/image';

export interface Skill {
    name: string;
    icon: string;
    iconOverlay?: string;
}

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="flex min-w-[76px] flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#DDD9E8] bg-white shadow-[0_3px_8px_rgba(22,27,30,0.08)] lg:h-16 lg:w-16">
                <span className="relative flex h-11 w-11 items-center justify-center">
                    <Image src={skill.icon} alt="" width={42} height={42} className="h-9 w-9 object-contain lg:h-11 lg:w-11" />
                    {skill.iconOverlay && <Image src={skill.iconOverlay} alt="" width={29} height={26} className="absolute h-[26px] w-[29px] object-contain" />}
                </span>
            </div>
            <span className="max-w-[92px] text-center font-poppins text-[10px] leading-tight text-[#4F4D56] lg:text-[12px]">
                {skill.name}
            </span>
        </div>
    );
}
