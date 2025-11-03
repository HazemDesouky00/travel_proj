const { trips } = require('../models/Trip');
const { db } = require ('../db.js');

const createTrip = (req,res) =>{
  const {
    destinationName, location, continenet, language, description,
    flightCost = 0 , accomodationCost = 0 , mealCost = 0 , visaCost =0, transportationCost = 0, 
    currencyCode='N/A'
  }=req.body;

  /*if (!destinationName || !location || !continenet || !language || !description)
    {
    return res.status(400).json({
      message:
      'Missing required fields: destinationName, location, continent, language and description are mandatory.'
    });
  }*/

  const query = `
    INSERT INTO TRIP (
      DESTINATIONNAME, LOCATION, CONTINENT, LANGUAGE, DESCRIPTION,
      FLIGHTCOST, ACCOMODATIONCOST, MEALCOST, VISACOST, TRANSPORTATIONCOST, CURRENCYCODE
      )
      VALUES ('${destinationName}','${location}','${continenet}','${language}',
      '${description}','${flightCost}','${accomodationCost}','${mealCost}','${visaCost}',
      '${transportationCost}','${currencyCode}')`;
    
  db.run(query,(err) => {
      if (err) {
        console.log(err);
        return res.status(500).json ({
          message:'Database error',
          error:err.message
        });
      }
      return res.status (201).json({
        message: 'Trip created successfully'
      });
    });

};

const retrieveAllTrips = (req,res) => {
  const query = `SELECT * FROM TRIP`;
  db.all (query,(err,rows) => {
    if (err) {
      console.log (err);
      return res.status(500).json({
        message: 'Error retrieving trips'
      });
    }
      return res.status(200).json ({
        message: 'Trips retrieved successfully',
        data: rows 
      });
    
  }) 
};




/*const createTrip = (req, res) => {
  const {
    destinationName,
    location,
    continent,
    language,
    description,
    flightCost,
    accommodationCost,
    mealCost,
    visaCost,
    transportationCost,
    currencyCode,
  } = req.body;
 
  if (
    !destinationName ||
    !location ||
    !continent ||
    !language ||
    !description
  ) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide all required fields.',
    });
  }
 
  const newTrip = {
    id: trips.length + 1,
    destinationName,
    location,
    continent,
    language,
    description,
    flightCost: flightCost || 0,
    accommodationCost: accommodationCost || 0,
    mealCost: mealCost || 0,
    visaCost: visaCost || 0,
    transportationCost: transportationCost || 0,
    currencyCode: currencyCode || 'N/A',
    dailyCost:
      (flightCost || 0) +
      (accommodationCost || 0) +
      (mealCost || 0) +
      (visaCost || 0) +
      (transportationCost || 0),
  };
 
  trips.push(newTrip);
 
  res.status(201).json({
    status: 'success',
    message: 'Trip created successfully',
    data: newTrip,
  });
}
 
// Retrieve all trips
const retrieveAllTrips = (req, res) => {
  const allTrips = trips;
  res.status(200).json({
    status: 'success',
    message: 'Trips retrieved successfully',
    results: allTrips.length,
    data: allTrips,
  });
};*/

module.exports = {
    retrieveAllTrips,
    createTrip,
};