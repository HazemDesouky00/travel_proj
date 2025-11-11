const express = require (express)
const { createUser } = require  ('../controllers/UserController.js');
const userRouter = express.Router();

userRouter
.route ('/')
.post (createUser);



module.exports= userRouter;