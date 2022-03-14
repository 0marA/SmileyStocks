const finnhub = require('finnhub');
const { API_KEY } = require('./keys.js')

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY;
const finnhubClient = new finnhub.DefaultApi();


//Quote
finnhubClient.quote('AAPL', 
function c(data){
	console.log(data)
	
}
);


