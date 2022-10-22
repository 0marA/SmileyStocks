import fetch from "node-fetch";
import axios from "axios";
// const res = await fetch(
//     "https://smileystocks.onrender.com/api/dashboard/getstocks"
// )();

// console.log(res);


let resData;
await fetch(
    "https://smileystocks.onrender.com/api/dashboard/getstocks"
)
    .then((response) => response.json())
    .then((json) => resData = json.stocks);

console.log(resData);
