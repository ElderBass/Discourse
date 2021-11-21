// const express = require('express');
// const postsController = require('../controller/postsController');
// const app = express();

// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// app.post('/login', asyncHandler(async (req, res) => {
//     // log user in
// }));

// app.post('/api/create_account', asyncHandler(async (req, res) => {
//     // sign up new user
//     console.log('\n has this hit? \n');
// }));

// app.get('/api/posts/all', asyncHandler(async (req, res) => {
//     const result = await postsController.getAllPosts();

//     if (result.isSuccess) {
//         return res.json({ isSuccess: true, posts: result.payload });
//     } else {
//         res.status(400).json({ isSuccess: false, error: result.error });
//     }
// }));

// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;