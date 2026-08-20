import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { blizzardConfig } from "@/lib/blizzard/config";

export async function GET(request: Request) {
    const url = new URL(request.url);

    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    const cookieStore = await cookies();
    const savedState = cookieStore.get("blizzard_oauth_state")?.value;

    if (!code) {
        return Response.json(
            { error: "Missing authorization code." },
            { status: 400 }
        );
    }

    if (!state || state !== savedState) {
        return Response.json(
            { error: "Invalid OAuth state." },
            { status: 400 }
        );
    }

    const tokenResponse = await fetch(
        "https://oauth.battle.net/token",
        {
            method: "POST",
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${blizzardConfig.clientId}:${blizzardConfig.clientSecret}`
                    ).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri:
                    "http://localhost:3000/api/auth/blizzard/callback",
            }),
        }
    );

    if (!tokenResponse.ok) {
        const error = await tokenResponse.text();

        return Response.json(
            {
                error: "Failed to exchange authorization code.",
                details: error,
            },
            { status: 500 }
        );
    }

    const tokenData = await tokenResponse.json();

    cookieStore.set("blizzard_access_token", tokenData.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: tokenData.expires_in,
    });

    cookieStore.delete("blizzard_oauth_state");

    const response = NextResponse.redirect(
        new URL("/characters", request.url)
    );
    
    response.cookies.set(
        "blizzard_access_token",
        tokenData.access_token,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: tokenData.expires_in,
            path: "/",
        }
    );
    return response;
}