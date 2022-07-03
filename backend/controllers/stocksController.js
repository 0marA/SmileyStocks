const asyncHandler = require("express-async-handler");
const user = require("../models/user.js");

const getUserData = asyncHandler(async (req, res) => {
    const goals = await user.find();
    res.json(goals);
});

const addStock = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Missing text");
    }

    const stock = await user.create({ text: req.body.text });
    res.json({ stock });
});

const updateStock = asyncHandler(async (req, res) => {
    const goal = await user.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const updatedGoal = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedGoal);
});

const deleteStock = asyncHandler(async (req, res) => {
    const goal = await user.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const deletedGoal = await user.findByIdAndDelete(req.params.id, req.body);
    res.json(deletedGoal);
});

module.exports = {
    getUserData,
    addStock,
    updateStock,
    deleteStock,
};
