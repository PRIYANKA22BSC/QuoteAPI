//data pushed from local file to Database

require("dotenv").config();
const connectDB = require("./db/connect");
const Quote = require("./models/quotes");

const QuoteJson = require("./quote.json");

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Quote.deleteMany();
        await Quote.create(QuoteJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();