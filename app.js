// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const homepage = 'http://localhost:3000/'
const Url = require('./models/url')
const generateRandomCharacters = require('./models/shorten')
const copyToClipboard = require('./models/copy_to_clipboard')

// Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB3_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/result', (req,res) => {
  const origin = req.body.url
  Url.findOne({origin: origin})
  .then((result) => {
    // 如果來源網址已經存在在資料庫內，回傳該筆縮短結果
    if (result !== null) {
      const short = result.short
      return short
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
})

app.get('/:short', (req,res) => {
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

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})