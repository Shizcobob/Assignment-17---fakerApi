const createCompany = require('../models/company.model');

module.exports = {

    newCompany :  (req,res) => {
        const company = createCompany();
        res.json(company);
    },
}