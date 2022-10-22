import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import userRoutes from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/", userRoutes);
app.use("/api/dashboard", stockRoutes);

app.listen(port, () => console.log(`Server started on ${port}!`));
