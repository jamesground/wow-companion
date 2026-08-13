import type { ProfessionName } from "./Profession";

export type CharacterProfession = {
    profession: ProfessionName;
    skill: number;
    concentration?: number;
};