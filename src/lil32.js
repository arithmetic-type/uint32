export function lil32(a, o) {
	return (a[o + 3] << 24) | (a[o + 2] << 16) | (a[o + 1] << 8) | a[o + 0];
}
