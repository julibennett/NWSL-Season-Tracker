const {Game, Team} = require('../models/Team.js')


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
const myGames = async(req, res) => {
    try{
        const gameId = req.body.gameId
        const attending = req.body.attending

        const isAttending = req.body.attending ? true : false

        // Update the database here
        // This is a placeholder: the actual implementation depends on your database
        // For example, if using MongoDB with Mongoose, it might look something like this:
        await Game.findByIdAndUpdate(gameId, { $set: { attending: isAttending } });

        // Redirect to a confirmation page or back to the games list
        // This is just an example; you might want to redirect somewhere else
        res.redirect('/myGames'); // Adjust the redirect URL as needed
        
    }catch(err) {
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
                upcomingGames: [
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    }

                ],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            },
            {
                name: 'Portland Thorns',
                img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ca5e5c138504091.621ed850bf2ff.jpg',
                roster: ['Sophia Smith', 'Morgan Weaver', 'Kelli Hubly', 'Hina Sugita', 'Bella Bixby'],
                upcomingGames: [
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    }

                ],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            },
            {
                name: 'Portland Thorns',
                img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ca5e5c138504091.621ed850bf2ff.jpg',
                roster: ['Sophia Smith', 'Morgan Weaver', 'Kelli Hubly', 'Hina Sugita', 'Bella Bixby'],
                upcomingGames: [
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    },
                    {
                        name: 'Portland Thorns',
                        date: 'March 3rd, 2024',
                        location: 'Providence Park',
                        opponent: 'KC Current'
                    }

                ],
                wins: 5,
                losses: 1,
                highestScorer: 'Sophia Smith'
            },
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
    update,
    myGames
}