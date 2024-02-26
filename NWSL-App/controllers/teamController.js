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


// SHOW


// SEED


// DELETE


// EDIT


// UPDATE

module.exports = {
    create,
    new: newForm,
}