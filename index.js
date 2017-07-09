/** Copyright (c) 2017 Mikal Stordal <mikalstordal@gmail.com> | MIT licensed */
'use strict'

/*!
 * Constants
 */
const classRegex = /class +([^ \n\r]+) *(?: [e]|\{)/
const functionRegex = /function(?: *([^ \n\r]+) *\(| *(\())/

/**
 * Gets contructor name of `target`.
 * 
 * @param {Object|*} target Target object
 */
function nameOf (target) {
  let string
  if ('function' === typeof target) {
    if (target.prototype !== Object.prototype
    &&  target.prototype[Symbol.toStringTag] !== undefined)
      return target.prototype[Symbol.toStringTag]

    if (target === Object)
      return 'Object'

    string = target.toString()
  }

  else if ('object' !== typeof target)
    return undefined

  else {
    if (target[Symbol.toStringTag] !== undefined)
      return target[Symbol.toStringTag]

    if (target.constructor === Object)
      return 'Object'

    string = target.constructor.toString()
  }

  let results
  switch (string[0]) {
    case 'c':
      results = classRegex.exec(string)
      return results? results[1] : ''

    case 'f':
      results = functionRegex.exec(string)
      if (undefined !== results[2])
        return '<anonymous constructor>'
      return results? results[1] : ''

    default:
      throw `unable to get name of target`
  }
}

/*!
 * Export
 */
module.exports = nameOf