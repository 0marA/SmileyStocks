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
        const username = await User.create({ username: req.body.username });
        res.json({ username });
    } catch {
        throw new Error("Username already taken");
    }
});

function validateUser(req, res) {
    if (!req.body.username) {
        res.status(400);
        //throw new Error("Missing Username");
        throw new Error("Missing Username");
    }

    User.findOne({ username: req.body.username }, (err, user) => {
        if (user != null) return true;
        else return false;
    }).clone();
}

module.exports = {
    getUsername,
    addUsername,
    validateUser,
};
