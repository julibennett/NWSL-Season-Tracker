const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: String, 
    roster: [String],
    upcomingGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    wins: Number,
    losses: Number,
    highestScorer: String,
}, {timestamps: true})

const Team = mongoose.model('Team', teamSchema)

const gameSchema = new Schema({
    name: String, 
    date: Date, 
    attendingUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
}, {timestamps: true});

const Game = mongoose.model('Game', gameSchema);

module.exports = Team, Game

   