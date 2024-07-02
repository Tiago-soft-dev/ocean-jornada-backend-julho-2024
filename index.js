const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('helo word')
})

app.listen(3000)