const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        console.log(req.session.currentUser)
        return next()
    } else {
        console.log(req.session.currentUser)
        res.redirect('/sessions/new')
    }
}

module.exports = isAuthenticated