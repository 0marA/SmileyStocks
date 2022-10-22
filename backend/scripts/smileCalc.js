let smileWorth = 1;
let currentPrice;

export async function getCurrentPrice(symb) {
    await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symb}&token=${process.env.API_KEY}`
    ).then((response) => (currentPrice = response.c));
    return currentPrice;
}

export async function getSmiles() {
    let userData = await getUserStocks();
    let userDataArray = userData.userDataArray;
    let currentPrice;
    let symbolsQueried = new Map(); // Every time a price is queried, it'll be added here along
    // with its price so that if there are symbols in non
    // sequential order, there won't be a need to re-query the
    // API and the price will be sorted with the symbol
    let smiles = [];

    // Gets the current price for all of the symbols the user has
    for (let x = 0; x < userDataArray.length; x++) {
        let symbol = userDataArray[x][0].toString();
        let btPrice = userDataArray[x][1];

        if (symbolsQueried.has(symbol)) {
            // If the symbol has already been queried, then just get the price from the array
            currentPrice = symbolsQueried.get(symbol);
        } else {
            // If the symbol has not been queried, then query the API and add it the map
            currentPrice = await getCurrentPrice(symbol);
            symbolsQueried.set(symbol, currentPrice);
        }

        let smile;
        let deltaPrice = currentPrice - btPrice;
        for (let i = 0; i < Math.abs(deltaPrice) / smileWorth; i++) {
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
    let uniqueSymbols = [];

    for (let i = 0; i < userDataArray.length; i++) {
        let symbolName = userDataArray[i][0];
        let price = userDataArray[i][1];
        userSymbols.push(symbolName + " BT @ $ " + price);
    }

    for (let i = 0; i < userSymbols.length; i++) {
        if (userSymbols[i] !== userSymbols[i + 1]) {
            uniqueSymbols.push(userSymbols[i]);
        }
    }

    for (let i = 0; i < uniqueSymbols.length; i++) {
        let numOfSymbs = 0;
        for (let j = 0; j < userSymbols.length; j++) {
            if (uniqueSymbols[i] === userSymbols[j]) {
                numOfSymbs++;
            }
        }
        uniqueSymbols[i] += " x " + numOfSymbs;
    }

    return uniqueSymbols;
}

async function getUserStocks() {
    let userStocksMap = new Map();

    // Returns a JSON of all the stuff in a users schema
    let resData;
    await fetch(
        "https://smileystocks.onrender.com/api/dashboard/getstocks"
    )
        .then((response) => response.json())
        .then((json) => resData = json.stocks);

    try {
        // If the user has no symbols then just return
        resData[1];
    } catch (err) {
        return;
    }

    for (let x = 0; x < resData.length; x++) {
        let stock = resData[x];
        userStocksMap.set(
            Object.keys(stock), // Object.keys(stock) returns the keys of the object
            Object.values(stock)
        );
    }

    let userDataArray = Array.from([...userStocksMap.entries()]); // This way we can sort the symbols and the prices won't get messed up
    userDataArray.sort();

    return { userDataArray };
}
