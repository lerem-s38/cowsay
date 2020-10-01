const information = require('./information.js');

var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `Hello I'm ${information.name} from ${information.campus}`,
    e: 'oO',
    T: 'U ',
  })
);
