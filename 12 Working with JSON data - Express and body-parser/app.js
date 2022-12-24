const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

//app.use is used to add middleware to the request processing pipeline
app.use('/public', express.static(path.join(__dirname, 'static')));  // This is the default path 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {

    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    // database stuff here

    if (schema.validate(req.body).error) {
        res.send(schema.validate(req.body).error.details[0].message);
        console.log(schema.validate(req.body).error.details[0].message);
    } else {
        res.send("datapassed");
        console.log(schema.validate(req.body));
    }


});

app.listen(3000, () => {
    console.log("Web Serer Started");
});