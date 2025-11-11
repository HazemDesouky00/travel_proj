const express =require('express');
const app=express();
const tripRouter=require('./routes/TripRouter.js');
const userRouter = require('./routes/userRouter.js')
const authrouter = require('./routes/authRouter.js');
const authRouter = require('./routes/authRouter.js');

const dotenv= require ('dotenv')

dotenv.config();

app.use(express.json());
app.use('/trips',tripRouter);
app.use('/users',userRouter);
app.use('/auth',authRouter);


module.exports=
{
    app,
};