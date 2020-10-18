const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/CornerTree");

const db = mongoose.connection;
db.on("error", console.log.error.bind(console, "Error connecting to db"));

db.once("open", function () {
  console.log("COnnected to mongodb");
});

module.exports = db;
