const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const rootRouter = require('./src/routes/root')


const port = 3003
const link = `http://localhost:${port}`

const app = express()


app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(expressLayouts)
app.use(rootRouter)
app.use(require('easy-livereload')())

app.listen(port, () => console.log(`Aplicação iniciada em: ${link}: `))
