import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@inertiajs/react';

export default function GamesCreate() {

    // Remembers what the user types, sends it when they save, and shows any mistake messages from the server.
    const {data, setData, post, processing, errors } = useForm({
        title: '',
        status: 'want_to_play',
        category: '',
        rating: '' as string | number,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        // sends POST to /games with title, status, category, rating
        post('/games');
    }

    return (
        <>
            <Head title="Add game" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-2xl font-semibold">Add game</h1>
                <form onSubmit={submit} className="max-w-md space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={data.title}
                            // this on change means that whenever text is styped into this field it automatically updates each character into value={data.title}
                            // and shows real time changes. We need this so the values saved and to send to the database
                            onChange={(e) => setData('title', e.target.value)}
                            // needs a value to submit the form 
                            required
                        />
                        {/* we render any error inside the message variable. then inputError displays any text value inside message; displaying the error */}
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
                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>
                            Save
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
GamesCreate.layout = {
    breadcrumbs: [
        { title: 'My games', href: '/games' },
        { title: 'Add game', href: '/games/create' },
    ],
};