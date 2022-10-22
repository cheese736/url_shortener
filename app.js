// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const app = express()

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// 設定路由
app.use(routes)

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})