const express = require('express')

const TransactionCtrl = require('../controllers/transaction-ctrl')

const router = express.Router()

router.post('/transaction/:type/:id', TransactionCtrl.createTransaction)
router.delete('/transaction/:id', TransactionCtrl.deleteTransaction)
router.get('/transactions', TransactionCtrl.getTransactions)
router.get('/transactions/:child', TransactionCtrl.getTransactionsByChild)
router.get('/transaction/:id', TransactionCtrl.getTransactionById)

module.exports = router