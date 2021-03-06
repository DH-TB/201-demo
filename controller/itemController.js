import Item from '../server/models/Item';
import Category from '../server/models/Category';
import "../server/models/Category";
import * as result from './common';


module.exports = {
    getAll: (req, res, next) => {
        Item.find({}).populate('category').exec((err, data) => {
            if (err){
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Item.findOne({id: id}).populate('category').exec((err, data) => {
            if (err){
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },

    //TODo
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
        Item.findOneAndRemove({id: id}, (err, data) => {
            if (err){
                return next(err);
            }
            result.handleNotFoundAndNoContent(res, data)
        })
    },
    updateItem: (req, res, next) => {
        const id = req.params.id;
        Item.findOneAndUpdate({id: id}, {
            name: req.body.name
        }, (err, data) => {
            if (err){
                return next(err);
            }
            result.handleNotFoundAndNoContent(res, data)
        })
    },


};