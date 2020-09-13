const args = process.argv.slice(2);
const content = `${args[0]}`;

// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('.npmrc', content, function (err) {
  if (err) throw err;
  console.log('.npmrc file is created successfully.');
}); 