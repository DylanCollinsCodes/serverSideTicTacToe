const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', homeRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`The server is now running! Betta Go Catch It!`)
})