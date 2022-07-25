const finnhub = require("finnhub");
const { API_KEY } = require(".././keys.js");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = API_KEY;
const finnhubClient = new finnhub.DefaultApi();

var openPrice;

const getOpen = (symb) => {
    finnhubClient.quote(symb, (error, data, response) => {
        openPrice = data.c;
    });
};

getOpen("TSLA");

setTimeout(() => {
    console.log(openPrice);
}, 500);

module.exports = { getOpen };
