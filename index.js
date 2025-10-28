const express =require ('express');
const app=express ();
const tripRouter=('./routes/TripRouter');

app.use (express.json());
app.use('/trips',tripRouter);

module.exports=
{
    app
};