const express = require('express'); // here express returns a function
// and we store it in 'express' constant

// importing body-parser
const bodyParser = require('body-parser');  

const adminRoutes = require('./routes/admin');  // adminRoutes is also a valid middleware function
const shopRoutes = require('./routes/shop');    // shopRoutes is also a valid middleware function


const app = express();  // remember express is a function
// previous line initializes an object named app
// in app constant expressJS stores many logic


app.use(bodyParser.urlencoded({extended: false}));   // this line registers a middleware
// and calling next() so that the control can go to next middlewares
// most importantly it parses the request body

// constant app is also a valid request handler

// use() allows us to include new middleware functions
// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // this allows the request to continue to the next middleware in the line
// });

// app.use('/', (req, res, next) => {
//     console.log('This middleware always runs!');
//     next();
// })


app.use(adminRoutes);
app.use(shopRoutes);

// app.use('/add-product', (req, res, next) => {
//     // console.log('At add-product middleware!');
//     res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form></body></html>');
// });


// // app.use('/product', (req, res, next) => {
// //     console.log(req.body);  // by default req(request) does not parse the incoming request body
// //     res.redirect('/');
// // });


// app.post('/product', (req, res, next) => {
//     console.log(req.body);  // by default req(request) does not parse the incoming request body
//     res.redirect('/');
// });

// here single slash '/' means that every route starts with slash
// if we try to load google.com -> it implies domain-name/
// every domain name starts with slash, after that everything comes in
// app.use('/',(req, res, next) => {
//     console.clear();    // clearing the previous output
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express!');
//     // res.status(404).send('Sorry cant find that');
// });

// createServer() expects a request handler
// app is a valid request handler 
// so we passed app as an request handler

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);   // this line does the same thing as previous two lines