const User = require("../models/user.model");

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}