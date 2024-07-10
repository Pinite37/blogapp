const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({
        message: message,
    });
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log("Connected to MongoDB");
    });
})
.catch(err => {
    console.log(err);
});