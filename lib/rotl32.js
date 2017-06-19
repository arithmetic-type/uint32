"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotl32 = rotl32;
/**
 * Left rotate for 32-bit unsigned integers
 *
 *  - used in md5 and sha1
 */

function rotl32(word, shift) {
  return word << shift | word >>> 32 - shift;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3RsMzIuanMiXSwibmFtZXMiOlsicm90bDMyIiwid29yZCIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQU1nQkEsTSxHQUFBQSxNO0FBTmhCOzs7Ozs7QUFNTyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsS0FBdkIsRUFBOEI7QUFDcEMsU0FBUUQsUUFBUUMsS0FBVCxHQUFtQkQsU0FBVSxLQUFLQyxLQUF6QztBQUNBIiwiZmlsZSI6InJvdGwzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGVmdCByb3RhdGUgZm9yIDMyLWJpdCB1bnNpZ25lZCBpbnRlZ2Vyc1xuICpcbiAqICAtIHVzZWQgaW4gbWQ1IGFuZCBzaGExXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGwzMiAod29yZCwgc2hpZnQpIHtcblx0cmV0dXJuICh3b3JkIDw8IHNoaWZ0KSB8ICh3b3JkID4+PiAoMzIgLSBzaGlmdCkpO1xufVxuIl19