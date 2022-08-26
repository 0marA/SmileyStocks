import axios from 'axios';

import {API_KEY} from '../../keys.js';

let currentPrice;
let symbolsQueried =
    new Map();  // Every time a price is queried, it'll be added here along with
                // its price so that if there are
// symbols in non sequential order, there won't be a need to re-query the API
// and the price will be sorted with the symbol

export async function getCurrentPrice(symb) {
  // await axios
  //     .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
  //     .then((response) => (currentPrice = response.data.c));
  // return currentPrice;
  return 300;
}

export async function getSmiles() {
  let userData = await getUserStocks();
  let userDataArray = userData.userDataArray;
  let smiles = [];

  // Gets the current price for all of the symbols the user has
  for (let x = 0; x < userDataArray.length; x++) {
    if (x == userDataArray.length - 1)
      break;  // You're the last element so don't check the next one :)

    if (userDataArray[x][0][0] != userDataArray[x + 1][0][0]) {
      // No need to make multiple API calls if the next symbol is the same
      if (symbolsQueried.has(userDataArray[x][0][0])) {
        // If the symbol has already been queried, then just get the price from
        // the array
        console.log("Already queried" + x);
        currentPrice = symbolsQueried.get(userDataArray[x][1]);
      } else {
        // If the symbol has not been queried, then query the API and add it the map
        currentPrice = await getCurrentPrice(userDataArray[x][0]);
        symbolsQueried.set(userDataArray[x][0][0], currentPrice);
      }
    } else {
      console.log('Not Unique' + x);
    }

    console.log('BT Price: ' + userDataArray[x][1]);
    console.log('Current Price: ' + currentPrice);
    // //let smile = currentPrice - userDataArray[x][0][1];
    // // smiles.push(smile);
  }

  return 'Smiles: ' +
      ':)';
}

export async function seeMySymbols() {
  let userData = await getUserStocks();
  let userDataArray = userData.userDataArray;
  let userSymbols = [];

  for (let i = 0; i < userDataArray.length; i++)
    userSymbols.push(userDataArray[i][0][0]);
  return userSymbols;
}

async function getUserStocks() {
  let userStocksMap = new Map();

  const res =
      await axios.get('/api/dashboard/getstocks');  // Returns a JSON of all the
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
        Object.keys(
            stock),  // Object.keys(stock) returns the keys of the object
        Object.values(stock));
  }

  let userDataArray = Array.from([
    ...userStocksMap.entries()
  ]);  // This way we can peak at the next symbol in the array
  userDataArray.sort();

  return {userDataArray};
}
