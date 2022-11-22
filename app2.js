// modules
const users = require('./users');
const sayHi = require('./sayHi');
const data = require('./alternativeSyntax');
require('./mind');
console.log(users);
console.log(sayHi);
// console.log(items);

sayHi(users.user1);
sayHi(users.user2);
sayHi('I will do');
sayHi(data.singlePerson.name);
// sayHi(secret);
