import asyncHandler from "express-async-handler";
import User from "../models/user.js";
//const { userID } = require("../controllers/userController.js");
let userID = "62f91988ff839f68f0aadb44";

const getStocks = asyncHandler(async (req, res) => {
    const stocks = await User.find();
    res.send(stocks);
});

const addStock = asyncHandler(async (req, res) => {
    const user = await User.findById(userID);

    if (!user) {
        res.status(400);
        throw new Error("No user");
    } else if (!req.body.symbols) {
        res.status(400);
        throw new Error("No symbol");
    } else if (!req.body.quantity) {
        res.status(400);
        throw new Error("No quantity");
    } else if (!req.body.btprice) {
        res.status(400);
        throw new Error("No btprice");
    }

    console.log("symbols: " + req.body.symbol);
    for (let i = 0; i < req.body.quantity; i++) {
        User.findByIdAndUpdate(
            userID,
            { $push: { stocks: { [req.body.symbols]: req.body.btprice } } },
            {
                new: true,
            },
            (err, result) => {
                if (err) {
                    res.json(err);
                }
                console.log(result);
            }
        );
    }
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
    const user = await User.findById(userID);
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }

    const deletedStock = await User.findByIdAndDelete(req.params.id, req.body);
    res.json(deletedStock);
});

export { getStocks, addStock, updateStock, deleteStock };
