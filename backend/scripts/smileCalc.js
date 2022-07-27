import { API_KEY } from "../../keys.js";
import fetch from "node-fetch";

export async function getCurrentPrice(symb) {
    const stock = await (
        await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`
        )
    ).json();
    return stock.c;
}
