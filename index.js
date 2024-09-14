const express = require("express");
const mongoose = require("mongoose");
const quotes_routes = require("./routes/quotes");
require("dotenv").config();
const app = express();
const router = require("./routes/quotes");
const connectDB = require("./db/connect");
// const Quote = require("./quote.json");


//middlewares
app.use(express.urlencoded({ extended: false }));
//middleware to set router
app.use("/api/quotes", quotes_routes);
app.use(router);

const port = process.env.port || 6600;


const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server started at port:${port}`);
    });
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};

start();
