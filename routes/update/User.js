const { Router } = require("express");
const router = Router();
const User = require("../../models/user");
const Hotel = require("../../models/hotel");

router.put("/users/:slug/book", (req, res) => {
  Hotel.findOne({ id: req.body.hotelId }, (err, hotel) => {
    if (err) {
      console.log(err);
    } else {
      User.findOneAndUpdate(
        { username: req.params.slug },
        { $push: { bookings: hotel._id } },
        { new: true },
        (err, user) => {
          if (err) {
            res.sendStatus(500);
          } else {
            Hotel.findByIdAndUpdate(
              hotel._id,
              { $push: { bookings: user._id } },
              { new: true },
              (err, hotel) => {
                if (err) {
                  res.sendStatus(500);
                } else {
                  res.send(user);
                }
              }
            );
          }
        }
      );
    }
  });
});

module.exports = router;
