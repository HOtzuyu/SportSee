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

let link = "http://localhost:3000/user/"

export async function getUser(id) {
    return customFetch(`${link}+${id}`);
}

export async function getUserActivity(id) {
    return customFetch(`${link}+${id}/activity`);
}

export async function getUserPerformance(id) {
    return customFetch(`${link}+${id}/performance`)
}

export async function getUserAverageSessions(id) {
    return customFetch(`${link}+${id}/average-sessions`);
}