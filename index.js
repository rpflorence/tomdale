var fs = require('fs');
var tomdale = fs.readFileSync(__dirname+'/index.jpg');
module.exports = tomdale.toString('base64');

