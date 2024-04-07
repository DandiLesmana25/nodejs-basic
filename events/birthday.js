// TODO 1
const { EventEmitter } = require('events');
// const { EvenEmitter } = require('events');
// const myEventEmitter = new EvenEmitter();

// const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2

// TODO 3

// TODO 4
myEventEmitter.on('ultah', birthdayEventListener);

myEventEmitter.emit('ultah', { name: 'ucup' });
