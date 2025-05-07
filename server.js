const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes");

//dotenv configure
dotenv.config();

//MongoDb Connection
connectDB();

//rest object
const app = express();

//Middleware
const corsOptions = {  // we have to add these option because we are using the frontend and backend differently
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/user", userRoute);

//PORT
const port = process.env.PORT || 8080;

//Listen Port
app.listen(port, () => {
  console.log(`Server Running in PORT: ${port}`);
});
