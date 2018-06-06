const assert = require('assert');

const dateMe = require('../src');

console.log(dateMe.now().toString());
console.log(dateMe.from({ year: 2019 }).toString());
