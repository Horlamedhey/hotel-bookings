const { Router } = require("express");
const router = Router();
const setAdmin = require("../../middlewares/setAdmin");
const Post = require("../../models/blog/post");


router.patch(
  "/removePost",
  (req, res, next) => {
    setAdmin(req, res, next);
  },
  (req, res) => {
    Post.updateOne(
      { $pull: { blog: { _id: req.body.id } } },
      (err, newPackage) => {
        if (err) {
          res.sendStatus(500);
        }
        res.sendStatus(200);
      }
    );
  }
);

module.exports = router;
  