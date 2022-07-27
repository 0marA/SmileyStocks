import express from "express";
import { addUsername, getUsername } from "../controllers/userController.js";
import { handleLogin } from "../scripts/handleLogin.js";

const router = express.Router();

router.get("/", getUsername);
router.post("/login/validate", handleLogin);
router.post("/newaccount/adding", addUsername);

export default router;
