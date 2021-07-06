const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();    // this line returns a mini-express app
// this mini express app is plugable means we can export it, use it anywhere

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // console.log('At add-product middleware!');
    // res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form></body></html>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


// app.use('/product', (req, res, next) => {
//     console.log(req.body);  // by default req(request) does not parse the incoming request body
//     res.redirect('/');
// });

// /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);  // by default req(request) does not parse the incoming request body
    res.redirect('/');
});

module.exports = router;    // router is also a valid middleware function