const http = require('http');

const express = require('express'); // here express returns a function
// and we store it in 'express' constant

const app = express();  // remember express is a function
// previous line initializes an object named app
// in app constant expressJS stores many logic


// constant app is also a valid request handler

// createServer() expects a request handler
// app is a valid request handler 
// so we passed app as an request handler
const server = http.createServer(app);