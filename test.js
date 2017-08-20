const assert = require('assert');
const nameOf = require('.');

// Test classes/functions
class TestCase1 {}
function TestCase2 () {}
class TestCase3a extends TestCase1 {}
class TestCase3b extends TestCase2 {}
const TestCase4a = function () {};
const TestCase4b = function(){};
class TestCase5 { get [Symbol.toStringTag] () { return 'TestClassStringTag' } }
const TestCase6 = { [Symbol.toStringTag]: 'TestCase6' };

describe ('nameOf', () => {
  it ('should return `undefined` when target is not an object or function', () => {
    assert.equal (nameOf (''), undefined);
    assert.equal (nameOf (0), undefined);
    assert.equal (nameOf (NaN), undefined);
    assert.equal (nameOf (Infinity), undefined);
    assert.equal (nameOf (false), undefined);
  })

  it ('should return class name for standard classes', () => {
    assert.equal (nameOf (new TestCase1), 'TestCase1');
  })

  it ('should return function name for standard functions', () => {
    assert.equal (nameOf (new TestCase2), 'TestCase2');
  })

  it ('should work on extended classes', () => {
    assert.equal (nameOf (new TestCase3a), 'TestCase3a');
    assert.equal (nameOf (new TestCase3b), 'TestCase3b');
  })

  it ('should return `<anonymous constructor>` for objects constructed from a constructor without a name', () => {
    assert.equal (nameOf (new TestCase4a), '<anonymous constructor>');
    assert.equal (nameOf (new TestCase4b), '<anonymous constructor>');
  })

  it ('should respect `Symbol.toStringTag` above all, if present', () => {
    let instance = new TestCase5

    assert.notEqual (nameOf (instance), 'TestCase5');
    assert.equal (nameOf (instance), 'TestClassStringTag');
    assert.equal (nameOf (TestCase6), 'TestCase6');
  })

  it ('should work directly on constructors', () => {
    assert.equal (nameOf (TestCase1), 'TestCase1');
    assert.equal (nameOf (TestCase2), 'TestCase2');
    assert.equal (nameOf (TestCase3a), 'TestCase3a');
    assert.equal (nameOf (TestCase3b), 'TestCase3b');
    assert.equal (nameOf (TestCase4a), '<anonymous constructor>');
    assert.equal (nameOf (TestCase4b), '<anonymous constructor>');
    assert.equal (nameOf (TestCase5), 'TestClassStringTag');
  })

  it ('should work on any objects', () => {
    assert.equal (nameOf ([]), 'Array')
    assert.equal (nameOf (/d/), 'RegExp')
    assert.equal (nameOf ({}), 'Object')
    assert.equal (nameOf (new Date), 'Date')

    assert.equal (nameOf (Array), 'Array')
    assert.equal (nameOf (RegExp), 'RegExp')
    assert.equal (nameOf (Object), 'Object')
    assert.equal (nameOf (Date), 'Date')
  })
})
