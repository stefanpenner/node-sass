'use strict';

const types = require('../').types;
const iterateAndMeasure = require('./_measure');

iterateAndMeasure(() => new types.String('hi'));
