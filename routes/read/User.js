const { Router } = require("express");
const router = Router();
const User = require("../../models/user");

router.get("/users", (req, res) => {
  User.find({})
    .populate({ path: "bookings", select: ["name", "city"] })
    .exec((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.send(users);
      }
    });
});

router.get("/users/:slug", (req, res) => {
  User.findOne({ username: req.params.slug })
    .populate({ path: "bookings", select: ["name", "city"] })
    .exec((err, user) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(user);
      }
    });
});

module.exports = router;
