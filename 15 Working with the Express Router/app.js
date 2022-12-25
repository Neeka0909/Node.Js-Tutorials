const express = require('express');
const path = require('path');
const app = express();

//app.use is used to add middleware to the request processing pipeline
app.use('/public', express.static(path.join(__dirname, 'static')));  // This is the default path 
app.set('view engine', 'ejs');

const people = require('./routes/peoples');

app.use('/people', people);

app.get('/:userQuery/:queryData', (req, res) => {
    res.render('index', { data: { userQuery: req.params.userQuery, queryData: req.params.queryData, searhResults: ['book1', 'book2'] } });
});



app.listen(3000, () => {
    console.log("Web Serer Started");
});
