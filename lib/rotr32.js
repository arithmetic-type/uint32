"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotr32 = rotr32;
/**
 * Right rotate for 32-bit unsigned integers
 */

function rotr32(word, shift) {
  return word << 32 - shift | word >>> shift;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3RyMzIuanMiXSwibmFtZXMiOlsicm90cjMyIiwid29yZCIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsTSxHQUFBQSxNO0FBSmhCOzs7O0FBSU8sU0FBU0EsTUFBVCxDQUFpQkMsSUFBakIsRUFBdUJDLEtBQXZCLEVBQThCO0FBQ3BDLFNBQVFELFFBQVMsS0FBS0MsS0FBZixHQUEwQkQsU0FBU0MsS0FBMUM7QUFDQSIsImZpbGUiOiJyb3RyMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJpZ2h0IHJvdGF0ZSBmb3IgMzItYml0IHVuc2lnbmVkIGludGVnZXJzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdHIzMiAod29yZCwgc2hpZnQpIHtcblx0cmV0dXJuICh3b3JkIDw8ICgzMiAtIHNoaWZ0KSkgfCAod29yZCA+Pj4gc2hpZnQpO1xufVxuIl19