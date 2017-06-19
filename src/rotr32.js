/**
 * Right rotate for 32-bit unsigned integers
 */

export function rotr32 (word, shift) {
	return (word << (32 - shift)) | (word >>> shift);
}
