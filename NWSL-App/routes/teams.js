const router = require('express').Router()
const teamCtrl = require('../controllers/teamController')
const isAuthenticated = require('../controllers/isAuthenticated')

router.use(isAuthenticated)

router.get('/new', teamCtrl.new)
router.post('/', teamCtrl.create)