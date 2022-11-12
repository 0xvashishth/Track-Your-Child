const { ChildProcess } = require('child_process')
const Override = require('../models/override-model')
const Child = require('../models/child-model')


createOverride = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a override',
        })
    }

    Child.findOne({ _id: body["child"] }, (err, child) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!child) {
            return res
                .status(404)
                .json({ success: false, error: `Child not found` })
        }

        if(req.params.action == 'remove') {
            child.coins -= body['coins']
        }
        else if(req.params.action == 'add') {
            child.coins += body['coins']
        }
        child.save();

    }).clone().then(() => {
        body["type"] = req.params.action
        const override = new Override(body)

        if (!override) {
            return res.status(400).json({ success: false, error: err })
        }

        override
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: override._id,
                    message: 'Override created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Override not created!',
                })
            })
    })
}

module.exports = {
    createOverride
}