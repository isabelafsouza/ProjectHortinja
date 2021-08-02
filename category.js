const router = require('express').Router()
const { category } = require('../controllers')

router.get('/', category.list)
router.post('/', category.create)
router.get('/:id', category.show)
router.patch('/:id', category.update)
router.delete('/:id', category.destroy)

module.exports = router
