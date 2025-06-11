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
        <form onSubmit={handleLogin}>
            <input placeholder="Email or Username" onChange={(e) => setForm({ ...form, identifier: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Login</button>
        </form>
    );
}
