"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rot32 = rot32;
/**
 * Left rotate for 32-bit unsigned integers
 *
 *  - used in md5 and sha1
 */

function rot32(word, shift) {
  return word << shift | word >>> 32 - shift;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3QzMi5qcyJdLCJuYW1lcyI6WyJyb3QzMiIsIndvcmQiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLEssR0FBQUEsSztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ25DLFNBQVFELFFBQVFDLEtBQVQsR0FBbUJELFNBQVUsS0FBS0MsS0FBekM7QUFDQSIsImZpbGUiOiJyb3QzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGVmdCByb3RhdGUgZm9yIDMyLWJpdCB1bnNpZ25lZCBpbnRlZ2Vyc1xuICpcbiAqICAtIHVzZWQgaW4gbWQ1IGFuZCBzaGExXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdDMyICh3b3JkLCBzaGlmdCkge1xuXHRyZXR1cm4gKHdvcmQgPDwgc2hpZnQpIHwgKHdvcmQgPj4+ICgzMiAtIHNoaWZ0KSk7XG59XG4iXX0=