const crypto = require("crypto");

const generateSecret = (length = 64) => {
    return crypto.randomBytes(length).toString("hex");
}

const secret = generateSecret();
console.log(`Your secret is: ${secret}`);