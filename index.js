const router =  require('express').Router()

const hort = require('./hort')
const category = require('./category')

router.use('/hort', hort)
router.use('/category', category)

module.exports = router
