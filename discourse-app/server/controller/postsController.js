//const config = require("../config/dbconfig");
const db = require("../models");

module.exports = {
  getAllPosts: function (req, res) {
    db.Post.find()
      .sort({ timestamp: -1 })
      .then((dbModel) => {
        res.json({ posts: dbModel, isSuccess: true });
      })
      .catch((err) => res.status(422).json({ isSuccess: false, error: err }));
  },
};