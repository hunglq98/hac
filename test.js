const express = require('express') 
const app = express(); 

app.listen(3000, () => {
    console.log('server running')
})

const mx = require('./index')

app.get('/search/:name', (req, res) => {
    const name = req.params.name; 
    mx.autocomplete(name, (lists) => {
        console.log(lists)
        res.end(lists)
    })
    // res.end()
    res.end()
})


app.get('/get/:id', (req, res) => {
    const id = req.params.id; 
    mx.get(id, (lists) => {
        console.log(lists)
    })
    res.end() 
})