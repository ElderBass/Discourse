const router = require("express").Router();
const postRoutes = require('./post');

// Post routes
router.use("/posts", postRoutes);

module.exports = router;
