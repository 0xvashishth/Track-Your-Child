const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stock = new Schema(
    {
        name: { type: String, required: true },
        ticker: { type: String, required: true },
    },
)

module.exports = mongoose.model('stock', Stock)