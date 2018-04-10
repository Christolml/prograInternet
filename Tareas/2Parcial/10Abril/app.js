
let obj = {
    name: 'Christo',
    greet: function() {
        console.log(`Holi ${this.name}`);
    }
}


obj.greet();
obj.greet.call({name: 'Dana'});
obj.greet.apply({name: 'Luis'});
// con call se pasan los parametros separados por coma 
// con apply es mandar un array  esta sobreescibiendo el name por medio del this de greet














