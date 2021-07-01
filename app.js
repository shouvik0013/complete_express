const express = require('express'); // here express returns a function
// and we store it in 'express' constant

const app = express();  // remember express is a function
// previous line initializes an object named app
// in app constant expressJS stores many logic


// constant app is also a valid request handler

// use() allows us to include new middleware functions
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // this allows the request to continue to the next middleware in the line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!');
    // res.status(404).send('Sorry cant find that');
});

// createServer() expects a request handler
// app is a valid request handler 
// so we passed app as an request handler

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);   // this line does the same thing as previous two lines