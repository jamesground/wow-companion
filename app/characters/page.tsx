import AppLayout from "@/components/AppLayout";
import CharacterCard from "@/components/CharacterCard";
import type { Character } from "@/types/Character";

export default function CharactersPage() {
    const characters: Character[] = [
        {
            id: 1,
            name: "Jamesadin",
            level: 90,
            spec: "Protection",
            characterClass: "Paladin",
            realm: "Stormrage",
            region: "US",
            faction: "Alliance",
        },
        {
            id: 2,
            name: "Druidicus",
            level: 90,
            spec: "Guardian",
            characterClass: "Druid",
            realm: "Stormrage",
            region: "US",
            faction: "Alliance",
        },
        {
            id: 3,
            name: "Jameshunts",
            level: 90,
            spec: "Beast Mastery",
            characterClass: "Hunter",
            realm: "Stormrage",
            region: "US",
            faction: "Alliance",
        },
    ];

    return (
        <AppLayout>
            <h2 className="text-3xl font-bold">
                Characters
            </h2>

            <p className="mt-4 text-zinc-400">
                Manage your World of Warcraft characters.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </AppLayout>
    );
}