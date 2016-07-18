// May or maynot need this, still pondering...
// if (process.env.NODE_ENV !== 'production') {
//   require("babel-register");
// }
require('babel-polyfill');

require('./library.js');

var library = require('./library.js');

module.exports = library;
