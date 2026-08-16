import type {
    BlizzardCharacterSummary,
    BlizzardWowProfile,
} from "./types";

export function getCharacterSummaries(
    profile: BlizzardWowProfile
): BlizzardCharacterSummary[] {
    return profile.wow_accounts.flatMap(
        (wowAccount) => wowAccount.characters
    );
}