const bcrypt = require ('bcryptjs') 
const { db } = require('../db.js');

const signUp = (req,res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.passsword 
    const role = 'user';

    if (!name || !email || !password){
        return res.status(400).send ('Please provide name, email and password.');
    }
    bcrypt.hash(password,10 , (err, hashedPassword) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error hashing Password.');
        }
        const query =`
        INSERT INTO USER (NAME, EMAIL, ROLE, PASSWORD)
        VALUES ('${name}', '${email}', '${role}', '${hashedPassword}')
        `;
        db.run (query, (err) => {
            if (err) {
                if (err.message.includes('UNIQUE constraint')) {
                    return res.status(400).send('Email already exists.');
                }
                console.error(err);
                return res.status(500).send('Database error.');
            }
            return res.status (200).send ('Registration successful');
        });

    });
    
};


//login function 
const login = (req,res) => {
    const {email,password} = req.body 

    if (!email || !password )
        return res.status(400).send ('Please provide both email and password.');

    const query = `SELECT * FROM USER WHERE =?`
    db.get (query, [email], (err,user) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Database error.');
        }

    if (!user) return res.status(404).send('User not found.');


    
    })

}