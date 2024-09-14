const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    QuoteId: {
        type: Number,
        required: true,
      },
      quoteTitle: {
        type: String,
        required: true,
      },
      quoteTitleHindi: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      quoteOrigin: {
        type: String,
        required: true,
      },
      tags: {
        type: String,
      },
      createdAt: {
        type: String,
        default: Date.now(),
      },
    }
);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
