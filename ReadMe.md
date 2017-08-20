# `nameOf(target)`
- `target`
  \<
  [Function]()
  |
  [Object]()
  \>
  Target to identify.

A small function to get either `Symbol.toStringTag` for or `constructor` name of `target`.
Returns `undefined` on all other types except `function` and `object`.

Based on top answer from [this question](https://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript).

## Installation
```sh
  npm install --save name-of
```

## License

The MIT License

Copyright 2017 Mikal Stordal <mikalstordal@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.