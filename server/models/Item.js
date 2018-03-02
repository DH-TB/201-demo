import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Item = mongoose.model('Item', {
    id:Number,
    name:String,
    unit:String,
    price:Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category' //这里要写你指向的数据库表名字
    },
    cart:{
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

module.exports = Item;