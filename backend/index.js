const express = require('express');
var cors = require('cors')

const shortUrl = require('./controller/short-url');
const showUrl = require('./controller/show-url');
const proxy = require('./controller/proxy');
const redirect = require('./controller/redirect');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Content-Type: application/json');
    app.use(cors());
    next();
});

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/short-url', shortUrl);
app.get('/show-url', showUrl);
app.get('/:encoded', proxy, redirect);

app.listen(port, () => console.log('server started on port', port));