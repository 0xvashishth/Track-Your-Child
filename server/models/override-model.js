const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Override = new Schema(
    {
        name: { type: String, required: true },
        coins: { type: Number, required: true },
        type: { type: String, required: true },
        child: { type: Schema.Types.ObjectId, required: true }
    }
)

module.exports = mongoose.model('override', Override)