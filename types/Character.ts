import type { CharacterClass } from "./CharacterClass";
import type { Faction } from "./Faction";
import type { Region } from "./Region";
import type { Spec } from "./Spec";

export type Character = {
    id: number;
    name: string;
    region: Region;
    realm: string;
    faction: Faction;
    characterClass: CharacterClass;
    spec: Spec;
    level: number;
};