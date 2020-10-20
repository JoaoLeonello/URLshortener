const express = require('express');
const shortUrl = require('./controller/short-url');
const urlFinder = require('./controller/url-finder');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/short-url', shortUrl);
app.get('/:param', urlFinder);

app.listen(3000);