import { Skill } from "./types";

interface SkillListProps {
    skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {

    const getBadge = (level: string) => {
        if (level === "Beginner") return "🟢 Beginner";
        if (level === "Intermediate") return "🟡 Intermediate";
        if (level === "Expert") return "🔴 Expert";
    };

    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id}>
                    {skill.name} - {getBadge(skill.level)}
                </li>
            ))}
        </ul>
    );
};

export default SkillList;
