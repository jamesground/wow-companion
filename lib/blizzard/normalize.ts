import type { CharacterClass } from "../../types/CharacterClass";
import type { ProfessionName } from "../../types/Profession";

const professionNames: ProfessionName[] = [
    "Alchemy",
    "Archaeology",
    "Blacksmithing",
    "Enchanting",
    "Engineering",
    "Herbalism",
    "Inscription",
    "Jewelcrafting",
    "Leatherworking",
    "Mining",
    "Skinning",
    "Tailoring",
    "Cooking",
    "Fishing",
];

const characterClasses: CharacterClass[] = [
    "Warrior",
    "Paladin",
    "Hunter",
    "Rogue",
    "Priest",
    "Death Knight",
    "Shaman",
    "Mage",
    "Warlock",
    "Monk",
    "Druid",
    "Demon Hunter",
    "Evoker",
];

export function normalizeProfessionName(
    name: string
): ProfessionName {
    if (professionNames.includes(name as ProfessionName)) {
        return name as ProfessionName;
    }

    throw new Error(
        `Unknown Blizzard profession: ${name}`
    );
}

export function normalizeCharacterClass(
    name: string
): CharacterClass {
    if (characterClasses.includes(name as CharacterClass)) {
        return name as CharacterClass;
    }

    throw new Error(
        `Unknown Blizzard character class: ${name}`
    );
}