import axios from "axios";
let smileWorth = 1;
let currentPrice

export async function getCurrentPrice(symb) {
    await this.axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${process.env.API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

export async function getSmiles() {
    let userData = await getUserStocks();
    let userDataArray = userData.userDataArray;
    let currentPrice;
    let symbolsQueried = new Map(); // Every time a price is queried, it'll be added here along
    // with its price so that if there are symbols in non
    // sequential order, there won't be a need to re-query the
    // APIand the price will be sorted with the symbol
    let smiles = [];

    // Gets the current price for all of the symbols the user has
    for (let x = 0; x < userDataArray.length; x++) {
        let symbol = userDataArray[x][0].toString();
        let btPrice = userDataArray[x][1];

        if (symbolsQueried.has(symbol)) {
            // If the symbol has already been queried, then just get the price from
            // the array
            currentPrice = symbolsQueried.get(symbol);
        } else {
            // If the symbol has not been queried, then query the API and add it the
            // map
            currentPrice = await getCurrentPrice(symbol);
            symbolsQueried.set(symbol, currentPrice);
        }

        let smile;
        let deltaPrice = currentPrice - btPrice;
        for (let i = 0; i < (Math.abs(deltaPrice) / smileWorth); i++) {
          if (deltaPrice > 0) {
            if (smiles[smiles.length - 1] == "(") smiles.pop();
            else smiles.push(")");
        } else if (deltaPrice < 0)
            if (smiles[smiles.length - 1] == ")") smiles.pop();
            else smiles.push("(");
        }

    }

    return "Smiles: :" + smiles.join("");
}

export async function seeMySymbols() {
    let userData = await getUserStocks();
    let userDataArray = userData.userDataArray;
    let userSymbols = [];

    for (let i = 0; i < userDataArray.length; i++) {
        let symbolName = userDataArray[i][0];
        let price = userDataArray[i][1];
        userSymbols.push(symbolName + " BT: " + price);
    }
    return userSymbols;
}

async function getUserStocks() {
    let userStocksMap = new Map();

    const res = await axios.get("/api/dashboard/getstocks"); // Returns a JSON of all the
    // stuff in a users schema

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

    let userDataArray = Array.from([...userStocksMap.entries()]); // This way we can sort the symbols and the prices won't get messed up
    userDataArray.sort();

    return { userDataArray };
}
