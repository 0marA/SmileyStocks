import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import userRoutes from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";

const port = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(cors({}));

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/", userRoutes);
app.use("/api/dashboard", stockRoutes);

if (process.env.NODE_ENV === "production") {
    express.use(express.static(__dirname, +"/frontend/dist"));
}

app.listen(port, () => console.log(`Server started on ${port}!`));
