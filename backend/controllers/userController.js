import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { getUserID } from "../scripts/handleLogin.js";

const getUsername = asyncHandler(async (req, res) => {
    const user = await User.findById(getUserID());
    res.json(user.username);
});

const addUsername = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400);
        throw new Error("Missing Username");
    }
    try {
        await User.create({ username: req.body.username });
    } catch {}
    res.redirect("https://smileystocks.netlify.app/login");
});

export { getUsername, addUsername };
