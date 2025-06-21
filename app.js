const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))         // you need this to make the css available to the browser
app.use(express.static('images'))         // you need this to make the images available to the browser

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const defaultRoute = require('./routes/default');
const adminRoute = require('./routes/admin');
app.use('/', defaultRoute);
app.use('/', adminRoute);                   // notice I used '/' here not '/admin' why?

app.listen(3000);