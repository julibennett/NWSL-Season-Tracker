const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    roster: [String],
    upcomingGames: [String],
    seasonStats: [String]
}, {timestamps: true})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team