const express = require('express');

const router = express.Router();    // returns a mini express app


router.get('/', (req, res, next) => {
    console.clear();    // clearing the previous output
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!');
    // res.status(404).send('Sorry cant find that');
})

module.exports = router;