const router = require('express').Router()
const teamCtrl = require('../controllers/teamController')
const isAuthenticated = require('../controllers/isAuthenticated')

router.use(isAuthenticated)

router.get('/', teamCtrl.index)
router.get('/new', teamCtrl.new)
router.post('/', teamCtrl.create)

router.get('/:id', teamCtrl.show)