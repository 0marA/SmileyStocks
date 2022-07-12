const express = require("express");
const router = express.Router();
const {
    addUsername,
    getUsername,
    validateUser,
} = require("../controllers/userController.js");

router.get("/", getUsername);
router.get("/login/validate", validateUser);
router.post("/newaccount/adding", addUsername);

module.exports = router;
