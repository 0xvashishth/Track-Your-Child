const express = require('express')

const RewardRequestCtrl = require('../controllers/reward-request-ctrl')

const router = express.Router()

router.post('/reward-request', RewardRequestCtrl.createRewardRequest)
router.delete('/reward-request/:id', RewardRequestCtrl.deleteRewardRequest)
router.get('/rewards-request', RewardRequestCtrl.getRewardRequests)
router.get('/reward-request/:id', RewardRequestCtrl.getRewardRequestById)
router.get('/reward-request/:id/:action', RewardRequestCtrl.getRewardRequestsByStatus)
router.put('/reward-request/:id/:action', RewardRequestCtrl.updateRewardRequestStatus)

module.exports = router