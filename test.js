import fetch from "node-fetch";

export async function getUsername() {
    let username;
    const apiResponse = await fetch(
        "https://smileystocks.onrender.com/api/"
    ).then((response) => (username = response.json()));
    return await username;
}

console.log(await getUsername());
