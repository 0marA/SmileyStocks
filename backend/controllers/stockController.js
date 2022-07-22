const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");
//const { userID } = require("../controllers/userController.js");
let userID = "62daa8395f8fcd856adf634c";

const getStocks = asyncHandler(async (req, res) => {
    const stocks = await User.find();
    res.json(stocks);
});

const addStock = asyncHandler(async (req, res) => {
    const user = await User.findById(userID);
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }

    if (!req.body.symbols) {
        res.status(400);
        throw new Error("Missing a stock symbol");
    }

    const addedStock = User.findByIdAndUpdate(
        "62daa8395f8fcd856adf634c",
        { $push: { symbols: [req.body.symbols] } },
        {
            new: true,
        },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );

    //res.json(addedStock);
});

const updateStock = asyncHandler(async (req, res) => {
    const user = await User.findById(userID);
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }

    const updatedStock = await User.findByIdAndUpdate(userID, req.body.symbol, {
        new: true,
    });
    res.json(updatedStock);
});

const deleteStock = asyncHandler(async (req, res) => {
    if (!user) {
        res.status(400);
        throw new Error("User not found");
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
