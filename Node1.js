const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 5500;
let fileContent = fs.readFileSync('../Alarmapp/alarm.html',);
// console.log(fileContent);
//creating server
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'}); // sending info about file to browser
    res.end(fileContent); //what to send as a response
});
server.listen(port,hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}`);
});