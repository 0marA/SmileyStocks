import { API_KEY } from "../../keys.js";
import axios from "axios";

let currentPrice;
let symbolsQueried = new Map(); // Every time a price is queried, it'll be added here along with its price so that if there are
// symbols in non sequential order, there won't be a need to re-query the API and the price will be sorted with the symbol

export async function getCurrentPrice(symb) {
    // await axios
    //     .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
    //     .then((response) => (currentPrice = response.data.c));
    // return currentPrice;
    return 300;
}

export async function getSmiles() {
    let userData = await getUserStocks();
    let smiles = [];
    let userDataArray = Array.from([...userData.userStocksMap.entries()]); // This way we can peak at the next symbol in the array
    userDataArray.sort();

    for (let x = 0; x < userDataArray.length; x++) {
        if (userDataArray[x] != userDataArray[x + 1]) {
            // No need to make multiple API calls if the symbol is the same
            if (symbolsQueried.has(userDataArray[x][0][0])) {
                // If the symbol has already been queried, then just get the price from the array
                currentPrice = symbolsQueried.get(userDataArray[x][1][1]);
                console.log(
                    "Already found" +
                        userDataArray[x][0] +
                        " so not requerying " +
                        x
                );
            } else {
                // If the symbol has not been queried, then query the API and add it to the map
                currentPrice = await getCurrentPrice(userDataArray[x][1]);
                symbolsQueried.set(userDataArray[x][0][0], currentPrice);
                console.log("not queried before" + userDataArray[x][0][0] + x);
            }
        }

        // console.log(currentPrice);
        // let smile = currentPrice - stockBoughtPrices[x];
        // smiles.push(smile);
    }

    let symbolsQueriedArray = Array.from([...symbolsQueried.entries()]);
    //console.log(symbolsQueriedArray);
    return "Smiles: " + symbolsQueriedArray;
}

export async function seeMySymbols() {
    let userData = await getUserStocks();
    return userData.stocks;
}

async function getUserStocks() {
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
    }
    return { userStocksMap };
}
