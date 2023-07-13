const bothController = require('../controllers/both.controller');

module.exports = app => {

app.get("/api/both", bothController.both)

}