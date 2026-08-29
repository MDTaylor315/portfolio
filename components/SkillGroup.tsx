import SkillCard, { type Skill } from './SkillCard';

interface SkillGroupProps {
    title: string;
    skills: Skill[];
    className?: string;
}

export default function SkillGroup({ title, skills, className = '' }: SkillGroupProps) {
    return (
        <div className={`min-w-0 ${className}`}>
            <h4 className="mb-3 border-l-[2px] border-[#9C6ADE] pl-2 font-poppins text-[13px] font-semibold leading-none text-[#161B1E] lg:text-[15px]">
                {title}
            </h4>
            <div className="grid min-h-[112px] grid-cols-[repeat(auto-fit,76px)] justify-center gap-2 rounded-xl border border-[#E3DFEB] bg-[#F7F5FB] px-3 py-3 shadow-[0_2px_7px_rgba(22,27,30,0.05)] lg:min-h-[126px] lg:gap-3">
                {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
        </div>
    );
}
