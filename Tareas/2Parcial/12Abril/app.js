'use strict'

// se esta usando ES6 con clases, este tipo de escribir el codigo es mas familirizado con la programacion orientada a 
// objetos y sobre la codificacion funcional se medio esta perdiendo o esta quedando abstracta
// para usar este tipo de codificacion de ES6 es bueno saber ES5 lo de prototype, call entre otras consas que no 
// quedaban explicitas en ES5 
class Person {
    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Holi, ' + this.firstname + ' ' + this.lastname);
        }
}

var chris = new Person('Christo', 'Veláz');
chris.greet();








