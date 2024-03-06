const express = require('express')
const router = express.Router()
const attendingController = require('../controllers/attendingController')
const isAuthenticated = require('../controllers/isAuthenticated')

router.use(isAuthenticated)

router.get('/myGames', attendingController.myGames)

router.post('/submitAttendance', attendingController.submitAttendance)


module.exports = router
