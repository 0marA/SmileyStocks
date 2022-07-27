const express = require("express");
const connectDB = require("./scripts/connection.js");
const port = 4000;
const app = express();

connectDB();

// Allows for parsing of json in terminal
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/userRoutes.js"));
app.use("/dashboard", require("./routes/stockRoutes.js"));

app.listen(port, () => console.log(`Server started on ${port}!`));
