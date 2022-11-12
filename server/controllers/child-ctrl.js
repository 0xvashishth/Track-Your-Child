const Child = require('../models/child-model')

createChild = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a child',
        })
    }

    const child = new Child(body)

    if (!child) {
        return res.status(400).json({ success: false, error: err })
    }

    child
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: child._id,
                message: 'Child created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Child not created!',
            })
        })
}


updateChildCoins = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Child.findById(body["id"], (err, child) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Child not found!',
            })
        }

        child.coins += body["coins"]
        
        child
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    data: child,
                    message: 'Child updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Child not updated!',
                })
            })
    })
}

deleteChild = async (req, res) => {
    await Child.findOneAndDelete({ _id: req.params.id }, (err, child) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!child) {
            return res
                .status(404)
                .json({ success: false, error: `Child not found` })
        }

        return res.status(200).json({ success: true, data: child })
    }).catch(err => console.log(err))
}

getChildren = async (req, res) => {
    await Child.find({}, (err, children) => {
        console.log("jhgdhgf");
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!children.length) {
            return res
                .status(404)
                .json({ success: false, error: `Child not found` })
        }
        return res.status(200).json({ success: true, data: children })
    }).clone().catch(err => console.log(err))
}

getChildById = async (req, res) => {
    await Child.findOne({ _id: req.params.id }, (err, child) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!child) {
            return res
                .status(404)
                .json({ success: false, error: `Child not found` })
        }
        return res.status(200).json({ success: true, data: child })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createChild,
    updateChildCoins,
    deleteChild,
    getChildren,
    getChildById,
}