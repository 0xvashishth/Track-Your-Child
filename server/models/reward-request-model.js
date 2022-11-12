const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RewardRequest = new Schema(
    {
        reward: { type: Schema.Types.ObjectId, required: true },
        child: { type: Schema.Types.ObjectId, required: true },
        status: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('reward-request', RewardRequest)