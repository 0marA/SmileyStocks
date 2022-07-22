const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

let userID;

const handleLogin = asyncHandler(async (req, res) => {
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

module.exports = {
    handleLogin,
    userID,
};
