const express = require('express')

const RewardCtrl = require('../controllers/reward-ctrl')

const router = express.Router()

router.post('/reward', RewardCtrl.createReward)
router.delete('/reward/:id', RewardCtrl.deleteReward)
router.get('/rewards', RewardCtrl.getRewards)
router.get('/reward/:id', RewardCtrl.getRewardById)
router.put('/reward/:id', RewardCtrl.updateReward)

module.exports = router