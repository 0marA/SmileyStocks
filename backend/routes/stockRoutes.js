import express from "express";
const router = express.Router();
import {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
} from "../controllers/stockController.js";

router.get("/getStocks", getStocks);
router.post("/addStock", addStock);
router.put("/updateStock", updateStock);
router.delete("/deleteStock", deleteStock);

export default router;
