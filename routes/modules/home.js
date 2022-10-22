const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:short', (req,res) => {
  const short = req.params.short
  Url.findOne({short: short})
  .then(result => {
    if (result !== null) {
      const origin = result.origin
      return origin
    }
  })
  .then(origin => res.redirect(origin))
})

module.exports = router
