const createUser = require('../models/user.model');

module.exports = {

    hello : (req, res) => {
        // req is data from the client sent to the server, 
        // Res is the data sent back to the client from the server after
        res.json({message: "Home"});
        // This res above is the respoinse from the database to client
    },

    newUser :  (req,res) => {
        const user = createUser();
        res.json(user);
    },

    

}