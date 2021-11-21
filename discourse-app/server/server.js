const express = require('express');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const postsController = require('./controller/postsController');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/discourse_app", {
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('\n error = ', err, '\n'));


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT} !`);
});

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.post('/login', asyncHandler(async (req, res) => {
  // log user in
}));

app.post('/api/create_account', asyncHandler(async (req, res) => {
  // sign up new user
  console.log('\n has this hit? \n');
}));

// app.get('/api/posts/all', (req, res) => {
//   const result = postsController.getAllPosts();
//   console.log(' \n \n we calling get all posts? ', result, '\n \n ');

//   if (result.isSuccess) {
//     return res.json({ isSuccess: true, posts: result.payload });
//   } else {
//     res.status(400).json({ isSuccess: false, error: result.error });
//   }
// });
