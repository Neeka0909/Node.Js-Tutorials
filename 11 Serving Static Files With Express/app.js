const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
//app.use is used to add middleware to the request processing pipeline
app.use('/public', express.static(path.join(__dirname, 'static')));  // This is the default path 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // database stuff here
    res.send("successfully posted data");
});

app.listen(3000, () => {
    console.log("Web Serer Started");
});