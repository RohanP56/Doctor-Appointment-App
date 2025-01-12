const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//dotenv configure
dotenv.config();

//rest object
const app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
});

//PORT
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server Running in ${port}`);
});
