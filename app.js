const http= require('http')
const express =require('express')

const app=express()

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: false }))






app.listen(5000,()=>{
    console.log('listening')
})