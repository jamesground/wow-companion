import { getBlizzardAccessToken } from "@/lib/blizzard/getAccessToken";
import { getCharacterProfiles } from "@/lib/blizzard/getCharacterProfiles";
import { getCharacterSummaries } from "@/lib/blizzard/getCharacterSummaries";
import { getCharacterProfessions } from "@/lib/blizzard/getCharacterProfessions";
import type { BlizzardWowProfile } from "@/lib/blizzard/types";

export async function GET() {
    try {
        const accessToken = await getBlizzardAccessToken();

        if (!accessToken) {
            return Response.json(
                { error: "No Blizzard access token found." },
                { status: 401 }
            );
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
            throw new Error("Failed to fetch Blizzard character data.");
        }

        const data: BlizzardWowProfile = await response.json();

        const summaries = getCharacterSummaries(data);

        const profiles = await getCharacterProfiles(
            summaries,
            accessToken
        );

        const professions = await Promise.all(
            profiles.map((character) =>
                getCharacterProfessions(
                    character,
                    accessToken
                )
            )
        );

        return Response.json(professions);
    } catch (error) {
        return Response.json(
            {
                error: "Failed to load character professions.",
                details:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            { status: 500 }
        );
    }
}