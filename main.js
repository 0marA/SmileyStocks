const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = 'c7df8tiad3i911lpfov0';
const finnhubClient = new finnhub.DefaultApi();

// Price target
finnhubClient.priceTarget('AAPL', (error, data, response) => {
	console.log(data);
});

//Quote
finnhubClient.quote('AAPL', (error, data, response) => {
	console.log(data);
});

finnhubClient.stockTick(
	'AAPL',
	'2020-03-25',
	500,
	0,
	(error, data, response) => {
		console.log(data);
	}
);
