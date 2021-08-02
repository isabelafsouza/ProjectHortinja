const router = require ('express').Router()
const {hort } = require('../controllers')

router.get('/', hort.list)
router.post('/', hort.create)
router.get('/:id', hort.show)
router.patch('/:id', hort.update)
router.delete('/:id', hort.destroy)

module.exports = router

