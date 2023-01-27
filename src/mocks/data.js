/**
 * depend the location of .json
 */
let link = "http://localhost:3000/user/"

/**
 * call the JSON
 * @param {string} id 
 * @param {string} context 
 * @returns promess || error
 */
export async function getFetch(id, context) {
    try {
        const response = await fetch(`${link}+${id}/${context}`);
        if (response.status !== 200) {
            return new Error("Problème d'accès aux données de l'API");
        }
        return response.json();
    } catch {
        throw new Error("Problème d'accès aux données de l'API");
    }
}