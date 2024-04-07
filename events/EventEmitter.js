const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event nyeduh-kopi terjadi
const seduhKopi = ({ name }) => {
    console.log(`Kopi ${name} telah diseduh`);
};

// mendaftarkan fungsi seduhKopi sebagai listener event nyeduh-kopi
myEventEmitter.on('nyeduh-kopi', seduhKopi)


// Memicu event 'nyeduh-kopi' terjadi.
myEventEmitter.emit('nyeduh-kopi', { name : 'hideung'});

