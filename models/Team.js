const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    name: { type: String, required: true }, 
    date: String, 
    location: String, 
    opponent: String, 
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

   