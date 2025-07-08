// lib/strapi.js

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

export async function registerUser(firstname: any, lastname: any, email: any, password: any, referralsource: string) {
    const res = await fetch(`${API_URL}/auth/local/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, password, referralsource }),
    });
    if (!res.ok) throw new Error('Registration failed');
    return res.json();
}

export async function loginUser(identifier: any, password: any) {
    const res = await fetch(`${API_URL}/auth/local`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
    });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
}

export async function getMe(token: any) {
    const res = await fetch(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error('Invalid token');
    return res.json();
}

export async function getPosts(token: any) {
    const res = await fetch(`${API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error('Cannot fetch posts');
    return res.json();
}

export async function createPost(token: any, data: any) {
    const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    if (!res.ok) throw new Error('Post creation failed');
    return res.json();
}

export async function updatePost(token: any, id: any, data: any) {
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    if (!res.ok) throw new Error('Update failed');
    return res.json();
}

export async function deletePost(token: any, id: any) {
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error('Delete failed');
    return res.json();
}
