// working with the Event module and EventEmitter class
// The Events Module and EvendEmitter Class
const EvendEmitter = require('events');
const eventEmitter = new EvendEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 3);

class Person extends EvendEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name', () => {
    console.log('my Name is ' + pedro.name);
});

pedro.emit('name');