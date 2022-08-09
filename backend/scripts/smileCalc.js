import { API_KEY } from "../../keys.js";
import axios from "axios";
import User from "../models/user.js";
//import userID from "../controllers/userController"
let userID = "62e6d96a51186be0ad2864f9";

let currentPrice;
let userStocks;

async function getCurrentPrice(symb) {
    await axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${symb}&token=${API_KEY}`)
        .then((response) => (currentPrice = response.data.c));
    return currentPrice;
}

async function getUserStocks(req, res) {
    // await User.findOne({ _id: userID }, (err, user) => {
    //     if (user != null || user != undefined) {
    //         userStocks = user.stocks;
    //         res.json({ key: "User found " + userID });
    //     } else console.log({ key: "user not found" });
    // }).clone();

    return await axios({
        method: "get",
        url: "http://localhost:4000/api/dashboard/getstocks",
    });


}

export async function getSmiles() {
    await getUserStocks();
    
}
