import test from 'ava';

import {rotl32, get32} from '#module';

function macro(t, expected, s, a) {
	a = get32(a);
	expected = get32(expected);
	t.deepEqual(rotl32(a, s), expected);
}

macro.title = (providedTitle, expected, s, a) =>
	`${providedTitle} ${a} rotl ${s} === ${expected}`.trim();

test(macro, 0x00_00_00_00, 0, 0x00_00_00_00);
test(macro, 0x00_00_00_01, 1, 0x80_00_00_00);
test(macro, 0x00_00_00_01, 0, 0x00_00_00_01);
test(macro, 0x00_00_00_02, 0, 0x00_00_00_02);

test(macro, 0xff_ff_ff_ff, 0, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 4, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 8, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 12, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 16, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 20, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 24, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 28, 0xff_ff_ff_ff);
test(macro, 0xff_ff_ff_ff, 32, 0xff_ff_ff_ff);

test(macro, 0x01_23_45_67, 0, 0x01_23_45_67);
test(macro, 0x01_23_45_67, 4, 0x70_12_34_56);
test(macro, 0x01_23_45_67, 8, 0x67_01_23_45);
test(macro, 0x01_23_45_67, 12, 0x56_70_12_34);
test(macro, 0x01_23_45_67, 16, 0x45_67_01_23);
test(macro, 0x01_23_45_67, 20, 0x34_56_70_12);
test(macro, 0x01_23_45_67, 24, 0x23_45_67_01);
test(macro, 0x01_23_45_67, 28, 0x12_34_56_70);
test(macro, 0x01_23_45_67, 32, 0x01_23_45_67);
