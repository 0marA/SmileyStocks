import { API_KEY } from "../../keys.js";
import axios from "axios";
import User from "../models/user.js";
//import userID from "../controllers/userController"
let userID = "62e6d96a51186be0ad2864f9";

let currentPrice;
let stocks = [];
let stockBoughtPrices = [];

export async function getCurrentPrice(symb) {
    await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

export async function getSmiles() {
    const res = await axios.get("/api/dashboard/getstocks");
    for (let x = 0; x < res.data.stocks.length; x++) {
        //stocks.push(res.data.stocks[x]);
    }
    return res.data.stocks;
}

export async function seeMySymbols() {
    await getUserStocks();
    return stocks;
}

async function getUserStocks() {
    // Returns a JSON of all the stuff in a users schema
    const res = await axios.get("/api/dashboard/getstocks");

    for (let x = 0; x < res.data.stocks.length; x++) {
        let stock = res.data.stocks[x];
        stocks.push(Object.keys(stock));
        stocks[x] = stocks[x].toString(); // Gets rid of the []s in the array
        stockBoughtPrices.push(Object.values(res.data.stocks[x]));
    }
}
