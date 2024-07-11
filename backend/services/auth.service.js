const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateJWT");
const User = require("../models/user.model");

const createUser = async ({ username, email, password, role = 'user' }) => {
    const user = new User ({ username, email, password, role });
    await user.save();
    return user;
}

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPassWordValid = await bcrypt.compare(password, user.password);
    if (!isPassWordValid) {
        throw new Error("Invalid password");
    }
    const token = generateToken({ userId: user._id, role: user.role });
    return token;
};




module.exports = {
    createUser,
    loginUser
}