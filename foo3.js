'use strict';

const sass = require('.');

function run() {
  sass.render({
    file: __dirname + '/test/fixtures/simple/index.scss'
  }, function(error, result) {
    if (error) {
      console.error(error);
      process.exit(1);
    } else {
      console.log(result.css.toString());
      run();
    }
  });
}

run();
