/*eslint new-cap: ["error", {"capIsNewExceptions": ["Color"]}]*/

var assert = require('assert');
var sass = require('../');

describe('sass.types', function() {
  describe('Boolean', function() {
    it('exists', function() {
      assert(sass.types.Boolean);
    });

    it('names the constructor correctly', function() {
      assert.equal(sass.types.Boolean.name, 'SassBoolean');
    });

    it('supports call constructor', function() {
      let t = sass.types.Boolean(true);
      assert.equal(t.getValue(), true);

      let f = sass.types.Boolean(false);
      assert.equal(f.getValue(), false);
    });

    it('has true and false singletons', function() {
      assert.equal(sass.types.Boolean(true), sass.types.Boolean(true));
      assert.equal(sass.types.Boolean(false), sass.types.Boolean(false));
      assert.notEqual(sass.types.Boolean(false), sass.types.Boolean(true));
      assert.equal(sass.types.Boolean(true), sass.types.Boolean.TRUE);
      assert.equal(sass.types.Boolean(false), sass.types.Boolean.FALSE);
    });

    it('supports DOES NOT support new constructor', function() {
      assert.throws(function() {
        new sass.types.Boolean(true);
      }, function(error) {
        assert.ok(error instanceof TypeError);
        assert.equal(error.message, 'Cannot instantiate SassBoolean');
        return true;
      });
    });

    it('throws with incorrect constructor args', function() {
      assert.throws(function() {
        sass.types.Boolean();
      }, function(error) {
        assert.ok(error instanceof TypeError);
        assert.equal(error.message, 'Expected one boolean argument');
        return true;
      });

      [1, 2, '', 'hi', {}, []].forEach(function(arg) {
        assert.throws(function() {
          sass.types.Boolean(arg);
        }, function(error) {
          assert.ok(error instanceof TypeError);
          assert.equal(error.message, 'Expected one boolean argument');
          return true;
        });
      });

      assert.throws(function() {
        sass.types.Boolean(true, false);
      }, function(error) {
        assert.ok(error instanceof TypeError);
        assert.equal(error.message, 'Expected one boolean argument');
        return true;
      });
    });

    it('implements getValue', function() {
      let t = sass.types.Boolean(true);
      assert.equal(typeof t.getValue, 'function');
      assert.equal(t.getValue(), true);

      let f = sass.types.Boolean(false);
      assert.equal(typeof f.getValue, 'function');
      assert.equal(f.getValue(), false);
    });
  });

  describe('Color', function() {
    it('exists', function() {
      assert(sass.types.Color);
    });
  });

  describe('Error', function() {
    it('exists', function() {
      assert(sass.types.Error);
    });
  });

  describe('List', function() {
    it('exists', function() {
      assert(sass.types.List);
    });
  });

  describe('Map', function() {
    it('exists', function() {
      assert(sass.types.Map);
    });
  });

  describe('Null', function() {
    it('exists', function() {
      assert(sass.types.Null);
    });
  });

  describe('Null', function() {
    it('exists', function() {
      assert(sass.types.Null);
    });
  });

  describe('Number', function() {
    it('exists', function() {
      assert(sass.types.Number);
    });
  });

  describe('String', function() {
    it('exists', function() {
      assert(sass.types.String);
    });
  });
});
