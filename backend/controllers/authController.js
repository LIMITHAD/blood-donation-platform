const User = require("../models/User");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, bloodGroup, city } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password, // (plain for now – hashing later)
      phone,
      bloodGroup,
      city
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { registerUser, loginUser };
