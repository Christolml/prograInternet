
// nodejs es SINCRONO por natural, pero tiene algo dentro que tambien lo hace 
// un CALLBACK es una funcion que se le pasa otra funcion y despues en un tiempo determinado sera llamado
// el codigo principal no puede acabar de ejecutarse si es que su callback aun no acaba
// System events -> libuv
// Custom events -> event emmiter



// manejo asincrono entrada salida, libuv le pedi algo al sistema operativo (ejemp abrir un archivo)
// ese evento se guarda en Queue que son los eventos ya terinados, el event loop le avisa a node de que 
// un evento ya termino y que ocupe lo que regreso el evento

// Event driven non-blocking i/o in v8 js 

// Streams and Buffer, 
// Buffer, a tempory holding spot for data being 
// moved from one place to  another
// Stream, a sequence of data made available over time 
// la velocidad entre el buffer y el proceso es muy rapido 

/**Explicacion sencilla de un callback */
// function greet(callback) {
//     console.log('Hello');
//     callback();
// }

// greet(function() {
//     console.log('The callback was invvoked');
// });


function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Christopher'
    };
    callback(data);
}

greet(function(data) {
    console.log('The callback was invvoked');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked');
    console.log(data.name);
});















