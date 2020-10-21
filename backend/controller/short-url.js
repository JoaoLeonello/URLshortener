const db = require('../app/models');
const cryptoRandomString = require('crypto-random-string');

const shortUrl = (req, res) => {
    let url = req.body;
    let today = new Date();
    let expiresIn = today.setDate(today.getDate() + 1)

    console.log(url)
    if(url.length == 0) {
        console.log('aqui')
        return res.status(400).json({
            data: "As informações da requisição estão erradas...",
        });
    }

    let urlToString = toString(url);

    // gerar código da url
    let encode = cryptoRandomString({length: 10});

    // inserir no banco
    db.url_operation.create({
        urlencoded: encode,
        url: urlToString,
        expire: expiresIn,
    })

    return res.json({
        shortUrl: 'localhost:3000/' + encode,
    })
}

module.exports = shortUrl