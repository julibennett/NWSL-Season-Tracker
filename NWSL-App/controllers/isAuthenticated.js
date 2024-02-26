const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        console.log(req.session.currentUser)
    } else {
        console.log(req.session.currentUser)
        res.redirect('/sessions/new')
    }
}

module.exports = isAuthenticated