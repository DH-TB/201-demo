import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Item = mongoose.model('Item', {
    _id:Number,
    name:String,
    unit:String,
    price:Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category' //这里要写你指向的数据库表名字
    }
});

module.exports = Item;