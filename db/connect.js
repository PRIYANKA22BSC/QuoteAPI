const mongoose = require("mongoose");

const connectDB = (url) => {
    console.log("connected to mongoDB");
    return mongoose.connect(url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
};

module.exports = connectDB;