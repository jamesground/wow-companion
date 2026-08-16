import type { ProfessionCategory, ProfessionName } from "./Profession";

export type ProfessionExpansion = {
    name: string;
    id: number;
    skill: number;
    maxSkill: number;
};

export type CharacterProfession = {
    profession: ProfessionName;
    category: ProfessionCategory;
    expansions: ProfessionExpansion[];
    skill?: number;
    maxSkill?: number;
    specialization?: string;
    concentration?: number;
};