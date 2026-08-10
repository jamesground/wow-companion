type CharacterCardProps = {
  character: Character;
};
import type { Character } from "../types/Character";
import { classStyles } from "../constants/classStyles";
import Image from "next/image";

export default function CharacterCard({ character }: CharacterCardProps) {
  const classStyle = classStyles[character.characterClass];

  return (
    <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-900 hover:-translate-y-1 transition-colors hover:bg-gray-800 group relative">
      
      <Image
        src={classStyle.icon}
        alt=""
        width={128}
        height={128}
        className="absolute right-8 top-1/2 h-64 w-64 -translate-y-1/2 opacity-7 transition-opacity group-hover:opacity-10"
      />
      <div
        className="w-1 shrink-0 opacity-25 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: classStyle.color }}
      />
      
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold"
                style={{ color: classStyle.color }}>
                
                {character.name}
            </h2>
            <span className="text-sm text-gray-400">
                {character.isMain && "👑 "}
                {character.level}
            </span>
        </div>

        <p className="mt-2 text-gray-300">
            {character.spec} {character.characterClass}
        </p>

        <div className="flex items-center justify-between">
            <p className="mt-1 text-sm text-gray-500">
            {character.realm} ({character.region}) • {character.faction}
            </p>

            <span className="text-sm text-gray-400">
                {character.itemLevel}
            </span>
        </div>

      </div>
      
    </div>
  );
}