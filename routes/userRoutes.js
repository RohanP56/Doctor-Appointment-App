const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  authController
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

//Router object

// All Routes


//Login || POST
router.post("/login", loginController);

//Register || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);


module.exports = router;
