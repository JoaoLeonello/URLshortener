const db = require('../app/models');

const showUrl = async (req, res) => {
    try {
        const result = await db.url_operation.findAll()

        console.log(result)
        return res.json({
            result
        });
    } catch (e) {
        console.log(e)
    }
    
}

module.exports = showUrl;