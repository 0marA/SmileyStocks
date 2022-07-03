const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

const getUsername = asyncHandler(async (req, res) => {
    const user = await User.find();
    res.json(user);
});

const addUsername = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Missing text");
    }

    const username = await User.create({ text: req.body.text });
    res.json({ username });
});

module.exports = {
    getUsername,
    addUsername,
};
