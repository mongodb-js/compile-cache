# hadron-compile-cache [![][travis_img]][travis_url] [![][npm_img]][npm_url]

> Hadron Compile Cache

## Installation

```
npm install --save hadron-compile-cache
```

## Usage

```javascript
'use strict';

const path = require('path');
const CompileCache = require('hadron-compile-cache');
const home = path.joing('path', 'to', 'my', 'root');

CompileCache.setHomeDirectory(home);

require('mysource.jsx'); // Will be hooked into the cache.
```

## License

Apache 2.0

[travis_img]: https://img.shields.io/travis/mongodb-js/hadron-compile-cache.svg?style=flat-square
[travis_url]: https://travis-ci.org/mongodb-js/hadron-compile-cache
[npm_img]: https://img.shields.io/npm/v/hadron-compile-cache.svg?style=flat-square
[npm_url]: https://www.npmjs.org/package/hadron-compile-cache
