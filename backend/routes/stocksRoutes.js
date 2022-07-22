const express = require("express");
const router = express.Router();
const {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
} = require("../controllers/userController.js");

router.get("/dashboard/getStocks", getStocks);
router.post("/dashboard/addStock", addStock);
router.post("/dashboard/updateStock", updateStock);
router.post("/dashboard/deleteStock", deleteStock);

module.exports = router;
