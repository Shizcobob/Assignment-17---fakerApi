const userController = require('../controllers/user.controller');

module.exports = app => {

app.get("/", userController.hello);

app.get("/api/users/new", userController.newUser)

}

