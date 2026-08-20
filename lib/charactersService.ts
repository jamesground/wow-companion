import { getBlizzardAccessToken } from "./blizzard/getAccessToken";
import { getCharacterProfiles } from "./blizzard/getCharacterProfiles";
import { getCharacterProfessions } from "./blizzard/getCharacterProfessions";
import { getCharacterSummaries } from "./blizzard/getCharacterSummaries";
import { transformCharacter } from "./blizzard/transformCharacter";
import { transformCharacterSummary } from "./blizzard/transformCharacterSummary";
import { transformProfessions } from "./blizzard/transformProfession";
import { mainCharacterIds } from "./characterSettings";
import type { Character } from "../types/Character";
import type { BlizzardWowProfile } from "./blizzard/types";

export async function getCharacters(): Promise<Character[]> {
    const accessToken = await getBlizzardAccessToken();

    if (!accessToken) {
        throw new Error("BLIZZARD_AUTH_REQUIRED");
    }

    const response = await fetch(
        "https://us.api.blizzard.com/profile/user/wow?namespace=profile-us",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("BLIZZARD_AUTH_REQUIRED");
        }

        throw new Error("Failed to fetch Blizzard character data.");
    }

    const data: BlizzardWowProfile = await response.json();

    const characterSummaries = getCharacterSummaries(data);

    const characterProfiles = await getCharacterProfiles(
        characterSummaries,
        accessToken
    );

    const fullCharacters = await Promise.all(
        characterProfiles.map(async (character) => {
            const professionProfile = await getCharacterProfessions(
                character,
                accessToken
            );

            const professions = transformProfessions(
                professionProfile
            );

            const transformedCharacter = transformCharacter(
                character
            );

            transformedCharacter.isMain = mainCharacterIds.has(
                character.id
            );

            return {
                ...transformedCharacter,
                professions,
            };
        })
    );

    const lowLevelCharacters = characterSummaries
        .filter((character) => character.level <= 10)
        .map((character) => {
        const transformedCharacter = transformCharacterSummary(
            character
        );

        transformedCharacter.isMain = mainCharacterIds.has(
            character.id
        );

        return transformedCharacter;
    });

    return [
        ...fullCharacters,
        ...lowLevelCharacters,
    ];
}