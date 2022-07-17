const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

const handleLogin = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }

    User.findOne({ username: req.body.username }, (err, user) => {
        if (user != null || user != undefined) res.json({ key: "User found" });
        else res.json({ key: "user not found" });
    }).clone();
});

module.exports = handleLogin;
