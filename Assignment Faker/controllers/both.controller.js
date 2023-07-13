const createBoth = require('../models/both.model');

module.exports = {

    both :  (req,res) => {
        const both = createBoth();
        res.json(both);
    },
}