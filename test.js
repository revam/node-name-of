const assert = require('assert')
const nameOf = require('.')

class TestClass1 {}

function TestClass2 () {}

class TestClass3 extends TestClass1 {}

const TestClass4 = function () {}

class TestClass5 { get [Symbol.toStringTag] () { return 'TestClassStringTag' } }

describe ('nameOf', () => {
  it ('should return `undefined` when target is not an object', () => {
    assert.equal (undefined, nameOf (''))
  })

  it ('should return class name for standard classes', () => {
    let instance = new TestClass1
    
  })

  it ('should return function name for standard functions', () => {
    let instance = new TestClass2

  })
  
  it ('should be work on extended classes', () => {
    let instance = new TestClass3

  })

  it ('should return `<anonymous constructor>` for objects constructed from a constructor without a name', () => {
    let instance = new TestClass4

    assert.equal ('<anonymous constructor>', nameOf (instance))
  })

  it ('should respect `Symbol.toStringTag` above all, if present', () => {
    let instance = new TestClass5
    
    assert.notEqual ('TestClass5', nameOf (instance))
    assert.equal ('TestClassStringTag', nameOf (instance))
  })

  it ('should work directly on constructors', () => {
    assert.equal ('TestClass1', nameOf (TestClass1))
    assert.equal ('TestClass2', nameOf (TestClass2))
    assert.equal ('TestClass3', nameOf (TestClass3))
    assert.equal ('<anonymous constructor>', nameOf (TestClass4))
    assert.equal ('TestClassStringTag', nameOf (TestClass5))
  })

  it ('should work on any objects', () => {
    assert.equal ('Array', nameOf ([]))
    assert.equal ('RegExp', nameOf (/d/))
    assert.equal ('Object', nameOf ({}))
    assert.equal ('Date', nameOf (new Date))

    assert.equal ('Array', nameOf (Array))
    assert.equal ('RegExp', nameOf (RegExp))
    assert.equal ('Object', nameOf (Object))
    assert.equal ('Date', nameOf (Date))
  })
})