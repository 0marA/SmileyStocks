const mongoose = require("mongoose");

const user = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", user);
