import type { CharacterClass } from "./CharacterClass";
import type { Faction } from "./Faction";
import type { Region } from "./Region";
import type { Spec } from "./Spec";
import type { CharacterProfession } from "./CharacterProfession";
    
export type Character = {
    id: number;
    name: string;
    isMain: boolean;
    region: Region;
    realm: string;
    faction: Faction;
    characterClass: CharacterClass;
    spec: Spec;
    professions: CharacterProfession[];
    level: number;
    itemLevel: number;
};