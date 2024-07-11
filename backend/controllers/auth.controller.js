const bcrypt = require("bcrypt");
const authService = require("../services/auth.service");

const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await authService.createUser({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await authService.loginUser({ email, password });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        next(error);
    }
};

const registerAdmin = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await authService.createUser({ username, email, password: hashedPassword, role: "admin" });
        res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    registerUser,
    loginUser,
    registerAdmin
};