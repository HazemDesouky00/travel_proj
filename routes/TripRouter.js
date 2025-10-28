const express=require ('express');
const{
    createTrip,
    retrieveAllTrips,
    // retrieveTripById,
    // updateTripById,
}=require ('../controllers/TripController');
const tripRouter=express.Router();

tripRouter
.route('/')
.get(retrieveAllTrips)
.post(createTrip);

// tripRouter.route('/:id') //api/v1/trips/:id
// .get(retrieveTripById)
// .put(updateTripById)
// .delete(deleteTripById);

module.exports=tripRouter;
