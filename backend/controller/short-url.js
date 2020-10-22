const db = require('../app/models');
const cryptoRandomString = require('crypto-random-string');
var moment = require('moment');

const shortUrl = (req, res) => {
    let {url} = req.body;
    let expiresIn = toString(moment().add(1, 'days').format('YYYY-MM-DD'));

    // gerar código da url
    let encode = cryptoRandomString({length: 6});

    // inserir no banco
    db.url_operation.create({
        urlencoded: encode,
        url: url,
        expire: expiresIn,
    })

    return res.json({
        shortUrl: 'redirect/' + encode,
    })
}

module.exports = shortUrl