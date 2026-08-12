"use client";

import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function CharactersPage() {
    const [showMainsOnly, setShowMainsOnly] = useState(false);
    const [sortBy, setSortBy] = useState("name");

    return (
        <AppLayout>
            <h2 className="text-3xl font-bold">
                Characters
            </h2>

            <p className="mt-4 text-zinc-400">
                Manage your World of Warcraft characters.
            </p>

            <div className="mt-4 flex items-center gap-2">
                <input
                    type="checkbox"
                    id="showMainsOnly"
                    checked={showMainsOnly}
                    onChange={() => setShowMainsOnly(!showMainsOnly)}
                />
                <label htmlFor="showMainsOnly" className="text-zinc-400">
                    Show mains only
                </label>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <label htmlFor="sortBy" className="text-zinc-400">
                    Sort by:
                </label>

                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="rounded border border-gray-700 bg-gray-900 px-2 py-1 text-sm text-zinc-300"
                >
                    <option value="name">Name</option>
                    <option value="level">Level</option>
                    <option value="itemLevel">Item Level</option>
                </select>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {...characters
                    .filter((character) => !showMainsOnly || character.isMain)
                    .sort((a, b) => {
                        if (sortBy === "name") {
                            return a.name.localeCompare(b.name);
                        }
                        if (sortBy === "level") {
                            return b.level - a.level;
                        }
                        if (sortBy === "itemLevel") {
                            return b.itemLevel - a.itemLevel;
                        }
                        return 0;
                    })
                    .map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                    />
                ))}
            </div>
        </AppLayout>
    );
}