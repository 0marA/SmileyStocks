const express = require("express");
const router = express.Router();
const {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
} = require("../controllers/stockController.js");

router.get("/getStocks", getStocks);
router.post("/addStock", addStock);
router.put("/updateStock", updateStock);
router.delete("/deleteStock", deleteStock);

module.exports = router;
