const express = require('express');
const app = express();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.post('/login', asyncHandler(async (req, res) => {
    // log user in
}));

app.post('/api/create_account', asyncHandler(async (req, res) => {
    // sign up new user
    console.log('\n has this hit? \n');
}));