const localizeUserdata = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : {_id:null};
    console.log(res.locals);
    next();
}
module.exports = localizeUserdata;
