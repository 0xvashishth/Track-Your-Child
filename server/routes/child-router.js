const express = require('express')

const ChildCtrl = require('../controllers/child-ctrl')

const router = express.Router()

router.post('/child', ChildCtrl.createChild) // provide "name", "coins"
router.put('/child', ChildCtrl.updateChildCoins) // provide "id", "coins"
router.delete('/child/:id', ChildCtrl.deleteChild)
router.get('/child/:id', ChildCtrl.getChildById)
router.get('/children', ChildCtrl.getChildren)

module.exports = router