import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Cart = mongoose.model('Cart', {
    id: Number,
    name: String,
    item:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

module.exports = Cart;