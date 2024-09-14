const express = require("express");
const router = express.Router();
const {
  handleGetAllQuotes,
  handlePostAllQuotes,
  handlePatchAllQuotes,
  handleDeleteAllQuotes,
  handleGetQuotesById,
} = require("../controllers/quotes");


//Handeling get all Quotes request
router.get("/", handleGetAllQuotes);

// find Quotes by id
router.get("/quotes/:id", handleGetQuotesById);

// Handling new Quotes data Insertion
router.post("/api/quotes", handlePostAllQuotes);

// Quotes Data updation
router.patch("/quotes/:id", handlePatchAllQuotes);

// Quotes Data Deletation
router.delete("/quotes/:id", handleDeleteAllQuotes);

module.exports = router;
