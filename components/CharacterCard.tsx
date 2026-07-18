type CharacterCardProps = {
  character: Character;
};
import type { Character } from "../types/Character";

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
            {character.name}
            </h2>
        <span className="text-sm text-gray-400">
            {character.level}
        </span>
      </div>

      <p className="mt-2 text-gray-300">
        {character.spec} {character.characterClass}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {character.realm} ({character.region}) • {character.faction}
      </p>
    </div>
  );
}