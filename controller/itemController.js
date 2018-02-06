import Item from '../server/models/Item';

module.exports = {
    getAll: (req, res, next) => {
        Item.find({}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Item.findOne({_id: id}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    addItem: (req, res, next) => {
        const item = new Item(req.body);
        item.save((err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.sendStatus(201)
            }
        })
    },
    deleteItem: (req, res, next) => {
        const id = req.params.id;
        Item.findOneAndRemove({_id: id}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.sendStatus(204)
            }
        })
    },
    updateItem: (req, res, next) => {
        const id = req.params.id;
        Item.findOneAndUpdate({_id: id}, {
            name: req.body.name
        }, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.sendStatus(204)
            }
        })
    },


};