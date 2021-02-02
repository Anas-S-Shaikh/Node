// importing modules
const http = require('http');
const express = require('express')
const fs = require('fs');
const path = require('path');
const { urlencoded } = require('body-parser');
const port = 4000;
const app = express();

//for serving static files 
app.use('/static', express.static('static'));

//for handling form data
app.use(urlencoded());

//setting view engine as pug
app.set('view engine', 'pug');

//setting view directory
app.set('views', path.join(__dirname, 'views'));

// without using pug
// app.get('/',(req,res)=>{
//     // const params = {'title':'this is pug', 'message':'Enter details to submit form!'};
//     res.sendFile(path.join(__dirname, './index.html'));
// });

// using pug
app.get('/', (req, res) => {
    const params = { 'title': 'this is pug', 'message': 'Enter details to submit form!' };
    res.render('index1.pug', params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    username = req.body.username;
    email = req.body.email;
    contact = req.body.contact;
    address = req.body.address;
    msg = req.body.msg;
    let outputToWrite = `username is ${username},
email is ${email},
contact number is ${contact},
address is ${address},
and message is : ${msg}`;
    fs.writeFileSync('output.txt',outputToWrite)
    const params = { 'title': 'this is pug', 'message': 'Your form has been submitted successfully!' };
    res.render('index1.pug', params);
});
app.listen(port, () => {
    console.log(`app is listening on http://127.0.0.1:${port}`);
})