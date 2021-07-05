const express = require('express');

const router = express.Router();    // this line returns a mini-express app
// this mini express app is plugable means we can export it, use it anywhere

router.get('/add-product', (req, res, next) => {
    // console.log('At add-product middleware!');
    res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form></body></html>');
});


// app.use('/product', (req, res, next) => {
//     console.log(req.body);  // by default req(request) does not parse the incoming request body
//     res.redirect('/');
// });


router.post('/add-product', (req, res, next) => {
    console.log(req.body);  // by default req(request) does not parse the incoming request body
    res.redirect('/');
});

module.exports = router;    // router is also a valid middleware function