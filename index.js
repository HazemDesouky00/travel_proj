const express =require('express');
const app=express();
const tripRouter=require('./routes/TripRouter.js');


app.use(express.json());
app.use('/trips',tripRouter);

app.use (tripRouter) 

module.exports=
{
    app,
};