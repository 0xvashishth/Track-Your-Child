const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema(
    {
        child: { type: Schema.Types.ObjectId, required: true },
        type: { type: String, required: true },
        reward: { type: Schema.Types.ObjectId },
        task: { type: Schema.Types.ObjectId },
        override: { type: Schema.Types.ObjectId }
    },
    { timestamps: true },
)

module.exports = mongoose.model('transaction', Transaction)