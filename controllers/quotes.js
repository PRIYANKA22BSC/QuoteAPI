const Quote = require("../models/quotes");

// get all Quotes request controllers
async function handleGetAllQuotes(req, res){
  try {
    const getAllQuotes = await Quote.find({}).sort({ QuoteId: 1 });
    res.status(201).send(getAllQuotes);
  } catch (error) {
    res.status(400).send(error);
  }
}


// find Quotes by id controllers
async function handleGetQuotesById(req, res){
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findById(_id);
    res.send(getQuote);
    // return res.json({ status: "Successfully get" });
  } catch (error) {
    res.status(400).send(error);
  }
}

// Quotes data Insertion controllers
async function handlePostAllQuotes(req, res){
  try {
    const body = req.body;
    if (
      !body ||
      !body.quoteTitle ||
      !body.author ||
      !body.category ||
      !body.quoteOrigin ||
      !body.tags
    ) {
      return res.status(400).json({ msg: "all fields are req..." }); //400 Bad Request
    }
    const count = await Quote.countDocuments({});
    const result = await Quote.create({
      QuoteId: count + 1,
      quoteTitle: body.quoteTitle,
      quoteTitleHindi: body.quoteTitleHindi,
      author: body.author,
      category: body.category,
      quoteOrigin: body.quoteOrigin,
      tags: body.tags,
      createdAt: body.createdAt,
    });

    console.log("result: ", result);

    return res.status(201).json({ msg: "success", QuoteId: result._QuoteId });
  } catch (error) {
    res.status(400).send(error);
  }
}

// Quotes Data updation controllers
async function handlePatchAllQuotes(req, res){
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findByIdAndUpdate(_id, req.body, {new: true});
    res.send(getQuote);
    // return res.json({ status: "Successfully updated" });
  } catch (error) {
    res.status(400).send(error);
  }
}

// Quotes Data deletion controllers
async function handleDeleteAllQuotes(req, res){
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findByIdAndDelete(_id);
    res.send(getQuote);
    // return res.json({ status: "Successfully deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
}


module.exports = {
  handleGetAllQuotes,
  handlePostAllQuotes,
  handlePatchAllQuotes,
  handleDeleteAllQuotes,
  handleGetQuotesById,
};
