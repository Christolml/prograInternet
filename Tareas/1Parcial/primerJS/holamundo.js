// var num1 = 1,
//     num2 =2 ,
//     resultado
// console.log(resultado = num1 + num2)


// suma(function(num1))

//el bueno
//  function suma(a,b){
//      return console.log(a+b);
//  }



// var x = function (a, b) {
//     return a + b;
// }
// console.log(x(10, 20));


function greet(){
    console.log(`hi`);
}
greet();

function logGreeting(fn){    //esta funcion recibe otra funcion y para invocar esa funcion esta abajo
    fn();
} 
logGreeting(greet);

let greetMe= function(){    //esta variable se comporta como funcion
    console.log(`Holi Chris`);
} 
greetMe();


logGreeting(greetMe);

logGreeting(()=>{
    console.log(`Que onda Chris`);

});




