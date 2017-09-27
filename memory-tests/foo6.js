'use strict';

const types = require('.').types;

function thing() {
  return types.Boolean(true);
}

let count = 0;
while (true) {
  count++;
  console.log(thing().getValue());
  if (count % 1000000 === 0) {
    console.log(process.memoryUsage().rss / 1000000);
  }
}
