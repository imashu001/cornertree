const express = require("express");
const app = express();
const port = 8000;
const expresslayouts = require("express-ejs-layouts");
// const db = require("./config/mongoose");

app.use(express.static("./assets"));
app.use(expresslayouts);

app.use("/", require("./route"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is running on port :", `${port}`);
});
