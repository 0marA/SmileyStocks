const mongoose = require("mongoose");

const user = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        symbols: {
            type: [String],
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", user);
