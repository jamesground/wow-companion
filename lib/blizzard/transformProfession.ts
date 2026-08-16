import { normalizeProfessionName } from "./normalize";
import type { CharacterProfession } from "../../types/CharacterProfession";
import type { ProfessionCategory } from "../../types/Profession";
import type {
    BlizzardCharacterProfession,
    BlizzardProfessionProfile,
} from "./types";

function transformCharacterProfession(
    profession: BlizzardCharacterProfession,
    category: ProfessionCategory
): CharacterProfession {
    return {
        profession: normalizeProfessionName(
            profession.profession.name
        ),
        category,
        expansions: (profession.tiers ?? []).map((tier) => ({
            name: tier.tier.name,
            id: tier.tier.id,
            skill: tier.skill_points,
            maxSkill: tier.max_skill_points,
        })),
        skill: profession.skill_points,
        maxSkill: profession.max_skill_points,
        specialization: profession.specialization?.name.en_US,
    };
}

export function transformProfessions(
    profile: BlizzardProfessionProfile
): CharacterProfession[] {
    const primaryProfessions = (profile.primaries ?? []).map(
        (profession) =>
            transformCharacterProfession(profession, "Primary")
    );

    const secondaryProfessions = (profile.secondaries ?? []).map(
        (profession) =>
            transformCharacterProfession(profession, "Secondary")
    );

    return [
        ...primaryProfessions,
        ...secondaryProfessions,
    ];
}