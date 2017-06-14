import test from 'ava';
import { usqrt32 , min , max } from '../../src';

import { randint } from "@aureooms/js-random" ;

function macro ( t , r ) {

	const s = usqrt32( r ) ;

	t.true( s * s >= r , `${s}² >= ${r}` ) ;
	t.true( ( s - 1 ) * ( s - 1 ) < r , `${s-1}² < ${r}` ) ;

}

macro.title = ( _ , r ) => `usqrt32(${r})` ;

const n = 10000 ;

for ( let i = 0 ; i < n ; ++i ) test( macro, randint( min + 1 , max + 1 ) ) ;

test( macro, min + 1 ) ;
test( macro, max ) ;
