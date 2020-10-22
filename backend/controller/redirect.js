const redirect = (req, res) => {
    const data = req.dbQuery;
    res.redirect(data.url);
}

module.exports = redirect;