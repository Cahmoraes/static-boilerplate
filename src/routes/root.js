const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('pages/home/')
})

router.get('/contact', (req, res) => {
  res.render('pages/contact')
})

module.exports = router