const { Router } = require("express");
const router = Router();
const User = require("../../models/user");
const Property = require("../../models/property");

router.put("/users/:slug/book", (req, res) => {
  Property.findOne({ id: req.body.propertyId }, (err, property) => {
    if (err) {
      console.log(err);
    } else {
      User.findOneAndUpdate(
        { username: req.params.slug },
        { $push: { bookings: property._id } },
        { new: true },
        (err, user) => {
          if (err) {
            res.sendStatus(500);
          } else {
            Property.findByIdAndUpdate(
              property._id,
              { $push: { bookings: user._id } },
              { new: true },
              (err, property) => {
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
