const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockTransaction = new Schema(
    {
        child: { type: Schema.Types.ObjectId, required: true },
        stock: { type: String, required: true },
        price: { type: Number, required: true },
        shares: { type: Number, required: true },
        action: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('stock-transaction', StockTransaction)