/** Copyright (c) 2017 Mikal Stordal <mikalstordal@gmail.com> | MIT licensed */
'use strict';

/*!
 * Constants
 */
// will work on __any__ valid class
const classRegex = /^class[ \t]+([^ \t\n\r]+)[ \t]*(?:[ \t]e|\{)/
// will work on __any__ valid function
const functionRegex = /^function(?:[ \t]+([^ \t\n\r]+)[ \t]*\(|[ \t]*(\())/

/**
 * Gets contructor name of `target`.
 *
 * @param {Object|*} target Target object
 */
function nameOf (target) {
  let string;
  if ('function' === typeof target) {
    // If target.prototype is not the same as Object.prototype
    if (Object.prototype !== target.prototype
    // and it has a string tag
    &&  undefined !== target.prototype[Symbol.toStringTag]) {
      // return tag
      return target.prototype[Symbol.toStringTag];
    }

    // if target is Object,
    if (Object === target) {
      // return 'Object'
      return 'Object';
    }

    // search constructor
    string = target.toString();
  }

  else if ('object' !== typeof target) {
    return;
  }

  else {
    // if target has a string tag
    if (undefined !== target[Symbol.toStringTag]) {
      // return tag
      return target[Symbol.toStringTag];
    }

    // if target constructor is Object,
    if (Object === target.constructor) {
      // return 'Object'
      return 'Object';
    }

    // for every other object, search constructor
    string = target.constructor.toString();
  }

  let results;
  switch (string[0]) {
    // get class name
    case 'c':
      results = classRegex.exec(string);
      return results? results[1] : '';

    // get function name
    case 'f':
      results = functionRegex.exec(string);
      if (undefined !== results[2]) {
        // return anonymous when no name is found
        return '<anonymous constructor>';
      }
      return results? results[1] : '';

    // since we came this far,
    default:
      // it's not expected behavior to __not__ return.
      throw new Error(`unable to get name of '${string}'`);
  }
}

/*!
 * Export
 */
module.exports = nameOf
