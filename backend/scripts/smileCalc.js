import { API_KEY } from "../../keys.js";
import axios from "axios";
import User from "../models/user.js";

let currentPrice;
async function getCurrentPrice(symb) {
    await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

export async function returnPrice() {
    return await getCurrentPrice("TSLA");
}
