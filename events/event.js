const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// console.log(myEventEmitter);
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`kofi ${name} Telah dibuat!`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffe-order', makeCoffee);

myEventEmitter.emit('coffe-order', { name: 'HIdeuing' });
