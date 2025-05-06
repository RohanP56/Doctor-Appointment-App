const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//Router object

// All Routes


//Login || POST
router.post("/login", loginController);

//Register || POST
router.post("/register", registerController);

// Add a test route
router.get("/route-test", (req, res) => {
  res.json({ message: "Router file is working correctly" });
});

module.exports = router;
