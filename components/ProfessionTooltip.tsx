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

    const currentExpansion = characterProfession.expansions.find(
        (expansion) => expansion.name.startsWith("Midnight")
    );

    return (
        <div className="group/profession relative">
            <Image
                src={definition.icon}
                alt={definition.name}
                width={24}
                height={24}
                className="h-6 w-6 opacity-70 transition-opacity hover:opacity-100"
            />

            <div className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover/profession:opacity-100">
                <p className="font-semibold text-gray-200">
                    {definition.name}
                </p>

                {characterProfession.specialization && (
                    <p className="text-gray-400">
                        {characterProfession.specialization}
                    </p>
                )}

                {currentExpansion ? (
                    <p className="text-gray-400">
                        {currentExpansion.name}: {currentExpansion.skill} /{" "}
                        {currentExpansion.maxSkill}
                    </p>
                ) : characterProfession.skill !== undefined ? (
                    <p className="text-gray-400">
                        Skill: {characterProfession.skill} /{" "}
                        {characterProfession.maxSkill}
                    </p>
                ) : null}
                
                {characterProfession.skill !== undefined && (
                    <p className="text-gray-400">
                        Skill: {characterProfession.skill} /{" "}
                        {characterProfession.maxSkill}
                    </p>
                )}

                {characterProfession.concentration !== undefined && (
                    <p className="text-gray-400">
                        Concentration: {characterProfession.concentration}
                    </p>
                )}
            </div>
        </div>
    );
}