const Information = require('./information.js');

var cowsay = require('cowsay');

/* const information = {
  name: 'Rémi ',
  campus: 'Lyon campus',
}; */

console.log(
  cowsay.say({
    text: `Hello I'm ${information.name} from ${information.campus}`,
    e: 'oO',
    T: 'U ',
  })
);
