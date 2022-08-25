import { API_KEY } from "../../keys.js";
import axios from "axios";

let currentPrice;
let sybmolsQueried = [];
let sybmolsQueriedPrice = []; // Every time a price is queried, it'll be added here so that if there are symbols in non sequential order, there won't be a need to re-query the API

export async function getCurrentPrice(symb) {
    await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

export async function getSmiles() {
    let userData = await getUserStocks();
    let smiles = [];
    //console.log(userData.userStocksMap.size);
    for (const x of [...userData.userStocksMap.entries()]) console.log(x);

    //for (const x of userData.entries.keys()) {
    // if (userData.get[x] != userData.stocks[x + 1]) {
    //     // No need to make multiple API calls if the symbol is the same

    //     if (sybmolsQueried.includes(userData.stocks[x])) {
    //         // If the symbol has already been queried, then just get the price from the array
    //         currentPrice = sybmolsQueriedPrice.indexOf(userData.stocks[x]);
    //         console.log("Already found so not requerying " + currentPrice);
    //     }
    //     currentPrice = await getCurrentPrice(userData.stocks[x]);
    //     sybmolsQueried.push(userData.stocks[x]);
    //     sybmolsQueriedPrice.push(currentPrice);
    //     console.log(currentPrice);
    // }
    // // let smile = currentPrice - stockBoughtPrices[x];
    // // smiles.push(smile);
    //}
    //console.log(sybmolsQueried + " " + sybmolsQueriedPrice);

    return "Smiles: " + userData.stocks;
}

export async function seeMySymbols() {
    let userData = await getUserStocks();
    return userData.stocks;
}

async function getUserStocks() {
    // let stocks = [];
    // let stockBoughtPrices = [];
    let userStocksMap = new Map();

    const res = await axios.get("/api/dashboard/getstocks"); // Returns a JSON of all the stuff in a users schema

    try {
        // If the user has no symbols then just return
        res.data.stocks;
    } catch (err) {
        return;
    }

    for (let x = 0; x < res.data.stocks.length; x++) {
        let stock = res.data.stocks[x];
        userStocksMap.set(
            Object.keys(stock), // Object.keys(stock) returns the keys of the object
            Object.values(stock)
        );
        //stocks[x] = stocks[x].toString(); // Gets rid of the []s in the array
        //stockBoughtPrices.push();
    }
    return { userStocksMap };
}
