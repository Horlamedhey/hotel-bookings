const { Router } = require("express");
const router = Router();
const Hotel = require("../../models/hotel");

router.get("/hotels", (req, res) => {
  Hotel.find({})
    .populate({ path: "bookings", select: "username" })
    .exec((err, hotels) => {
      if (err) {
        console.log(err);
      } else {
        res.send(hotels);
      }
    });
});

router.get("/hotels/:slug", (req, res) => {
  Hotel.findOne({ id: req.params.slug })
    .populate({ path: "bookings", select: "username" })
    .exec((err, hotel) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(hotel);
      }
    });
});

module.exports = router;
