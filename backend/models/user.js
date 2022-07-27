import mongoose from "mongoose";

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

export default mongoose.model("user", user);
