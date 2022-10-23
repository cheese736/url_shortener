const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateRandomCharacters = require('../../models/shorten')
const homepage = 'http://localhost:3000/'

router.post('/', (req,res) => {
  const origin = req.body.url
  Url.findOne({origin: origin})
  .then((result) => {
    // 如果來源網址已經存在在資料庫內，回傳該筆縮短結果
    if (result !== null) {
      const short = result.short
      return short
    // 若無則新創一筆資料
    } else {
      const short = generateRandomCharacters(5)
      Url.create({
        origin,
        short
      })
      return short
    }
  })
  .then(short => res.render('result', {shortenedUrl: short, home: homepage}))
  .catch(error => console.log(error))
})

module.exports = router