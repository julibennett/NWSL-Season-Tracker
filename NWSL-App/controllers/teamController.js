const Team = require('../models/Team.js')

// NEW
const newForm = (req, res) => {
    try{
        res.render('new.ejs', {tabTitle: 'New Team', currentUser: req.session.currentUser})
    } catch(err) {
        console.log(err)
    }
}

// CREATE
const create = async (req, res) => {
    try{
        const newTeam = await Team.create(req.body)
        console.log(newTeam)
        res.redirect('/teams')
    } catch(err) {
        console.log(err)
    }
}

// INDEX
const index = async(req, res) => {
    try{
        const teams = await Team.find()
        res.render('index.ejs', {
            teams,
            tabTitle: 'Home',
            currentUser: req.session.currentUser
        })
    } catch(err) {
        console.log(err)
    }
}

// SHOW


// SEED


// DELETE


// EDIT


// UPDATE

module.exports = {
    create,
    new: newForm,
}