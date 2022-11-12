const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Child = new Schema(
    {
        name: { type: String, required: true },
        coins: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('child', Child)