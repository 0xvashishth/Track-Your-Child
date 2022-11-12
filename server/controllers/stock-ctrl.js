const Stock = require('../models/stock-model')

createStock = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stock',
        })
    }

    const stock = new Stock(body)

    if (!stock) {
        return res.status(400).json({ success: false, error: err })
    }

    stock
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: stock._id,
                message: 'Stock created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Stock not created!',
            })
        })
}

deleteStock = async (req, res) => {
    await Stock.findOneAndDelete({ _id: req.params.id }, (err, stock) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stock) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }

        return res.status(200).json({ success: true, data: stock })
    }).catch(err => console.log(err))
}

getStocks = async (req, res) => {
    await Stock.find({}, (err, stocks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!stocks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }
        return res.status(200).json({ success: true, data: stocks })
    }).catch(err => console.log(err))
}

getStockByName = async (req, res) => {
    await Stock.findOne({ name: req.params.name }, (err, stock) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stock) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }
        return res.status(200).json({ success: true, data: stock })
    }).catch(err => console.log(err))
}

module.exports = {
    createStock,
    deleteStock,
    getStocks,
    getStockByName,
}