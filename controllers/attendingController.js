const router = require('express').Router();
const Attending = require('../models/Attending.js');

// Had ChatGPT help me a little with both my myGames and submitAttendance routes
const myGames = async (req, res) => {
    try {
        const userId = req.session.currentUser;
        if (!userId) {
            console.log('User ID is not available in the session.');
            return res.redirect('/sessions/new');
        }
        console.log(userId)
        const attendances = await Attending.find({ userId: userId, attending: true })
        // Billie and ChatGPT helped me with this function, most specifically the populate syntax
            .populate({ path: 'teamId', model: 'Team', populate: { path: 'upcomingGames', model: 'Attending' }});
        
        console.log(attendances, 'attendances');
        
        const attendingGames = [];
        for (const attendance of attendances) {
            if (attendance.teamId && attendance.teamId.upcomingGames) {
                const game = attendance.teamId.upcomingGames.find(game => game._id.equals(attendance.gameId));
                if (game) {
                    attendingGames.push({
                        ...game.toObject(),
                        teamName: attendance.teamId.name
                    });
                }
            }
        }
        
        console.log(attendingGames)

        res.render('myGames.ejs', {
            attendingGames: attendingGames,
            tabTitle: 'My Games',
            currentUser: req.session.currentUser 
        });
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
}

const submitAttendance = async (req, res) => {
    try {
        const { teamId, gameId, attending } = req.body
        const userId = req.session.currentUser

        if (!userId) {
            console.log('User ID is not available in the session.')
            return res.redirect('/sessions/new')
        }

        await Attending.findOneAndUpdate(
            { userId, gameId, teamId },
            { attending: attending === 'true' },
            { upsert: true, new: true }
        );

        res.redirect('/attendance/myGames')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
}


module.exports = { 
    myGames,
    submitAttendance,
}
