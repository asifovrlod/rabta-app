'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getMe } from '@/lib/strapi';

type User = {
    username: string;
    // add other properties if needed
};

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (!token) return router.push('/login');

        getMe(token)
            .then(setUser)
            .catch(() => router.push('/login'));
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {user ? <p>Welcome, {user.username}</p> : <p>Loading...</p>}
        </div>
    );
}


