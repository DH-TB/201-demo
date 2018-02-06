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
        Item.findOne({id: id}, (err, data) => {
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
                res.send(data)
            }
        })
    },
    deleteItem: (req, res, next) => {
        const id = req.params.id;
        Item.findOneAndRemove({id: id}, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },
    updateItem: (req, res, next) => {
        const id = req.params.id;
        Item.findOneAndUpdate({id: id}, {
            //要更新的内容
        }, (err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.send(data)
            }
        })
    },


};