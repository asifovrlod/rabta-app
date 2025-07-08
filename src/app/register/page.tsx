'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { registerUser } from '@/lib/strapi';
import bG from "../../assets/media/background/bg.png"; // Adjust the path as necessary


export default function RegisterPage() {
    const [form, setForm] = useState({ firstname: '', lastname: '', email: '', password: '', referralsource: 'Social Media' });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await registerUser(form.firstname, form.lastname, form.email, form.password, form.referralsource);
            router.push(`/verify-otp?email=${encodeURIComponent(form.email)}`);
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
                        <a aria-label="Home" href="/">Back to Home</a>
                    </div>
                    <h2 className="mt-20 text-lg font-semibold text-gray-900">Get started for free</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Already registered? <a className="font-medium text-blue-600 hover:underline" href="/login">Sign in</a> to your account.</p>
                    <form onSubmit={handleSubmit} action="#" className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        <div>
                            <label htmlFor=":S1:" className="mb-3 block text-sm font-medium text-gray-700">First name</label>
                            <input value={form.firstname} onChange={(e) => setForm({ ...form, firstname: e.target.value })} id=":S1:" autoComplete="given-name" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="text" name="first_name" />
                        </div>
                        <div>
                            <label htmlFor=":S2:" className="mb-3 block text-sm font-medium text-gray-700">Last name</label>
                            <input value={form.lastname} onChange={(e) => setForm({ ...form, lastname: e.target.value })} id=":S2:" autoComplete="family-name" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="text" name="last_name" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor=":S3:" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} id=":S3:" autoComplete="email" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="email" name="email" />
                        </div>
                        <div className="col-span-full"><label htmlFor=":S4:" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                            <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} id=":S4:" autoComplete="new-password" required className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm" type="password" name="password" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor=":S5:" className="mb-3 block text-sm font-medium text-gray-700">How did you hear about us?</label>
                            <select onChange={(e) => setForm({ ...form, referralsource: e.target.value })} id=":S5:" name="referral_source" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm pr-8">
                                <option>Social Media</option>
                                <option>Referral Friend</option>
                                <option>By Visiting</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" type="submit" color="blue">
                                <span>Sign up <span aria-hidden="true">→</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
            <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
                <div className="absolute inset-0">

                </div>
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <h1 className="text-6xl font-bold text-gray-900">Welcome to Rabbta</h1>
                </div>
            </div>
        </div>
    );
}
