const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Register Callback
const registerController = async (req, res) => {
  try {
    // check if existing user or not
    const existingUser = await userModel.findOne({ email: req.body.email });
    // if existing user redirect to login
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword; // replace given password with hashedPassword
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = async (req, res) => {};

module.exports = {
  loginController,
  registerController,
};
