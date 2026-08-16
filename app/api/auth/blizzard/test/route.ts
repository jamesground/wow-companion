import { getBlizzardAccessToken } from "@/lib/blizzard/getAccessToken";
import type { BlizzardWowProfile } from "@/lib/blizzard/types";
import { getCharacterSummaries } from "@/lib/blizzard/getCharacterSummaries";

export async function GET() {
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
        const error = await response.text();

        return Response.json(
            {
                error: "Blizzard API request failed.",
                details: error,
            },
            { status: response.status }
        );
    }

    const data: BlizzardWowProfile = await response.json();

    const characters = getCharacterSummaries(data);

    return Response.json(characters);
}