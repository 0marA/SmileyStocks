import asyncHandler from "express-async-handler";
import User from "../models/user.js";

let userID = "O";

const handleLogin = asyncHandler(async () => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }

    User.findOne({ username: req.body.username }, (err, user) => {
        if (user != null || user != undefined) {
            userID = user.id;
            res.json({ key: "User found " + userID });
        } else res.json({ key: "user not found" });
    }).clone();
});

export { handleLogin, userID };
