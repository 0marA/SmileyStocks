const express = require("express");
const router = express.Router();
const {
    addUsername,
    getUsername,
} = require("../controllers/userController.js");

const { handleLogin } = require("../scripts/handleLogin.js");

router.get("/", getUsername);
router.post("/login/validate", handleLogin);
router.post("/newaccount/adding", addUsername);

module.exports = router;
