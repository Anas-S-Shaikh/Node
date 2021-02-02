const express = require('express');
const path = require('path')
const fs = require('fs');

const app = express();
const port = 8000;
const hostname = '127.0.0.1'

const services = fs.readFileSync('./services.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/services',(req, res)=>{
    res.sendFile(path.join(__dirname, './services.html'));
});
app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, './about.html'));
});
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(__dirname, './contact.html'));
});
app.listen(port,hostname, ()=>{
    console.log(`app is runnig on on port http://${hostname}:${port}`);
});