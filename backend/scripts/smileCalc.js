import { ApiClient, DefaultApi } from "finnhub";
import { API_KEY } from "../../keys.js";

const api_key = ApiClient.instance.authentications["api_key"];
api_key.apiKey = API_KEY;
const finnhubClient = new DefaultApi();

// setTimeout(() => {
//     getCurrentPrice("TSLA");
// }, 500);

// export async function getCurrentPrice(symb) {
//     // finnhubClient.quote(symb, (error, data, response) => {
//     //     let currentPrice = data.c;
//     //     console.log("Current price " + currentPrice);
//     //     return currentPrice;
//     // });
//     return "TSLA PRICE";
// }

// export let getCurrentPrice = async (data) => {
//     return "price";
// };

export function getCurrentPrice(symbol) {
    return "price";
}
