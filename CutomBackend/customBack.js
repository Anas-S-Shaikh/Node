const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;
const home = fs.readFileSync('./index.html');
const services = fs.readFileSync('./services.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(home);

    } else if(url == '/services.html'){
        res.end(services);
    } else if(url == '/about.html'){
        res.end(about);
    } else if(url == '/contact.html'){
        res.end(contact);
    } else{
        res.statusCode = 404;
        res.end(`<h1> 404 Not found </h1>`)
    }
});

server.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`);
})