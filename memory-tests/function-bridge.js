"use strict";

const sass = require("../");

const iterateAndMeasure = require('./_measure');
 for (let i =0; i < 10000; i++) {
  sass.renderSync({
    data: '#{headings()} { color: #08c; }',
    functions: {
      'headings()': function() {
        return new sass.types.String('hi');
      }
    }
  });

 }
setTimeout(() => 1, 100000000);
