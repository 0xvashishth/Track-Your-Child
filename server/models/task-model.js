const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        coins: { type: Number, required: true },
        status: { type: String, required: true },
        child: { type: Schema.Types.ObjectId, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('task', Task)