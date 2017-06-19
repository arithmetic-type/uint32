/**
 * Creates a 32-bit signed integer from anything.
 *
 * @example
 * get32(0xFFFFFFFF); // -1
 *
 */
export function get32 ( w ) {
	return w | 0 ;
}
