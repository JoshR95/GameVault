import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#060a12] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main
                        className="flex min-h-[380px] w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(255,193,7,0.5),0_0_48px_rgba(255,193,7,0.2),0_24px_48px_-12px_rgba(0,0,0,0.65)] lg:min-h-[500px] lg:max-w-4xl lg:flex-row"
                    >
                        <div className="flex min-h-full flex-1 flex-col justify-center bg-[#0f1a2e] p-6 pb-12 text-center text-[13px] text-white lg:p-20">
                            <h1 className="mb-1 text-4xl font-bold text-white">
                                Welcome to the Game{' '}
                                <span className="text-[#FFC107]">Vault</span>
                            </h1>

                            <ul className="mt-6 flex justify-center gap-3 text-sm leading-normal">
                                <li>
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-block rounded-sm border border-[#3E3E3A] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#62605b]"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={login()}
                                                className="mr-3 inline-block rounded-sm border px-5 py-1.5 text-sm leading-normal text-white hover:border-[#3E3E3A]"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={register()}
                                                className="inline-block rounded-sm border  px-5 py-1.5 text-sm leading-normal text-white hover:border-[#62605b]"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex aspect-[335/364] w-full shrink-0 items-center justify-center overflow-hidden bg-[#0f1a2e] p-6 lg:-ml-px lg:aspect-auto lg:min-h-full lg:w-[438px] lg:p-8">
                            <img
                                src="/images/gameVault1.png"
                                alt="Game vault logo image"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
