const express = require('express');
var cors = require('cors')

const shortUrl = require('./controller/short-url');
const showUrl = require('./controller/show-url');

const app = express();

app.use(cors())

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/short-url', shortUrl);
app.get('/show-url', showUrl);

app.listen(3000);