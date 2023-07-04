const connect  = require('connect');
const static = require('serve-static');
const livereload = require('livereload');

const fullPath = __dirname + '/src'

connect()
  .use(static(fullPath))
  .listen(3000);

livereload.createServer().watch(fullPath);

console.log('http://127.0.0.1:3000/')