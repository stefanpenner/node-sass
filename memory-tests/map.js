'use strict';

const types = require('../').types;
const iterateAndMeasure = require('./_measure');

iterateAndMeasure(() => {
  let key = new types.String('the-key');
  let value = new types.String('the-value');

  let map = new types.Map(1);

  map.setKey(0, key);
  map.setValue(0, value);

  map.getKey(0);
}, 100000);

