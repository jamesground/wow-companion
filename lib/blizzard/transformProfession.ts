import type {
    BlizzardCharacterProfession,
    BlizzardProfessionProfile,
} from "./types";
import type { CharacterProfession } from "@/types/CharacterProfession";
import type { ProfessionName } from "@/types/Profession";

function transformProfession(
    profession: BlizzardCharacterProfession,
    category: "Primary" | "Secondary"
): CharacterProfession {
    const professionName = profession.profession.name as ProfessionName;

    const tiers = profession.tiers ?? [];

    const expansions = tiers.map((tier) => ({
        name: tier.tier.name,
        id: tier.tier.id,
        skill: tier.skill_points,
        maxSkill: tier.max_skill_points,
    }));

    const currentExpansion = expansions[expansions.length - 1];
    const currentTier = tiers[tiers.length - 1];

    const recipes = (currentTier?.known_recipes ?? []).map((recipe) => ({
        id: recipe.id,
        name: recipe.name,
        profession: professionName,
        expansion: currentExpansion?.name ?? "",
        reagents: [],
        modifiedCraftingSlots: [],
    }));

    return {
        profession: professionName,
        category,
        expansion: expansions,
        skill: currentExpansion?.skill ?? 0,
        specialization: profession.specialization?.name.en_US,
        recipes,
    };
}

export function transformProfessions(
    data: BlizzardProfessionProfile
): CharacterProfession[] {
    const primaryProfessions = (data.primaries ?? []).map((profession) =>
        transformProfession(profession, "Primary")
    );

    const secondaryProfessions = (data.secondaries ?? []).map((profession) =>
        transformProfession(profession, "Secondary")
    );

    return [...primaryProfessions, ...secondaryProfessions];
}