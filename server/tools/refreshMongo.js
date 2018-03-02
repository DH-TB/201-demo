import mongoose from 'mongoose';
import config from 'config';
import rawData from './initData';
import Item from '../models/Item';
import Category from '../models/Category';
import Cart from '../models/Cart';

mongoose.Promise = require('bluebird');

const modelsMap = {
    Item,
    Category,
    Cart
};

let docs = Object.keys(rawData);

console.log(docs);

mongoose.connect(config.get('mongodbUrl'));

Object.keys(rawData).forEach(v => {
    modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
            docs = docs.filter(doc => doc !== v);
            console.log(`The data of ${v} created`);
            if (docs.length === 0) {
                console.log(`All data refreshed`);
                process.exit(0);
            }
        });
    });
});
