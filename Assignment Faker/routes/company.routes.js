const companyController = require('../controllers/company.controllers');

module.exports = app => {

app.get("/api/company/new", companyController.newCompany)

}
