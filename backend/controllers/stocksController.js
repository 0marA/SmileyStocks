const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

const getStocks = asyncHandler(async (req, res) => {
    const stocks = await User.find();
    res.json(stocks);
});

const addStock = asyncHandler(async (req, res) => {
    if (!req.body.symbol) {
        res.status(400);
        throw new Error("Missing a stock symbol");
    }

    const stock = await User.create({ text: req.body.symbol });
    res.json({ stock });
});

const updateStock = asyncHandler(async (req, res) => {
    const goal = await User.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const updatedGoal = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedGoal);
});

const deleteStock = asyncHandler(async (req, res) => {
    const goal = await User.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    const deletedGoal = await user.findByIdAndDelete(req.params.id, req.body);
    res.json(deletedGoal);
});

module.exports = {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
};
