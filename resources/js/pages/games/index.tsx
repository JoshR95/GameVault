import { Head, Link } from '@inertiajs/react';

type Game = {
    id: number;
    title: string;
    status: string;
    category: string;
    rating: number | null;
};

export default function GamesIndex({ games }: { games: Game[] }) {
    return (
        <>
            <Head title="My games" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-2xl font-semibold">My games</h1>
                <div>
                    <Link
                        href="/games/create"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                        Add a game
                    </Link>
                </div>

                {games.length === 0 ? (
                    <p className="text-muted-foreground">No games yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {games.map((game) => (
                            <li
                                key={game.id}
                                className="rounded-lg border border-sidebar-border/70 p-3 dark:border-sidebar-border"
                            >
                                <div className="font-medium">{game.title}</div>
                                <div className="text-sm text-muted-foreground">
                                    {game.status} · {game.category}
                                    {game.rating != null ? ` · ${game.rating}/10` : ''}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

GamesIndex.layout = {
    breadcrumbs: [
        {
            title: 'My games',
            href: '/games',
        },
    ],
};
