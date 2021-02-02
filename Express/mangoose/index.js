// impoting modules
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

//url encoder for getting data from form
app.use(express.urlencoded());

// connecting to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anasdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectio error:'));
db.once('open', () => {
    console.log('database connected!');
})

//creaing database schema for form entries
const formSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String
});

//creating model(collection) from schema 
const FormEntry = mongoose.model('FormEntry', formSchema);


// setting view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// setting static files
app.set('/static', express.static('static'));

// creating end points
app.get('/', (req, res) => {
    res.render('index.pug');
})
app.get('/apicall', (req, res) => {
    FormEntry.find((err, entry) => {
        if (err) return handleError(err);
        res.json(entry);
    })
});
app.post('/', (req, res) => {
    // res.render('index.pug');
    console.log(req.body);
    //creating new document for all entries
    let newEntry = new FormEntry(req.body);

    //saving document into database
    newEntry.save().then(() => {
        res.render('status.pug', { "status": "Success", 'message': 'Your Entry has been saved' })
    }).catch(() => {
        res.render('status.pug', { "status": "Failed", 'message': 'Fail to' })
    })
});

//to delete an entry from form
FormEntry.deleteOne({name:''},(err,entry)=>{
    if (err) return handleError(err);
    console.log("Entry deleted");
});

//to find document(entry) in db
// FormEntry.find((err, entry)=>{
//     if (err) return handleError(err);
//     console.log(`All Entries in database 
//     ${entry}`);
// })

//creating server
app.listen(port, () => {
    console.log(`app is listening on http://127.0.0.1:${port}`);
})