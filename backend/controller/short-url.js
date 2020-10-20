const db = require('../app/models');
const cryptoRandomString = require('crypto-random-string');

const shortUrl = (req, res) => {
    let url = toString(req.body);
    let today = new Date();
    let expiresIn = today.setDate(today.getDate() + 1)
    
    // gerar código da url
    let encode = cryptoRandomString({length: 10});

    // inserir no banco
    db.url_operation.create({
        urlencoded: encode,
        url: url,
        expire: expiresIn,
    })

    return res.json({
        shortUrl: encoded,
    })
}

module.exports = shortUrl