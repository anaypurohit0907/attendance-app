
const express =require('express')
const path = require('path')
const app=express()

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }))


app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));

    console.log(req.params)
});



app.listen(5000,()=>{
    console.log('listening')
})