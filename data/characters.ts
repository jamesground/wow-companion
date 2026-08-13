import type { Character } from "@/types/Character";

export const characters: Character[] = [
    {
        id: 1,
        name: "Jamesadin",
        isMain: true,
        level: 90,
        spec: "Protection",
        characterClass: "Paladin",
        realm: "Stormrage",
        region: "US",
        faction: "Alliance",
        itemLevel: 450,
        professions: [
            {
                profession: "Inscription",
                skill: 100,
                concentration: 1000,
            },
            {
                profession: "Herbalism",
                skill: 100,
            },
        ],
    },
    {
        id: 2,
        name: "Druidicus",
        isMain: false,
        level: 90,
        spec: "Guardian",
        characterClass: "Druid",
        realm: "Stormrage",
        region: "US",
        faction: "Alliance",
        itemLevel: 450,
        professions: [
            {
                profession: "Leatherworking",
                skill: 100,
                concentration: 1000,
            },
            {
                profession: "Engineering",
                skill: 100,
                concentration: 1000,
            },
        ],
    },
    {
        id: 3,
        name: "Jameshunts",
        isMain: false,
        level: 90,
        spec: "Beast Mastery",
        characterClass: "Hunter",
        realm: "Stormrage",
        region: "US",
        faction: "Alliance",
        itemLevel: 450,
        professions: [ 
            {
                profession: "Jewelcrafting",
                skill: 100,
                concentration: 1000,
            },
            {
                profession: "Mining",
                skill: 100,
            },
        ],
    },
];
