import { API_KEY } from "../../keys.js";
import axios from "axios";

let currentPrice;

export async function getCurrentPrice(symb) {
    await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

export async function getSmiles() {
    let userData = await getUserStocks();
    // let smiles = [];
    // for (let x = 0; x < stocks.length; x++) {
    //     console.log("stocks[x]: " + x + stocks[x]);
    //     if (stocks[x + 1] == null) {
    //         break;
    //     }
    //     if (stocks[x] != stocks[x + 1]) {
    //         // No need to make multiple API calls if the symbol is the same
    //         let currentPrice = await getCurrentPrice(stocks[x]);
    //         if (currentPrice == 0) console.log(stocks[x] + " is 0");
    //         console.log(currentPrice);
    //     }
    //     if (stocks[x] != stocks[x + 1]) {
    //         console.log(x + stocks[x] + "The thing after this is not equal");
    //     }
    //     //let smile = currentPrice - stockBoughtPrices[x];
    //     //smiles.push(smile);
    // }
    return "Smiles: " + userData.stocks;
}

export async function seeMySymbols() {
    let userData = await getUserStocks();
    return userData.stocks;
}

async function getUserStocks() {
    let stocks = [];
    let stockBoughtPrices = [];

    const res = await axios.get("/api/dashboard/getstocks"); // Returns a JSON of all the stuff in a users schema

    try {
        // If the user has no symbols then just return
        res.data.stocks;
    } catch (err) {
        return;
    }

    for (let x = 0; x < res.data.stocks.length; x++) {
        let stock = res.data.stocks[x];
        stocks.push(Object.keys(stock));
        stocks[x] = stocks[x].toString(); // Gets rid of the []s in the array
        stockBoughtPrices.push(Object.values(res.data.stocks[x]));
    }
    
    return { stocks, stockBoughtPrices };
}
