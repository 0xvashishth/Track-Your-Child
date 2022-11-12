const Reward = require('../models/reward-model')

createReward = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a reward',
        })
    }

    const reward = new Reward(body)

    if (!reward) {
        return res.status(400).json({ success: false, error: err })
    }

    reward
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: reward._id,
                message: 'Reward created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Reward not created!',
            })
        })
}

deleteReward = async (req, res) => {
    await Reward.findOneAndDelete({ _id: req.params.id }, (err, reward) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!reward) {
            return res
                .status(404)
                .json({ success: false, error: `Reward not found` })
        }

        return res.status(200).json({ success: true, data: reward })
    }).catch(err => console.log(err))
}

getRewards = async (req, res) => {
    await Reward.find({}, (err, rewards) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!rewards.length) {
            return res
                .status(404)
                .json({ success: false, error: `Reward not found` })
        }
        return res.status(200).json({ success: true, data: rewards })
    }).clone().catch(err => console.log(err))
}

getRewardById = async (req, res) => {
    await Reward.findOne({ _id: req.params.id }, (err, reward) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!reward) {
            return res
                .status(404)
                .json({ success: false, error: `Reward not found` })
        }
        return res.status(200).json({ success: true, data: reward })
    }).catch(err => console.log(err))
}


updateReward = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Reward.findOne({ _id: req.params.id }, (err, reward) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Reward not found!',
            })
        }

        reward.name = body.name
        reward.coins = body.coins
        reward.category = body.category
        
        reward
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: reward._id,
                    message: 'Reward updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Reward not updated!',
                })
            })
    })
}


module.exports = {
    createReward,
    deleteReward,
    getRewards,
    getRewardById,
    updateReward
}