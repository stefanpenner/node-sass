'use strict';

const types = require('../').types;
const iterateAndMeasure = require('./_measure');

iterateAndMeasure(() => types.Boolean(true).getValue());

