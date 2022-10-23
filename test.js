import fetch from "node-fetch";
let currentPrice;
const FINNHB_TOKEN = "c7df8tiad3i911lpfov0";
async function getCurrentPrice(symb) {
    await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symb}&token=${FINNHB_TOKEN}`
    ).then((response) => (response = response.json())).then((json) => (currentPrice = json.c));

    return currentPrice;
   

    // console.log(
    //     await fetch(
    //         `https://finnhub.io/api/v1/quote?symbol=${symb}&token=${FINNHB_TOKEN}`
    //     )
    // );


    
}

console.log(await getCurrentPrice("TSLA"));
