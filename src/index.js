const express = require('express')

const bodyParser = require('body-parser')

const db = require('./config/database.config')

const mainRoutes = require('./routers')

const app = express()

db()

app.use(express.json({ extented: false }))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use('', mainRoutes)

const PORT = 5000

app.listen(PORT, ()=>{
    console.log('Kimepop')
})