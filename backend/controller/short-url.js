const db = require('../app/models');
const cryptoRandomString = require('crypto-random-string');
var moment = require('moment');

const shortUrl = (req, res) => {
    let {url} = req.body;
    let expiresIn = moment().add(1, 'days').format('YYYY-MM-DD');

    // gerar código da url
    let encode = cryptoRandomString({length: 6});

    console.log('url', url)
    console.log('encode', encode)
    console.log('expire', expiresIn)

    // inserir no banco
    db.url_operation.create({
        urlencoded: encode,
        url: url,
        expire: expiresIn,
    })

    return res.json({
        shortUrl: 'localhost:3000/' + encode,
    })
}

module.exports = shortUrl