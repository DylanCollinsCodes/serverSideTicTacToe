const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/players', (req,res) =>{
    randomStart = Math.ceil(Math.random() * 2)
    if(randomStart === 1){
        res.send({ playerOne: 'X', playerTwo: 'O'})
    }else{res.send({playerOne: 'O', playerTwo: 'X'})}
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})