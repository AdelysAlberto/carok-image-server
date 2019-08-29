const express = require('express');
const path = require('path');
const morgan = require('morgan');
const port =9012;
const app = express();

const pathUploadSliders=path.resolve(__dirname +'/public/' + '/sliders');
const pathUploadCars=path.resolve(__dirname +'/public/' + '/cars');
const patAuctions=path.resolve(__dirname +'/public/' + '/auctions');

app.use(morgan('dev'));
app.use('/assets', express.static(pathUploadSliders));
app.use('/cars', express.static(pathUploadCars));
app.use('/auctions', express.static(patAuctions));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`Port  ${port}`);
});
