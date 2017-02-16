( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/limits */
/* js/src/limits/max.js */

exports.max = Math.pow( 2 , 32 ) - 1 ;

/* js/src/limits/min.js */

exports.min = 0 ;

/* js/src/sqrt.js */


var sqrt = function ( n ) {
	return Math.sqrt( n ) | 0 ;
} ;

exports.sqrt = sqrt ;

/* js/src/usqrt.js */


var usqrt = function ( n ) {
	return Math.ceil( Math.sqrt( n ) ) ;
} ;

exports.usqrt = usqrt ;

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-uint32" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["uint32"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-uint32") ;
} )( ) ;
