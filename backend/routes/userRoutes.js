const express = require("express");
const router = express.Router();
const {
    addUsername,
    getUsername,
} = require("../controllers/userController.js");

router.get("/", getUsername);
router.post("/adding", addUsername);
// router.delete("/:id", deleteGoal);

module.exports = router;
