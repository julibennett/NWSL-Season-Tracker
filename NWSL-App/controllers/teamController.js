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
const show = async(req, res) => {
    try{
        console.log(req.params.id)
        const index = req.params.id
        const team = await Team.findById(index)
        console.log(team)
        res.render('show.ejs', {
            team,
            tabTitle: team.name,
            currentUser: req.session.currentUser
        })
    } catch(err) {
        console.log(err)
    }
}

// SEED
const seed = async(req, res) => {
    try{
        const teams = await Team.create([
            {
                name: 'Portland Thorns',
                img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ca5e5c138504091.621ed850bf2ff.jpg',
                roster: ['Sophia Smith', 'Morgan Weaver', 'Kelli Hubly', 'Hina Sugita', 'Bella Bixby'],
                upcomingGames: ['March 3rd vs KC Current @ Home', 'March 27th vs. Gotham FC @ Gotham', 'April 11th vs. San Diego Wave @ San Diego', 'April 20th vs. Angel City FC @ Home'],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            },
            {
                name: 'Portland Thorns',
                img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ca5e5c138504091.621ed850bf2ff.jpg',
                roster: ['Sophia Smith', 'Morgan Weaver', 'Kelli Hubly', 'Hina Sugita', 'Bella Bixby'],
                upcomingGames: ['March 3rd vs KC Current @ Home', 'March 27th vs. Gotham FC @ Gotham', 'April 11th vs. San Diego Wave @ San Diego', 'April 20th vs. Angel City FC @ Home'],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            },
            {
                name: 'Portland Thorns',
                img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ca5e5c138504091.621ed850bf2ff.jpg',
                roster: ['Sophia Smith', 'Morgan Weaver', 'Kelli Hubly', 'Hina Sugita', 'Bella Bixby'],
                upcomingGames: ['March 3rd vs KC Current @ Home', 'March 27th vs. Gotham FC @ Gotham', 'April 11th vs. San Diego Wave @ San Diego', 'April 20th vs. Angel City FC @ Home'],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            }
        ])
        res.redirect('/teams')
    } catch(err) {
        console.log(err)
    }
}

// DELETE
const destroy = async(req, res) => {
    try{
        await Team.findByIdAndDelete(req.params.id)
        res.redirect('/teams')
    } catch(err) {
        console.log(err)
    }
}

// EDIT
const editForm = async(req, res) => {
    try{
       const team = await Team.findById(req.params.id)
       res.render('edit.ejs', {
        team,
        tabTitle: 'Edit Team',
        currentUser: req.session.currentUser
       }) 
    } catch(err) {
        console.log(err)
    }
}

// UPDATE
const update = async(req, res) => {
    try{
        const index = req.params.id
        const team = await Team.findByIdAndUpdate(index, req.body, {new: true})
        res.redirect('/teams')
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    create,
    new: newForm,
    index,
    show,
    seed,
    destroy,
    edit: editForm,
    update
}