const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const rootRouter = require('./src/routes/root')
const app = express()

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)
app.use(rootRouter)

app.listen(4000, () => console.log('servidor iniciado'))