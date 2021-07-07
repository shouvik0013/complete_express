const path = require('path');

// it returns the directory of the project folder where app.js is located
module.exports = path.dirname(require.main.filename);