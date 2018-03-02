import Category from '../server/models/Category';
import Item from '../server/models/Item';
import * as result from './common';

module.exports = {
    getAll: (req, res, next) => {
        Category.find({}, (err, data) => {
            if (err) {
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Category.findOne({id: id}, (err, data) => {
            if (err) {
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },

    //ToDo
    addCategory: (req, res, next) => {
        const category = new Category(req.body);
        category.save((err, data) => {
            if (err) {
                return next(err);
            }

            const item = new Item({
                id: 0,
                name: "雪啊啊",
                unit: "瓶",
                price: 3.00,
                category: category._id
            });
            item.save((err) => {
                if (err)
                    return next(err);
            });
            if (data) {
                res.sendStatus(201)
            }
        })
    },

    deleteCategory: (req, res, next) => {
        const id = req.params.id;
        Category.findOneAndRemove({id: id}, (err, data) => {
            if (err) {
                return next(err);
            }
            result.handleNotFoundAndNoContent(res, data)
        })
    },
    updateCategory: (req, res, next) => {
        const id = req.params.id;
        Category.findOneAndUpdate({id: id},
            {
                name: req.body.name
            },
            (err, data) => {
                if (err) {
                    return next(err);
                }
                result.handleNotFoundAndNoContent(res, data)
            })
    },


};