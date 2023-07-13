console.log("task1");

const os = require('os');
const http = require('http');
const path = require('path');

http.createServer(function(request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Current user name: ' + os.username + '\n');
response,wrire("<br>");
response.write('OS Type: ' + os.type() + '\n');
response.wrire("<br>");
response.write('System work time: ' + os.uptime() + ' minutes' + '\n');
response,wrire("<br>");
response.write('Current work directory: ' + os.homedir() + '\n');
response.wrire("<br>");
response.end("Server file name: " +path.basename(__filename) + '\n');
 }).listen(5000)

console.log('Server is running at http://localhost:5000')
