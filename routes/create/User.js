const { Router } = require("express");
const router = Router();
const User = require("../../models/user");

router.post("/users/create", (req, res) => {
  new User(req.body)
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

module.exports = router;
