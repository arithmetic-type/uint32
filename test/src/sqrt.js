import test from 'ava';
import { sqrt32 , min , max } from '../../src';

import { randint } from "@aureooms/js-random" ;

function macro ( t , R ) {

	const r = R >>> 0 ;

	const s = sqrt32( r ) ;

	t.true( s * s <= r , `${s}² <= ${r}` ) ;
	t.true( ( s + 1 ) * ( s + 1 ) > r , `${s+1}² > ${r}` ) ;

}

macro.title = ( _ , r ) => `sqrt32(${r})` ;

const n = 10000 ;

for ( let i = 0 ; i < n ; ++i ) test( macro, randint( ( min >>> 0 ) + 1 , ( max >>> 0 ) + 1 ) ) ;

test( macro, min + 1 ) ;
test( macro, max ) ;

test( 'sqrt32(0)' , t => {

	const s = sqrt32(0) ;

	t.is( s , 0 ) ;

}) ;

