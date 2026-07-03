import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-900 border-r border-zinc-800 pt-18 p-4">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                        href="/"
                        className="block rounded-md px-3 py-2 hover:bg-zinc-800"
                    >
                        🏠 Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/characters"
                        className="block rounded-md px-3 py-2 hover:bg-zinc-800"
                    >
                        👤 Characters
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/midsummer"
                        className="block rounded-md px-3 py-2 hover:bg-zinc-800"
                    >
                        🕯️ Midsummer
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/settings"
                        className="block rounded-md px-3 py-2 hover:bg-zinc-800"
                    >
                        ⚙️ Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}