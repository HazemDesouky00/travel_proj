const express = require('express');
const { signUp, login } = require('../controllers/authController');
 
const authRouter = express.Router();
 
// POST /api/v1/auth/signup
authRouter.post('/signup', signUp);
 
// POST /api/v1/auth/login
authRouter.post('/login', login);
 

 
module.exports = authRouter;