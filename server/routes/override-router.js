const express = require('express')

const OverrideCtrl = require('../controllers/override-ctrl')

const router = express.Router()

router.post('/override/:action', OverrideCtrl.createOverride) // provide "name", "coins", "child"

module.exports = router