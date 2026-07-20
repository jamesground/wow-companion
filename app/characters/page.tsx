import AppLayout from "@/components/AppLayout";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function CharactersPage() {
    
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