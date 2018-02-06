import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import bodyParser from 'body-parser';
import route from './server/routers';

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.get('mongodbUrl'));

app.use(route);

app.listen(config.get('port'), ()=> {
    console.log('server started at http://localhost:' + config.get('port'));
});

module.exports = app;