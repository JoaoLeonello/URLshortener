const db = require('../app/models');
const cryptoRandomString = require('crypto-random-string');
var moment = require('moment');

const shortUrl = (req, res) => {
    let {url} = req.body;
    let expiresIn = moment().add(1, 'day').format('YYYY-MM-DD');

    // gerar código da url
    let encode = cryptoRandomString({length: 6});

    // inserir no banco
    db.url_operation.create({
        urlencoded: encode,
        url: url,
        expiresIn: expiresIn,
    })

    // redirect/
    return res.json({
        shortUrl: 'localhost:3000/' + encode,
    })
}

module.exports = shortUrl