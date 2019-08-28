const { Router } = require("express");
const router = Router();
const Property = require("../../models/property");

router.get("/properties", (req, res) => {
  Property.find({})
    .populate({ path: "bookings", select: "username" })
    .exec((err, properties) => {
      if (err) {
        console.log(err);
      } else {
        res.send(properties);
      }
    });
});

router.get("/properties/:slug", (req, res) => {
  Property.findOne({ id: req.params.slug })
    .populate({ path: "bookings", select: "username" })
    .exec((err, property) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(property);
      }
    });
});

module.exports = router;
