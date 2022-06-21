let { randomEamil, randomName } = require('./test/util');

let name = randomName(2);
let email = randomEamil();

console.log({
    name,
    email
});