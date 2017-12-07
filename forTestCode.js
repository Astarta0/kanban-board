const EventEmitter = require('events');

class MyEmitter extends  EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('tap', () => {
    console.log('123');
});

myEmitter.on('click', function(a, b) {
    console.log(a, b, this);
});
myEmitter.emit('click', 'a', 'b');

////Asynchronous vs. Synchronous
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
myEmitter.emit('event', 'a', 'b');


//error
process.on('uncaughtException', (err) => {
    console.error('whoops! there was an error');
    console.error( err +'there was');
});

let flag = myEmitter.emit('click', 'a', 'b');
console.log('flag ' + flag);

console.log(myEmitter.eventNames());

