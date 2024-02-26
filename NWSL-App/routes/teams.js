const router = require('express').Router()
const teamCtrl = require('../controllers/teamController')
const isAuthenticated = require('../controllers/isAuthenticated')

router.use(isAuthenticated)

router.post('/', teamCtrl.create)