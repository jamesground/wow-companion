import type { ProfessionName } from "./Profession";
import type { Recipe } from "./Recipe";

export type CharacterProfession = {
    profession: ProfessionName;
    category: "Primary" | "Secondary";
    skill: number;
    expansion: {
        name: string;
        id: number;
        skill: number;
        maxSkill: number;
    }[];
    specialization?: string;
    recipes: Recipe[];
};