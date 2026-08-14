import { characters } from "@/data/characters";

export async function GET() {
    return Response.json(characters);
}