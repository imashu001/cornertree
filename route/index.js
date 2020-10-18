const express = require("express");
const router = express.Router();
const homecontroller = require("../controller/homeController");
console.log("router loaded");
router.get("/", homecontroller.home);
router.use("/profile", homecontroller.postjob);
// router.get("/", function (req, res) {
//   res.sendFile(path.join__dirname, "/public/html/index.html");
// });
module.exports = router;
