const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/', homeRoutes)

app.get('/players', (req,res) =>{
    randomStart = Math.ceil(Math.random() * 2)
    if(randomStart === 1){
        res.send({ playerOne: 'X'})
    }else{res.send({playerOne: 'O'})}
})

app.listen(process.env.PORT, ()=>{
    console.log(`The server is now running! Betta Go Catch It!`)
})