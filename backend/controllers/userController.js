const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  res.send("Register User");
};

const loginUser = async (req, res) => {
  res.send("Login User");
};

module.exports = {
  registerUser,
  loginUser,
};