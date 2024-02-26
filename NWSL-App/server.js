require('dotenv').config()
const express = require('express')
const app = express()
require('./config/database')
const methodOverride = require('method-override')
const session = require('express-session')

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

app.listen(3000, () => {console.log('The server is tracking womens soccer on 3000 !!!')})