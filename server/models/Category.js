import mongoose from 'mongoose';

const Category = mongoose.model('Category', {
    id: Number,
    name: String,
});

module.exports = Category;