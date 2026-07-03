import Header from "./Header";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header />

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}