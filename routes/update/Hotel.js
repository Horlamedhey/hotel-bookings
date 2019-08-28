const { Router } = require("express");
const router = Router();
const Hotel = require("../../models/hotel");

router.put("/hotels/:slug/book", (req, res) => {
  Hotel.findOneAndUpdate(
    { propertyId: req.params.slug },
    { $push: { bookings: { name: req.body.name, phone: req.body.phone } } },
    { new: true },
    (err, hotel) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(hotel);
      }
    }
  );
});

module.exports = router;
