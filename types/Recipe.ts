import type { RecipeReagent } from "./RecipeReagent";
import type { RecipeModifiedSlot } from "./RecipeModifiedSlot";

export type Recipe = {
    id: number;
    name: string;
    profession: string;
    expansion: string;
    reagents: RecipeReagent[];
    modifiedCraftingSlots: RecipeModifiedSlot[];
};