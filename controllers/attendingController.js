const router = require('express').Router()

const Attendance = require('../models/Attending')

const myGames = async(req, res) => {
    try {
        const userId = req.session.currentUser
        const attendances = await Attendance.find({ userId: userId, attending: true })
            .populate({ path: 'teamId', populate: { path: 'upcomingGames' }})

            console.log(attendances)
        
        let attendingGames = []
        attendances.forEach(attendance => {
          
            if (attendance.teamId && attendance.teamId.upcomingGames) {
                const game = attendance.teamId.upcomingGames.find(game => game._id.equals(attendance.gameId));
                if (game) {
                    attendingGames.push({
                        ...game.toObject(),
                        teamName: attendance.teamId.name
                    });
                }
            }
        });
        
        console.log(attendingGames)

        res.render('myGames.ejs', {
            attendingGames: attendingGames,
            tabTitle: 'My Games',
            currentUser: req.session.currentUser 
        })
        
    } catch(err) {
        console.error(err)
    }
}


const submitAttendance = async (req, res) => {
    try {
        const { teamId, gameId, attending } = req.body;
        const userId = req.session.currentUser; // Make sure this is correctly fetching the user's ID

        if (!userId) {
            console.log('User ID is not available in the session.');
            // Optionally, redirect to login page or send an error message
            return res.redirect('/sessions/new');
        }

        await Attendance.findOneAndUpdate(
            { userId, gameId, teamId },
            { attending: attending === 'true' },
            { upsert: true, new: true }
        );

        res.redirect('/attendance/myGames');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error processing attendance submission.");
    }
};




module.exports = { 
    myGames,
    submitAttendance
} 
