const express = require("express");
const router = express.Router();
const {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
} = require("../controllers/stockController.js");

router.get("/dashboard/getStocks", getStocks);
router.put("/dashboard/addStock", addStock);
router.put("/dashboard/updateStock", updateStock);
router.delete("/dashboard/deleteStock", deleteStock);

module.exports = router;
