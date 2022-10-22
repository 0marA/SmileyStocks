import asyncHandler from "express-async-handler";
import User from "../models/user.js";

let userID = "";
let username = "";
const handleLogin = asyncHandler(async (req, res) => {
    username = req.body.username;
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }

    User.findOne({ username: req.body.username }, (err, user) => {
        if (user != null || user != undefined) {
            userID = user.id;
            res.redirect("https://smileystocks.netlify.app/dashboard");
        } else {
            res.redirect("https://smileystocks.netlify.app/");
        }
    }).clone();
});

function getUserID() {
    return userID;
}

export { handleLogin, getUserID, getUsername };
