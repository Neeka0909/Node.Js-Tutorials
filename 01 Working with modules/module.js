// Working with the Modules

// Module is a file that contains code that can be imported into another file
// Module is a reusable block of code that can be exported from one program and imported for use in another program
// Module file
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
    constructor() {
        console.log('object created');
    }
}
/*
module.exports.sum = sum; // Exporting the sum function out of the module
module.exports.PI = PI; // Exporting the PI constant out of the module
module.exports.SomeMathObject = SomeMathObject; // Exporting the SomeMathObject class out of the module
*/
//Same as above commented code block
module.exports = { sum: sum, PI: PI, SomeMathObject: SomeMathObject };