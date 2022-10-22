import asyncHandler from "express-async-handler";
import User from "../models/user.js";

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
        await User.create({ username: req.body.username });
        res.redirect("https://smileystocks.netlify.app/dashboard");
    } catch {
        res.redirect("https://smileystocks.netlify.app");
    }
});

export { getUsername, addUsername };
