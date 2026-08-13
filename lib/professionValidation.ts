import type { Character } from "../types/Character";
import { professions } from "../constants/professions";

export function validateProfessions(character: Character) {
    const errors: string[] = [];

    const professionDefinitions = new Map(
        professions.map((profession) => [profession.name, profession])
    );
    
    character.professions.forEach((characterProfession) => {
        const definition = professionDefinitions.get(
            characterProfession.profession
        );

        if (!definition) {
            errors.push(
                `Missing profession definition: ${characterProfession.profession}.`
            );
        }
    });

    const primaryProfessions = character.professions.filter((characterProfession) => {
        const definition = professionDefinitions.get(
            characterProfession.profession
        );

        return definition?.category === "Primary";
    });

    if (primaryProfessions.length > 2) {
        errors.push("Character has more than two primary professions.");
    }

    const duplicateProfessions = character.professions.filter(
        (characterProfession, index, professions) =>
            professions.findIndex(
                (profession) =>
                    profession.profession === characterProfession.profession
            ) !== index
    );

    if (duplicateProfessions.length > 0) {
        const duplicateNames = [
            ...new Set(
                duplicateProfessions.map(
                    (characterProfession) => characterProfession.profession
                )
            ),
        ];
        errors.push(
            `Duplicate profession: ${duplicateNames.join(", ")}.`
        );
    }

    return errors;
}