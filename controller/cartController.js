import Cart from '../server/models/Cart';
import "../server/models/Category";
import * as result from './common';

module.exports = {
    getAll: (req, res, next) => {
        Cart.find({}).populate('category').exec((err, data) => {
            if (err){
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        Cart.findOne({id: id}).populate('category').exec((err, data) => {
            if (err){
                return next(err);
            }
            result.handleNoContentAndData(res, data)
        })
    },

    //TODO
    addCart: (req, res, next) => {
        const cart = new Cart(req.body);
        cart.save((err, data) => {
            if (err)
                return next(err);
            if (data) {
                res.sendStatus(201)
            }
        })
    },

    deleteCart: (req, res, next) => {
        const id = req.params.id;
        Cart.findOneAndRemove({id: id}, (err, data) => {
            if (err){
                return next(err);
            }
            result.handleNotFoundAndNoContent(res, data)
        })
    },
    updateCart: (req, res, next) => {
        const id = req.params.id;
        Cart.findOneAndUpdate({id: id}, {
            name: req.body.name
        }, (err, data) => {
            if (err){
                return next(err);
            }
            result.handleNotFoundAndNoContent(res, data)
        })
    },


};