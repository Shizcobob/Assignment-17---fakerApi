const express = require('express')
const app = express()
const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const userRouteAttacher = require('./routes/user.routes')

userRouteAttacher(app)

const companyRouteAttacher = require('./routes/company.routes')

companyRouteAttacher(app)

const bothRouteAttacher = require('./routes/both.routes')

bothRouteAttacher(app)


app.listen( port, ()=> console.log("SERVER ONLINE"))