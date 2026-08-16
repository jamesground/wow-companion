export type BlizzardCharacterSummary = {
    character: {
        href: string;
    };
    protected_character: {
        href: string;
    };
    name: string;
    id: number;
    realm: {
        name: {
            en_US: string;
        };
        id: number;
        slug: string;
    };
    playable_class: {
        name: {
            en_US: string;
        };
        id: number;
    };
    playable_race: {
        name: {
            en_US: string;
        };
        id: number;
    };
    gender: {
        type: string;
        name: {
            en_US: string;
        };
    };
    faction: {
        type: string;
        name: {
            en_US: string;
        };
    };
    level: number;
};

export type BlizzardWowAccount = {
    id: number;
    characters: BlizzardCharacterSummary[];
};

export type BlizzardWowProfile = {
    id: number;
    wow_accounts: BlizzardWowAccount[];
};

export type BlizzardCharacterProfile = {
    id: number;
    name: string;
    faction: {
        type: string;
        name: {
            en_US: string;
        };
    };
    character_class: {
        name: {
            en_US: string;
        };
        id: number;
    };
    active_spec: {
        name: {
            en_US: string;
        };
        id: number;
    };
    realm: {
        name: {
            en_US: string;
        };
        id: number;
        slug: string;
    };
    level: number;
    average_item_level: number;
    equipped_item_level: number;
    professions: {
        href: string;
    };
};

export type BlizzardProfessionReference = {
    key: {
        href: string;
    };
    name: string;
    id: number;
};

export type BlizzardProfessionTier = {
    skill_points: number;
    max_skill_points: number;
    tier: {
        name: string;
        id: number;
    };
    known_recipes?: unknown[];
};

export type BlizzardCharacterProfession = {
    profession: BlizzardProfessionReference;
    tiers?: BlizzardProfessionTier[];
    skill_points?: number;
    max_skill_points?: number;
    specialization?: {
        name: {
            en_US: string;
        };
    };
};

export type BlizzardProfessionProfile = {
    primaries?: BlizzardCharacterProfession[];
    secondaries?: BlizzardCharacterProfession[];
};