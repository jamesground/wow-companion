import { getCharacters } from "@/lib/charactersService";

export async function GET() {
    try {
        const characters = await getCharacters();

        return Response.json(characters);
    } catch (error) {
        if (
            error instanceof Error &&
            error.message === "BLIZZARD_AUTH_REQUIRED"
        ) {
            return Response.json(
                {
                    error: "Blizzard authentication required.",
                },
                { status: 401 }
            );
        }

        return Response.json(
            {
                error: "Failed to load characters.",
                details:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            { status: 500 }
        );
    }
}