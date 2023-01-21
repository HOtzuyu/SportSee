async function customFetch(url) {
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            return new Error("Problème d'accès aux données de l'API");
        }
        return response.json();
    } catch {
        throw new Error("Problème d'accès aux données de l'API");
    }
}

export async function getUser(id) {
    return customFetch(`http://localhost:3000/user/${id}`);
}

export async function getUserActivity(id) {
    return customFetch(`http://localhost:3000/user/${id}/activity`);
}