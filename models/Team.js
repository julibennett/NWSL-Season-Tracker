const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    name: { type: String, required: true }, // e.g., "March 3rd vs KC Current"
    date: String, // The date of the game
    location: String, // e.g., "Home" or specific stadium
    opponent: String, // e.g., "KC Current"
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: String, 
    roster: [String],
    upcomingGames: [gameSchema],
    wins: Number,
    losses: Number,
    highestScorer: String,
}, {timestamps: true})

const Team = mongoose.model('Team', teamSchema)



module.exports = {Game, Team}

   