const checkSession = (req, res, next) => {
    console.log("Session = ");
    console.log( req.session.user)
    if (req.session.user) return next();
    res.redirect("/auth/sign-in");
}
module.exports = checkSession;
