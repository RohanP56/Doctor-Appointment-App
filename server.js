const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");

//dotenv configure
dotenv.config();

//MongoDb Connection
connectDB();

//rest object
const app = express();

//Middleware
// CORS configuration - IMPORTANT: This must come before other middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies
  })
);

// Make sure CORS headers are set properly for preflight requests
app.options("*", cors());
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/user", userRoute);

//test-routes
// Test routes for debugging
app.get("/api/v1/user/test", (req, res) => {
  res.json({ message: "User route is working" });
});

app.post("/api/v1/user/test-post", (req, res) => {
  res.json({ message: "POST endpoint is working", body: req.body });
});

// Test the exact register route
app.post("/api/v1/user/register-test", (req, res) => {
  res.json({ message: "Register route hit directly", body: req.body });
});

//PORT
const port = process.env.PORT || 8080;

//Listen Port
app.listen(port, () => {
  console.log(`Server Running in PORT: ${port}`);
});
