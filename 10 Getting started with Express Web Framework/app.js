const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/example', (req, res) => {
    res.send("Hitting example Route");
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params); // URL Parameters
    console.log(req.query); // Query String Parameters
    res.send('Name :' + req.params.name + ' Age : ' + req.params.age);

});
// query string parameters are used to pass data to the server in the form of key value pairs
// http://localhost:3000/example/John/25?sortby=name
// http://localhost:3000/example/John/25?sortby=name&sortby=age


app.listen(3000, () => {
    console.log("Web Serer Started");
});

