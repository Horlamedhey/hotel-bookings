const { Router } = require("express");
const router = Router();
const Hotel = require("../../models/hotel");

router.get("/hotels", (req, res) => {
  Hotel.find({}, (err, hotels) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(hotels);
    }
  });
});

router.get("/hotels/:slug", (req, res) => {
  Hotel.findOne({ propertyId: req.params.slug }, (err, hotel) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(hotel);
    }
  });
});

module.exports = router;
