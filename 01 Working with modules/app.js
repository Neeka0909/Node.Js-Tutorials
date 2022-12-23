// Working with the Modules
// get sum function from the app02.js module
const tutorial = require('./app02');
console.log(tutorial);

console.log(tutorial.sum(1, 2));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());