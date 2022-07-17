const express = require("express");
const router = express.Router();
const {
    addUsername,
    getUsername,
    validateUser,
} = require("../controllers/userController.js");

const handleLogin = require("../scripts/handleLogin.js");

router.get("/", getUsername);
router.get("/login/validate", handleLogin);
router.post("/newaccount/adding", addUsername);

module.exports = router;
