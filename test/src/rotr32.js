import test from 'ava';

import { rotr32 , get32 } from '../../src' ;

function macro (t, a, s, expected) {
	a = get32(a);
	expected = get32(expected);
	t.deepEqual(rotr32(a, s), expected);
}

macro.title = (providedTitle, a, s, expected) => `${providedTitle} ${a} rotr ${s} === ${expected}`.trim();

test(macro, 0x00000000,  0, 0x00000000);
test(macro, 0x00000001,  1, 0x80000000);
test(macro, 0x00000001,  0, 0x00000001);
test(macro, 0x00000002,  0, 0x00000002);

test(macro, 0xFFFFFFFF,  0, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF,  4, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF,  8, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 12, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 16, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 20, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 24, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 28, 0xFFFFFFFF);
test(macro, 0xFFFFFFFF, 32, 0xFFFFFFFF);

test(macro, 0x01234567,  0, 0x01234567);
test(macro, 0x01234567,  4, 0x70123456);
test(macro, 0x01234567,  8, 0x67012345);
test(macro, 0x01234567, 12, 0x56701234);
test(macro, 0x01234567, 16, 0x45670123);
test(macro, 0x01234567, 20, 0x34567012);
test(macro, 0x01234567, 24, 0x23456701);
test(macro, 0x01234567, 28, 0x12345670);
test(macro, 0x01234567, 32, 0x01234567);
