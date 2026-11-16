const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function api<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
}