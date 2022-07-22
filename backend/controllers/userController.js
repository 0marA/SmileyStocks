const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

const getUsername = asyncHandler(async (req, res) => {
    const user = await User.find();
    res.json(user);
});

const addUsername = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }
    try {
        const username = await User.create({
            username: req.body.username,
            symbols: ["APPL", "AMZN"],
        });
        res.json({ username });
    } catch {
        throw new Error("Username already taken");
    }
});

module.exports = {
    getUsername,
    addUsername,
};
