import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import userRoutes from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import cors from "cors";

const port = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/", userRoutes);
app.use("/api/dashboard", stockRoutes);

app.use(express.static("../frontend/dist"));

app.listen(port, () => console.log(`Server started on ${port}!`));
