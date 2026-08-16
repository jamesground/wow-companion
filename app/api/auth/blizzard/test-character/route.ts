import type { BlizzardCharacterProfile } from "@/lib/blizzard/types";
import { transformCharacter } from "@/lib/blizzard/transformCharacter";
import { getBlizzardAccessToken } from "@/lib/blizzard/getAccessToken";

export async function GET() {
    const accessToken = await getBlizzardAccessToken();

    if (!accessToken) {
        return Response.json(
            { error: "No Blizzard access token found." },
            { status: 401 }
        );
    }

    const characterUrl =
        "https://us.api.blizzard.com/profile/wow/character/thunderlord/tygris?namespace=profile-us";

    const response = await fetch(characterUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const error = await response.text();

        return Response.json(
            {
                error: "Blizzard character API request failed.",
                details: error,
            },
            { status: response.status }
        );
    }

    const data: BlizzardCharacterProfile = await response.json();

    const character = transformCharacter(data);

    return Response.json(character);
}