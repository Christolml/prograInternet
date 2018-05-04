
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req,res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});     //en text/html puede ir las demas opciones de content-type, text/plain por ejemplo
//     var html = fs.readFileSync(__dirname + '/index.html','utf8');   //de esta forma hay que hacerlo 
//     var message = 'Hello world';
//     html = html.replace('{Message}',message);   //me busca {Message} en el html y lo reemplaza por message, el {Message} viene siendo como un si fuera un string
//     res.end(html)
// }).listen(1337,'127.0.0.1');



// // con readFileSync se pone a leer todo el archivo y hace esperar a los usuarios
// // con streams hay stream de lectura y de escritura, se unen con pipe, el pipe conecta strings


