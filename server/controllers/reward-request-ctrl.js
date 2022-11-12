const RewardRequest = require('../models/reward-request-model')

createRewardRequest = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a rewardRequest',
        })
    }

    if (!("status" in body)) {
        body["status"] = "requested"
    }

    const rewardRequest = new RewardRequest(body)

    if (!rewardRequest) {
        return res.status(400).json({ success: false, error: err })
    }

    rewardRequest
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: rewardRequest._id,
                message: 'RewardRequest created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'RewardRequest not created!',
            })
        })
}

deleteRewardRequest = async (req, res) => {
    await RewardRequest.findOneAndDelete({ _id: req.params.id }, (err, rewardRequest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rewardRequest) {
            return res
                .status(404)
                .json({ success: false, error: `RewardRequest not found` })
        }

        return res.status(200).json({ success: true, data: rewardRequest })
    }).catch(err => console.log(err))
}

getRewardRequests = async (req, res) => {
    await RewardRequest.find({}, (err, rewardRequests) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!rewardRequests.length) {
            return res
                .status(404)
                .json({ success: false, error: `RewardRequest not found` })
        }
        return res.status(200).json({ success: true, data: rewardRequests })
    }).catch(err => console.log(err))
}

getRewardRequestById = async (req, res) => {
    await RewardRequest.findOne({ _id: req.params.id }, (err, rewardRequest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rewardRequest) {
            return res
                .status(404)
                .json({ success: false, error: `RewardRequest not found` })
        }
        return res.status(200).json({ success: true, data: rewardRequest })
    }).catch(err => console.log(err))
}

getRewardRequestsByStatus = async (req, res) => {
    await RewardRequest.find({ status: req.params.status }, (err, rewardRequest) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rewardRequest) {
            return res
                .status(404)
                .json({ success: false, error: `RewardRequest not found` })
        }
        return res.status(200).json({ success: true, data: rewardRequest })
    }).catch(err => console.log(err))
}


updateRewardRequestStatus = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    RewardRequest.findOne({ _id: req.params.id }, (err, rewardRequest) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'RewardRequest not found!',
            })
        }

        if (req.params.action == "request") {
            rewardRequest.status = "requested"
        }
        else if (req.params.action == "complete") {
            rewardRequest.status = "completed"
        }
        
        rewardRequest
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: rewardRequest._id,
                    message: 'RewardRequest status updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'RewardRequest status not updated!',
                })
            })
    })
}


module.exports = {
    createRewardRequest,
    deleteRewardRequest,
    getRewardRequests,
    getRewardRequestById,
    getRewardRequestsByStatus,
    updateRewardRequestStatus
}