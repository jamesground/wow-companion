import { getBlizzardAccessToken } from "@/lib/blizzard/getAccessToken";

export async function GET() {
    const accessToken = await getBlizzardAccessToken();

    if (!accessToken) {
        return Response.json(
            { error: "No Blizzard access token found." },
            { status: 401 }
        );
    }

    const recipeUrl =
        "https://us.api.blizzard.com/data/wow/recipe/52455?namespace=static-12.1.0_68914-us";

    const response = await fetch(recipeUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const error = await response.text();

        return Response.json(
            {
                error: "Blizzard recipe API request failed.",
                details: error,
            },
            { status: response.status }
        );
    }

    const data = await response.json();

    return Response.json(data);
}