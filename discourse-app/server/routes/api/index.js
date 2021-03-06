const router = require('express').Router();
const postRoutes = require('./post');
const userRoutes = require('./user');
// Post routes
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
