const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../controllers/userControllers");

//Router object

// All Routes


//Login || POST
router.post("/login", loginController);

//Register || POST
router.post("/register", registerController);


module.exports = router;
