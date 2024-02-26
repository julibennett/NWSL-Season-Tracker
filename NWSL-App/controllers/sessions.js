const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User.js')

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

router.post('/', async(req, res) => {
    try{
        const foundUser = await User.findOne({username: req.body.username})
        if(!foundUser) {
            res.send('<a href='/'> Sorry, that username could not be found! </a>')
        } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser
            console.log(req.session.currentUser)
            res.redirect('/')
        } else {
            res.send('<a href='/'> Username or Password is incorrect! </a>')
        }
    } catch(err) {
        console.log(err)
        res.send('The database encountered an issue with this request.')
    }
})

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = router