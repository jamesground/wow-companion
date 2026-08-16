import { cookies } from "next/headers";

export async function getBlizzardAccessToken() {
    const cookieStore = await cookies();

    return cookieStore.get("blizzard_access_token")?.value;
}