const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attendingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    gameId: { type: Schema.Types.ObjectId, required: true },
    teamId: { type: Schema.Types.ObjectId, required: true },
    attending: { type: Boolean, default: false },
    
}, { timestamps: true });

const Attending = mongoose.model('Attending', attendingSchema);

module.exports = Attending;
