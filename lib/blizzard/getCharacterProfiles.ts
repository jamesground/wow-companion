import type {
    BlizzardCharacterProfile,
    BlizzardCharacterSummary,
} from "./types";

export async function getCharacterProfiles(
    characters: BlizzardCharacterSummary[],
    accessToken: string
): Promise<BlizzardCharacterProfile[]> {
    const profiles = await Promise.all(
        characters
            .filter((character) => character.level > 10)
            .map(async (character) => {
                const response = await fetch(
                    character.character.href,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch character profile for ${character.name}.`
                    );
                }

                return (await response.json()) as BlizzardCharacterProfile;
            })
    );

    return profiles;
}