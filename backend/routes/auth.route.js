const express = require("express");
const { registerUser, loginUser, registerAdmin } = require("../controllers/auth.controller");
const authenticateUser = require("../middlewares/auth.middleware");
const roleAuthorization = require("../middlewares/role.middleware");


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/registerAdmin", authenticateUser, roleAuthorization('admin'), registerAdmin);


module.exports = router;