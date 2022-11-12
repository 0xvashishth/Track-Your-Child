const express = require('express')

const StockTransactionCtrl = require('../controllers/stock-transaction-ctrl')

const router = express.Router()

router.post('/stock-transaction', StockTransactionCtrl.createStockTransaction)      // "child", "shares", "stock", "price", "action"
router.get('/stock-transactions', StockTransactionCtrl.getStockTransactions)    // get all stock transactions
router.get('/stock-transactions/:child', StockTransactionCtrl.getStockTransactionsByChild)     // view stock transactions for a child
router.get('/stock-transactions/:child/:stock', StockTransactionCtrl.getStockTransactionsByChildAndStock)     // view stock transactions for a child's specific stock
router.get('/shares/:child/:stock', StockTransactionCtrl.getSharesByStock)     // get a child's shares of a stock

module.exports = router