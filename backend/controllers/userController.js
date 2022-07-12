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

    const username = await User.create({ username: req.body.username });
    res.json({ username });
});

const validateUser = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }

    await User.findOne({ username: req.body.username }, (err, user) => {
        if (err) return handleError(err);
        else res.json({ user });
    });
});

module.exports = {
    getUsername,
    addUsername,
    validateUser,
};
