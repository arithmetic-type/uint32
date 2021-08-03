# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const uint32 = await import( '@arithmetic-type/uint32' ) ;
// or
import * as uint32 from '@arithmetic-type/uint32' ;
```
