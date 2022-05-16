const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/',(req,res)=> {
    res.send('Api is running')
})

app.get('/api/products',(req,res)=> {
    res.json(products)
})

app.get('/api/products/:id', (req,res) =>{
    console.log(req.params.id)
    const product = products.find((product)=> product._id === req.params.id)
    console.log(product)
    res.json(product)
} )
app.listen(5000, console.log('Server running on port 5000'))