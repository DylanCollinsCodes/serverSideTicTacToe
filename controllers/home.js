module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getPlayer: (req,res)=>{
        randomStart = Math.ceil(Math.random() * 2)
        if(randomStart === 1){
        res.send({ playerOne: 'X'})
        }else{res.send({playerOne: 'O'})}
    }
}