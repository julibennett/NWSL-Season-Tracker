const router = require('express').Router()
const teamCtrl = require('../controllers/teamController')
const isAuthenticated = require('../controllers/isAuthenticated')

router.use(isAuthenticated)

router.get('/', teamCtrl.index)
router.get('/new', teamCtrl.new)
router.post('/', teamCtrl.create)
router.get('/seed', teamCtrl.seed)
router.get('/:id', teamCtrl.show)
router.get('/myGames', teamCtrl.myGames)
router.delete('/:id', teamCtrl.destroy)
router.get('/:id/edit', teamCtrl.edit)
router.put('/:id', teamCtrl.update)

module.exports = router