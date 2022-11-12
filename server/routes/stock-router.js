const express = require('express')

const StockCtrl = require('../controllers/stock-ctrl')

const router = express.Router()

router.post('/stock', StockCtrl.createStock)            // create a stock
router.delete('/stock/:id', StockCtrl.deleteStock)      // delete a stock
router.get('/stock/:name', StockCtrl.getStockByName)        // get stock by id
router.get('/stocks', StockCtrl.getStocks)              // show all stocks

module.exports = router