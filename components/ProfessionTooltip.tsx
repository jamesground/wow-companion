import type { CharacterProfession } from "../types/CharacterProfession";
import { professions } from "../constants/professions";
import Image from "next/image";

type ProfessionTooltipProps = {
    characterProfession: CharacterProfession;
};

export default function ProfessionTooltip({
    characterProfession,
}: ProfessionTooltipProps) {
    const definition = professions.find(
        (profession) => profession.name === characterProfession.profession
    );

    if (!definition) {
        return null;
    }

    return (
        <div className="group/profession relative">
            <Image
                src={definition.icon}
                alt={definition.name}
                width={24}
                height={24}
                className="h-6 w-6 opacity-70 transition-opacity hover:opacity-100"
            />

            <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover/profession:opacity-100">
                <p className="font-semibold text-gray-200">
                    {definition.name}
                </p>

                <p className="text-gray-400">
                    Skill: {characterProfession.skill}
                </p>

                {characterProfession.concentration !== undefined && (
                    <p className="text-gray-400">
                        Concentration: {characterProfession.concentration}
                    </p>
                )}
            </div>
        </div>
    );
}