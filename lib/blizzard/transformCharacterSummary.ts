import type { Character } from "../../types/Character";
import type { BlizzardCharacterSummary } from "./types";
import { normalizeCharacterClass } from "./normalize";

export function transformCharacterSummary(
    character: BlizzardCharacterSummary
): Character {
    return {
        id: character.id,
        name: character.name,
        isMain: false,
        region: "US",
        realm: character.realm.name.en_US,
        faction: character.faction.type === "ALLIANCE"
            ? "Alliance"
            : "Horde",
        characterClass: normalizeCharacterClass(
            character.playable_class.name.en_US
        ),
        spec: "",
        professions: [],
        level: character.level,
        itemLevel: 0,
    };
}