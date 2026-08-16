import type {
    BlizzardCharacterProfile,
    BlizzardProfessionProfile,
} from "./types";

export async function getCharacterProfessions(
    character: BlizzardCharacterProfile,
    accessToken: string
): Promise<BlizzardProfessionProfile> {
    const response = await fetch(
        character.professions.href,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            `Failed to fetch professions for ${character.name}.`
        );
    }

    return (await response.json()) as BlizzardProfessionProfile;
}