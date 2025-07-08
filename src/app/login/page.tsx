'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/strapi';

export default function LoginPage() {
    const [form, setForm] = useState({ identifier: '', password: '' });
    const router = useRouter();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const res = await loginUser(form.identifier, form.password);
            localStorage.setItem('jwt', res.jwt);
            router.push('/dashboard');
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            } else {
                alert('An unknown error occurred.');
            }
        }
    };

    return (
        <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
            <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
                <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">

                    <div className="flex">
                        <a aria-label="Home" href="/">
                            Back to Home
                        </a>
                    </div>
                    <h2 className="mt-20 text-lg font-semibold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Don’t have an account? <a className="font-medium text-blue-600 hover:underline" href="/register">Sign up</a> for a free trial.</p>
                    <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                        <div><label htmlFor=":S1:" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                            <input id=":S1:" autoComplete="email" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor=":S2:" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                            <input id=":S2:" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="password" name="password" />
                        </div>
                        <div>
                            <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" type="submit" color="blue" >
                                <span>Sign in <span aria-hidden="true">→</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
            <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
                <div className="absolute inset-0">
                    {/* <Image
                        src={bG}
                        alt="Background Image"
                        fill
                        className="object-cover"
                    /> */}
                </div>
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <h1 className="text-6xl font-bold text-gray-900">Welcome to Rabbta</h1>
                </div>
            </div>
        </div >

    );
}
