import test from 'ava';

import {randint} from '@randomized/random';

import {usqrt32, min, max} from '#module';

function macro(t, R) {
	const r = R >>> 0;

	const s = usqrt32(r);

	t.true(s * s >= r, `${s}² >= ${r}`);
	t.true((s - 1) * (s - 1) < r, `${s - 1}² < ${r}`);
}

macro.title = (_, r) => `usqrt32(${r})`;

const n = 10_000;

for (let i = 0; i < n; ++i)
	test(macro, randint((min >>> 0) + 1, (max >>> 0) + 1));

test(macro, min + 1);
test(macro, max);

test('usqrt32(0)', (t) => {
	const s = usqrt32(0);

	t.is(s, 0);
});
