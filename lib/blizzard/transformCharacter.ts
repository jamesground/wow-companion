import type { Character } from "../../types/Character";
import type { CharacterClass } from "../../types/CharacterClass";

type BlizzardCharacter = {
    id: number;
    name: string;
    level: number;
    realm: {
        name: string;
        slug: string;
    };
    faction: {
        type: string;
    };
    character_class: {
        name: CharacterClass;
    };
};

export function transformCharacter(
    character: BlizzardCharacter
): Character {
    return {
        id: character.id,
        name: character.name,
        isMain: false,
        region: "US",
        realm: character.realm.name,
        faction: character.faction.type === "ALLIANCE"
            ? "Alliance"
            : "Horde",
        characterClass: character.character_class.name,
        spec: "",
        professions: [],
        level: character.level,
        itemLevel: 0,
    };
}