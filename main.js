var Stocks = require('stocks.js');
var stocks = new Stocks('2M9IZUR12L6RNBO9');

symbols = ["'TSLA'", "'AAPL'", "'COST'"];

for (let i = 0; i < symbols.length; i++) {
	request(symbols[i]);
	console.log(symbols[i]);
}

async function request(input) {
	var result = await stocks.timeSeries({
		symbol: input,
		interval: '1min',
		amount: 1,
	});

	console.log(JSON.stringify(result));
}
