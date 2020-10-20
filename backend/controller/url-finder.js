const db = require('../app/models');

const urlFinder = (req, res) => {
    let param = req.params;

    // realizando a busca pelo link
    const result = db.url_operation.findOne({
        where: {
            urlencoded: param
        }
    });

    // redirecionando
    res.redirect(result.url);
}

module.exports = urlFinder;