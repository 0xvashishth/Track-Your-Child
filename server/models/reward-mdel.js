const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reward = new Schema(
    {
        name: { type: String, required: true },
        coins: { type: Number, required: true },
        category: { type: String },
    }
)

module.exports = mongoose.model('reward', Reward)