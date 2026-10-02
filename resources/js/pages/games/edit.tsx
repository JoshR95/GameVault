import { Head, Link, router, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Game = {
    id: number;
    title: string;
    status: string;
    category: string;
    rating: number | string | null;
};


export default function GamesEdit({ game }: { game: Game }) {
    // we pass game as a prop as this is an edit so all the original information is there and can be edited 
    const { data, setData, put, processing, errors } = useForm({
        title: game.title,
        status: game.status,
        category: game.category,
        rating: game.rating ?? '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(`/games/${game.id}`);
    }

    function deleteGame() {
        if (confirm('Delete this game from your library?')) {
            router.delete(`/games/${game.id}`);
        }
    }

    return (
        <>
            <Head title={`Edit ${game.title}`} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-2xl font-semibold">Edit game</h1>

                <form onSubmit={submit} className="max-w-md space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                        <InputError message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <select
                            id="status"
                            name="status"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            className="border-input bg-background rounded-md border px-3 py-2 text-sm"
                        >
                            <option value="want_to_play">Want to play</option>
                            <option value="played">Played</option>
                        </select>
                        <InputError message={errors.status} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                            id="category"
                            name="category"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            placeholder="e.g. RPG, Action"
                            required
                        />
                        <InputError message={errors.category} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="rating">Rating (0–10, one decimal, optional)</Label>
                        <Input
                            id="rating"
                            name="rating"
                            type="number"
                            min={0}
                            max={10}
                            step={0.1}
                            value={data.rating}
                            onChange={(e) => setData('rating', e.target.value)}
                        />
                        <InputError message={errors.rating} />
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button type="submit" disabled={processing}>
                            Save changes
                        </Button>
                        <Button type="button" variant="outline" onClick={deleteGame}>
                            Delete
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/games">Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

GamesEdit.layout = {
    breadcrumbs: [
        { title: 'My games', href: '/games' },
        { title: 'Edit game', href: '#' },
    ],
};
