const { Router } = require("express");
const router = Router();
const Hotel = require("../../models/hotel");

router.post("/hotels/create", (req, res) => {
  new Hotel(req.body)
    .save()
    .then(hotel => {
      res.send(hotel);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

module.exports = router;
