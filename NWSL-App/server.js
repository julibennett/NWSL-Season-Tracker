require('dotenv').config()
const express = require('express')
const app = express()
require('./config/database')
const methodOverride = require('method-override')
const session = require('express-session')

const teamRoutes = require('./routes/teams')
const userController = require('./controllers/userController')
const sessionsController = require('./controllers/sessions')

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended: true})) 
app.use(methodOverride('_method')) 
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.use('/teams', teamRoutes)
app.use('/users', userController)
app.use('/sessions', sessionsController)

app.listen(3000, () => {console.log('The server is tracking womens soccer on 3000 !!!')})