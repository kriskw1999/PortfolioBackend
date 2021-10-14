const express = require("express");
const app = express();

const PORT = 8080;

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || PORT, 
	() => console.log("Server is running..."));
