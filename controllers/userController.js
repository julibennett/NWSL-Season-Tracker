const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.get('/new', (req, res) => {
    res.render('users/new.ejs', {currentUser: req.session.currentUser})
})

router.post('/', async(req, res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const newUser = await User.create(req.body)
        console.log(newUser, 'THIS IS A NEW USER')
        res.redirect('/')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router