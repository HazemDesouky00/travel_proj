const bcrypt = require ('bcryptjs') 
const { db } = require('../db.js');

const signUp = (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.passsword 
    const role = 'user';

    if (!name || !email || !password){
        return res.status(400).send ('Please provide name, email and password.');
    };

    const query =`
    `
}