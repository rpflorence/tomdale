var fs = require('fs');
var tomdale = fs.readFileSync(__dirname+'/index.jpg');
// looks better as base64
module.exports = tomdale.toString('base64');

