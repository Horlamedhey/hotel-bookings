const { Router } = require("express");
const router = Router();
const Property = require("../../models/property");

router.post("/properties/create", (req, res) => {
  new Property(req.body)
    .save()
    .then(property => {
      res.send(property);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

module.exports = router;
