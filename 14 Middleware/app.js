const express = require('express');
const bodyparser = require('body-parser');
const app = express();
// middleware
app.use(bodyparser.json());
app.use('/example', (req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana';
    next(); // next middleware 
});


app.get('/', (req, res) => {
    res.send('Middleware');
});

app.listen(3000);