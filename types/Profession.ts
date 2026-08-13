export type ProfessionName =
    | "Alchemy"
    | "Blacksmithing"
    | "Enchanting"
    | "Engineering"
    | "Herbalism"
    | "Inscription"
    | "Jewelcrafting"
    | "Leatherworking"
    | "Mining"
    | "Skinning"
    | "Tailoring"
    | "Cooking"
    | "Fishing";
    
export type ProfessionCategory =
    | "Primary"
    | "Secondary";

export type ProfessionType =
    | "Crafting"
    | "Gathering";
    
export type Profession = {
    name: ProfessionName;
    category: ProfessionCategory;
    type: ProfessionType;
};