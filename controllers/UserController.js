const { db } = require ('../db.js')

const createUser = (req,res) =>{
    const {
         name,
         email, password,userRole
    }=req.body

    if (!name || !email || !password  || userRole )
    {
        return res.status(400).json({
            message:
            'Missing required fields, please make sure to add all necessary information.'
        })
    }

    const query = `
        INSERT INTO USER (
        NAME, EMAIL, PASSWORD, USERROLE
        )
        VALUES (?, ?, ?, ?)`;

    const params = [
         name, email , password,
        userRole
    ]
    db.run (query,(err) => {
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



module.exports ={
    createUser
}