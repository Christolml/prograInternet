
// para heredar de forma completa se debe heredar el superconstructor (para que inicializar las propiedades y funciones) de la clase y luego heredar con inherits

let util = require('util');

// Clase Person
function Person() {
    this.firstname = 'Christo';
    this.lastname = 'Veláz';
}

Person.prototype.greet = function() {
    console.log('Holi ' + this.firstname + ' ' + this.lastname);
}

// Clase Policeman, hereda de Person
function Policeman() {
    Person.call(this);    //este es parte del combo con inherits, con este se inicializa lo que tiene el constructor Person
    this.badgenumber = '1234';
}

// se estan conectando los prototypes de estos dos, y se puede decir que Policeman esta heredando de Person
// esta es  parte del combo
util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();








