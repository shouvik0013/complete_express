const path = require('path');
const express = require('express');

const router = express.Router();    // returns a mini express app


router.get('/', (req, res, next) => {
    console.clear();    // clearing the previous output
    // console.log('In another middleware!');
    // res.send('<h1>Hello from Express!');
    // res.status(404).send('Sorry cant find that');


    // __dirname holds the absolute path of the routes folder
    // means the absolute path of the file where it is used
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

});

module.exports = router;