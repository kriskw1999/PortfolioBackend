const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req,res) => {
    res.send("hello worls");
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));