// let greet = require('./greet.js');
// greet();

//en esta variable sus atributos van separados por comas , y un atributo tiene una funcion
// let person = {     
//     firstname: 'Christopher',
//     lastname: 'Velazquez',
//     greet: function(){
//         console.log('Holi,' + this.firstname + ' ' + this.lastname);
//     }
// };

// person.greet();

// console.log(person['firstname']);


function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.greet = function(){  //con el prototipo puedo agregar cosas al constructor sin afectarlo
    console.log('Hi, ' + this.firstname + ' ' + this.lastname );
};

let Christopher = new person('Christopher','Velazquez');
let Jane = new person('Jane','Doe');






