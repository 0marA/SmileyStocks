import asyncHandler from "express-async-handler";
import User from "../models/user.js";

let userID = "";

const handleLogin = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }

    User.findOne({ username: req.body.username }, (err, user) => {
        if (user != null || user != undefined) {
            userID = user.id;
            res.redirect("http://localhost:3000/dashboard");
        } else {
            res.redirect("http://localhost:3000/");
        }
    }).clone();
});

export { handleLogin, userID };
