import mongoose from 'mongoose';
import config from 'config';
import rawData from './initData';
import Item from '../models/Item';
mongoose.Promise = require('bluebird');

const modelsMap = {
    Item
};

let docs = Object.keys(rawData);

console.log(docs);

mongoose.connect(config.get('mongodbUrl'));

// mongoose.connect('mongodb://127.0.0.1:27017/paper');

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
