const db = require('../app/models');

const proxy = async (req, res, next) => {
    const encoded = req.params.encoded;

    const dbQuery = await db.url_operation.findOne({
        where: {
            urlencoded: encoded
        }
    });

    req.dbQuery = dbQuery;
    next();
}

module.exports = proxy;