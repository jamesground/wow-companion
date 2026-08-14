import type { Character } from "../types/Character";

export async function getCharacters(): Promise<Character[]> {
    const response = await fetch("/api/characters");

    return response.json();
}