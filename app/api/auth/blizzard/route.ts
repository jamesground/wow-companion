import { cookies } from "next/headers";
import { randomBytes } from "crypto";
import { blizzardConfig } from "@/lib/blizzard/config";

export async function GET() {
    const state = randomBytes(32).toString("hex");

    const cookieStore = await cookies();

    cookieStore.set("blizzard_oauth_state", state, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });

    const authorizationUrl = new URL(
        "https://oauth.battle.net/authorize"
    );

    authorizationUrl.searchParams.set(
        "client_id",
        blizzardConfig.clientId ?? ""
    );

    authorizationUrl.searchParams.set(
        "redirect_uri",
        "http://localhost:3000/api/auth/blizzard/callback"
    );

    authorizationUrl.searchParams.set(
        "response_type",
        "code"
    );

    authorizationUrl.searchParams.set(
        "scope",
        "wow.profile"
    );

    authorizationUrl.searchParams.set("state", state);

    return Response.redirect(authorizationUrl);
}