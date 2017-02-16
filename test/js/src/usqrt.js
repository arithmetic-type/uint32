
var run , random ;

random = require( "@aureooms/js-random" ) ;

run = function ( r ) {

	var s ;

	s = uint32.usqrt( r ) ;

	ok( s * s >= r , s + "² >= " + r ) ;
	ok( ( s - 1 ) * ( s - 1 ) < r , ( s - 1 ) + "² < " + r ) ;

} ;

test( "usqrt" , function ( ) {

	var i , n ;

	n = 10000 ;

	for ( i = 0 ; i < n ; ++i ) {

		run( random.randint( uint32.min + 1 , uint32.max + 1 ) ) ;

	}

	run( uint32.min + 1 ) ;

	run( uint32.max ) ;

} ) ;
