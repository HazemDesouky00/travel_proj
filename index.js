const express =require ('express');
const app=express ();
//const TripRouter=('./routes/TripRouter');

app.use (express.json());
//app.use('/api/v1/trips',TripRouter);

module.exports=
{
    app
};