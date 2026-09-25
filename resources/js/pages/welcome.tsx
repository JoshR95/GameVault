import { Head, Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground lg:justify-center lg:p-8">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main
                        className="flex min-h-[380px] w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-2xl shadow-vault-card lg:min-h-[500px] lg:max-w-4xl lg:flex-row"
                    >
                        <div className="flex min-h-full flex-1 flex-col justify-center bg-card p-6 pb-12 text-center text-[13px] text-card-foreground lg:p-20">
                            <h1 className="mb-1 text-4xl font-bold">
                                Welcome to the Game{' '}
                                <span className="text-primary">Vault</span>
                            </h1>

                            <ul className="mt-6 flex justify-center gap-3 text-sm leading-normal">
                                <li>
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-block rounded-sm border border-border px-5 py-1.5 text-sm leading-normal hover:border-vault-border-hover"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={login()}
                                                className="mr-3 inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal hover:border-border"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={register()}
                                                className="inline-block rounded-sm border border-border px-5 py-1.5 text-sm leading-normal hover:border-vault-border-hover"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex aspect-[335/364] w-full shrink-0 items-center justify-center overflow-hidden bg-card p-6 lg:-ml-px lg:aspect-auto lg:min-h-full lg:w-[438px] lg:p-8">
                            <AppLogoIcon className="max-h-full w-full max-w-full" />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
