import AppLayout from "@/components/AppLayout";

export default function CharactersPage() {
    return (
        <AppLayout>
            <h2 className="text-3xl font-bold">
                Characters
            </h2>

            <p className="mt-4 text-zinc-400">
                Manage your World of Warcraft characters.
            </p>
        </AppLayout>
    );
}