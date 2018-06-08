const assert = require('assert');

const DateMe = require('../src');

assert(
  DateMe.from({ year: 2004, month: 12, day: 24 })
    .toDate()
    .getTime(),
  new Date(2004, 11, 24, 0, 0, 0, 0).getTime(),
);

const before = DateMe.from({ year: 2018, month: 6, day: 7 });
const after = DateMe.from({ year: 2018, month: 6, day: 8 });
assert(before < after);
