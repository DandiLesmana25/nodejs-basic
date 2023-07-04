const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi

const makeCoffe = ({ name }) =>  {
    console.log(`kopi ${name} telah dibuat !`);
};
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 


// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffe);
myEventEmitter.on('coffee-order', makeBill);
 
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', {name : 'Tubruk', price: 20000});