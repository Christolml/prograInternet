'use strict';

var EventEmitter = require('events');

// dentro del constructor con super se esta llamando el constructor de la clase que se heredo
module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hola mundo";
    }

    greet(data) {
        console.log(`${this.greeting}: ${data} `);
        this.emit('greet',data);
    }
}







