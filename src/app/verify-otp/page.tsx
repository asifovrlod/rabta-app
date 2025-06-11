'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerifyOtpPage() {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    const email = searchParams.get('email'); // you should pass email as query param from registration

    const handleVerify = async () => {
        if (!email || !code) {
            setMessage('Missing email or OTP');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: email, code }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error?.message || 'Verification failed');
            }

            setMessage('Verification successful! Redirecting to login...');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err: any) {
            setMessage(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-md">
            <h1 className="text-xl font-bold mb-4">Verify OTP</h1>
            <p className="mb-2 text-gray-600">Enter the OTP sent to your email or phone</p>
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter OTP"
            />
            <button
                onClick={handleVerify}
                disabled={loading}
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                {loading ? 'Verifying...' : 'Verify'}
            </button>
            {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
    );
}
