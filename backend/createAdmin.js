// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const dotenv = require("dotenv");
// const User = require("./models/user.model");

// dotenv.config();

// const createAdmin = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         const username = "adminuser";
//         const email = "adminuser@example.com";
//         const password = "password12345";
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const adminUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//             role: "admin"
//         });
//         adminUser.save();
//         console.log("Admin user created successfully");
//         mongoose.disconnect();
//     } catch (error) {
//         console.log(error);
//     }
// };

// createAdmin();


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('./models/user.model');

dotenv.config();

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const username = 'adminUser';
    const email = 'admin@example.com';
    const password = 'password123'; // Remplacez par un mot de passe sécurisé
    const hashedPassword = await bcrypt.hash(password, 10);
    const adminUser = new User({ username, email, password: hashedPassword, role: 'admin' });
    await adminUser.save();
    console.log('Admin user created successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

createAdminUser();
