'use strict';

const Types = require('.').types;

function thing() {
  return new Types.String('hi');
}

// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// thing().getValue();
// return;

let count = 0;
while (true) {
  count++;
  console.log(thing().getValue());
  if (count % 1000000 === 0) {
    console.log(process.memoryUsage().rss / 1000000);
  }
}
