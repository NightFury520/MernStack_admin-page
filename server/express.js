const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const compress = require('compression')
const path = require('path')
const mainRouter = require('./routes/mainRouter')


const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(compress())
app.use(cors())
app.use('/', mainRouter)
module.exports = app