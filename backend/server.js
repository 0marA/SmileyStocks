import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import router from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";

const port = 4000;
const app = express();

connectDB();

// Allows for parsing of json in terminal
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/", router);
app.use("/dashboard", stockRoutes);

app.listen(port, () => console.log(`Server started on ${port}!`));
