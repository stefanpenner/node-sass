'use strict';

const sass = require('.');

function renderSync() {
  sass.renderSync({
    data: '#{headings(2,5)} { color: #08c; }',
    functions: {
      'headings($from: 0, $to: 6)': function(from, to) {
        let f = from.getValue();
        let t = to.getValue();
        let list = new sass.types.List(t - f + 1);

        for (let i = f; i <= t; i++) {
          list.setValue(i - f, new sass.types.String('h' + i));
        }

        return list;
      }
    }
  });
}

  renderSync();

setInterval(function() { }, 10000000000);
