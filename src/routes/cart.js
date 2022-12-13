const express = require('express');
const app = express.Router();

const { getCart, addItemToCart} = require('../controllers/index');

app.get('/', getCart);
app.post('/additem', addItemToCart);


module.exports =  { cart: app }