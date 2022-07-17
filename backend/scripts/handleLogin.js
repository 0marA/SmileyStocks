const asyncHandler = require("express-async-handler");
const { validateUser } = require("../controllers/userController.js");

const handleLogin = asyncHandler(async (req, res) => {
    const validUser = validateUser(req, res);
    if (validUser == true) res.json({ key: "found" });
    else res.json({ key: "not found" });
});

module.exports = handleLogin;
