
// let util = require('util');

// let name = 'Christopher';
// // con format me da la fecha y hora de la maquina
// let greeting = util.format('Hi, %s',name);
// util.log(greeting);

/*eventos y emisor d eeventos, de esto esta basadi en un servidor web con node.js, la emision de
eventos es la respuesta a un evento
system events esta mas relacionados  a las interrupciones, mas relacionadas al sistema
*/

let obj = {
    greet: 'Hi'
}

// tres maneras de imprimir lo que dije mi variable obj
console.log(obj.greet);
console.log(obj['greet']);
let prop = 'greet';
console.log(obj[prop]);

//functions and arrays
let arr = [];
arr.push(function() {
    console.log('Holi world 1');
});

arr.push(function(){
    console.log('Holi world 2');
});

arr.push(function(){
    console.log('Holi world 3');
});

// por cada que sea funcion mando a llamar a la funcion de ese item
arr.forEach(function(item) {
    item();
});






