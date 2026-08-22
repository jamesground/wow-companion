import type { BlizzardRecipe } from "./types";
import type { Recipe } from "@/types/Recipe";

export function transformRecipe(
    recipe: BlizzardRecipe,
    profession: string,
    expansion: string
): Recipe {
    return {
        id: recipe.id,
        name: recipe.name.en_US,
        profession,
        expansion,

        reagents: (recipe.reagents ?? []).map((reagent) => ({
            itemId: reagent.reagent.id,
            name: reagent.reagent.name.en_US,
            quantity: reagent.quantity,
        })),

        modifiedCraftingSlots: (
            recipe.modified_crafting_slots ?? []
        ).map((slot) => ({
            id: slot.slot_type.id,
            name: slot.slot_type.name.en_US,
            displayOrder: slot.display_order,
        })),
    };
}