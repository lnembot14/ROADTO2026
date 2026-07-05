const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    console.log("Hello")
    res.send("Goodbye")
})


app.listen(3000)
console.log("Hello")