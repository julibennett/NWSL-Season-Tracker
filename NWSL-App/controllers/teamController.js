const Team = require('../models/Team.js')

// NEW


// CREATE
const create = async (req, res) => {
    try{
        res.render('new.ejs', {tabTitle: 'New Team', currentUser: req.session.currentUser})
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
}