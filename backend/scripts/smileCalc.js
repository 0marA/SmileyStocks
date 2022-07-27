import { ApiClient, DefaultApi } from "finnhub";
import { API_KEY } from "../../keys.js";

const api_key = ApiClient.instance.authentications["api_key"];
api_key.apiKey = API_KEY;
const finnhubClient = new DefaultApi();

let currentPrice;

export function getCurrentPrice(symb) {
    finnhubClient.quote(symb, (error, data, response) => {
        currentPrice = data.c;
        console.log("IN");
    });
    return currentPrice;
}
