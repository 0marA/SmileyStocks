import express, { json, urlencoded } from "express";
import connectDB from "./scripts/connection.js";
import userRoutes from "./routes/userRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import serveStatic from "serve-static";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 4000;

connectDB();np
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/", userRoutes);
app.use("/api/dashboard", stockRoutes);

//app.use(express.static("../frontend/dist"));
app.use(serveStatic(path.join(__dirname, "../frontend/dist")));

app.listen(port, () => console.log(`Server started on ${port}!`));
