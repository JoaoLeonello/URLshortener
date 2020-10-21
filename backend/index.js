const express = require('express');
var cors = require('cors')

const shortUrl = require('./controller/short-url');
const urlFinder = require('./controller/url-finder');

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.post('/short-url', shortUrl);
app.get('/:param', urlFinder);

app.listen(3000);