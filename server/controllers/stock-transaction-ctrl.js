const StockTransaction = require('../models/stock-transaction-model')

createStockTransaction = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stock',
        })
    }

    const stock = new StockTransaction(body)

    if (!stock) {
        return res.status(400).json({ success: false, error: err })
    }

    stock
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: stock._id,
                message: 'StockTransaction created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'StockTransaction not created!',
            })
        })
}

getStockTransactions = async (req, res) => {
    await StockTransaction.find({}, (err, stockTransactions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!stockTransactions.length) {
            return res
                .status(404)
                .json({ success: false, error: `StockTransaction not found` })
        }
        return res.status(200).json({ success: true, data: stockTransactions })
    }).catch(err => console.log(err))
}

getStockTransactionsByChild = async (req, res) => {
    await StockTransaction.find({ child: req.params.child }, (err, stockTransactions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stockTransactions) {
            return res
                .status(404)
                .json({ success: false, error: `StockTransaction not found` })
        }
        return res.status(200).json({ success: true, data: stockTransactions })
    }).catch(err => console.log(err))
}

getStockTransactionsByChildAndStock = async (req, res) => {
    await StockTransaction.find({ child: req.params.child, stock: req.params.stock }, (err, stockTransactions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stockTransactions) {
            return res
                .status(404)
                .json({ success: false, error: `StockTransaction not found` })
        }
        return res.status(200).json({ success: true, data: stockTransactions })
    }).catch(err => console.log(err))
}

getSharesByStock = async (req, res) => {
    await StockTransaction.find({ child: req.params.child, stock: req.params.stock }, (err, stockTransactions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stockTransactions) {
            return res
                .status(200)
                .json({ success: true, data: {shares: 0} })
        }
        let total = 0
        stockTransactions.forEach((stock) => {
            if (stock.action == "bought") {
                total += stock.shares
            } else if (stock.action == "sold") {
                total -= stock.shares
            }
        })
        share = {shares: total}         // if this doesn't work jsonify it?????
        return res.status(200).json({ success: true, data: share })
    }).catch(err => console.log(err))
}

module.exports = {
    createStockTransaction,
    getStockTransactions,
    getStockTransactionsByChild,
    getStockTransactionsByChildAndStock,
    getSharesByStock,
}