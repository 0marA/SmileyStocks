const finnhub = require('finnhub');
const { API_KEY } = require('./keys.js');
const { promisify } = require('util')

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY;
const finnhubClient = new finnhub.DefaultApi();

const sleep = promisify(setTimeout)

var x;

getOpen("TSLA");

logX();

function getOpen(symb) {
	finnhubClient.quote(symb, (error, data, response) => { x = data.o; });
}

function logX() {
	sleep(500).then(() => {
		console.log(x);
	  })
}
