import type { BlizzardProfessionProfile } from "@/lib/blizzard/types";
import { transformProfessions } from "@/lib/blizzard/transformProfession";
import { getBlizzardAccessToken } from "@/lib/blizzard/getAccessToken";

export async function GET() {
    const accessToken = await getBlizzardAccessToken();

    if (!accessToken) {
        return Response.json(
            { error: "No Blizzard access token found." },
            { status: 401 }
        );
    }

    const professionsUrl =
        "https://us.api.blizzard.com/profile/wow/character/thunderlord/tygris/professions?namespace=profile-us";

    const response = await fetch(professionsUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const error = await response.text();

        return Response.json(
            {
                error: "Blizzard professions API request failed.",
                details: error,
            },
            { status: response.status }
        );
    }

    const data: BlizzardProfessionProfile = await response.json();

    const professions = transformProfessions(data);

    return Response.json(professions);
}