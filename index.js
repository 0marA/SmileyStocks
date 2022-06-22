const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
