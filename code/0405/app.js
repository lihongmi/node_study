const events = require('events');


const myEmitter = new events();


myEmitter.on('fangxue', () => {
  console.log('吃饭去');
});

myEmitter.emit('fangxue');
myEmitter.emit('fangxue');