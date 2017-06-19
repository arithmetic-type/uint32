import test from 'ava';

import { add32 , get32 } from '../../src' ;

function macro (t, A, B, EXPECTED) {
	const a = get32(A);
	const b = get32(B);
	const expected = get32(EXPECTED);
	t.deepEqual(add32(a, b), expected, 'a + b');
	t.deepEqual(add32(b, a), expected, 'b + a');
}

macro.title = (providedTitle, a, b, expected) => `${providedTitle} ${a} + ${b} === ${expected}`.trim();

test(macro, 0x00000000, 0x00000000, 0x00000000);
test(macro, 0x00000000, 0x00000001, 0x00000001);
test(macro, 0x00000001, 0xFFFFFFFF, 0x00000000);
test(macro, 0x00000002, 0xFFFFFFFF, 0x00000001);
test(macro, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFE);
test(macro, 0x80000000, 0x80000000, 0x00000000);
