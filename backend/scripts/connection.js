import mongoose from "mongoose";
import { MONGO_URI } from "../../keys.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;
