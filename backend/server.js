import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import userRoutes from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import { getUserID } from "./scripts/handleLogin.js";
import cors from "cors";

const port = 4000;
const app = express();

connectDB();

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
// Allows for parsing of json in terminal
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/", userRoutes);
app.use("/api/dashboard", stockRoutes);

app.listen(port, () => console.log(`Server started on ${port}!`));
