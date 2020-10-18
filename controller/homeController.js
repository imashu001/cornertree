module.exports.home = function (req, res) {
  return res.render("home", {
    title: "home",
  });
};
module.exports.postjob = function (req, res) {
  res.render("userprofile", {
    title: "Post A Job",
  });
};
