
// setTimeout recibe un callback y una cantidad de tiempo y despues de esa cant de tiempo ejecuta el codigo del callbakc,
// como los callback no sabemos cuanto se van a tardar y por eso los callback son asincronos

console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second setTimeout');
    
}, 0);

console.log('Finishing up');




