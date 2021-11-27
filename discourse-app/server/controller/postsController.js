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
  createPost: async function (req, res) {
    const { body } = req;
    try {
      const result = await db.Post.create(body);
      console.log('\n \n result inside create post controller ', result, '\n');
      res.json({ postData: result, isSuccess: true });
    } catch (err) {
      console.log('\n \n err inside create post controller ', err, '\n');
      res.status(422).json({ error: err, isSuccess: false });
    }
    
  }
};