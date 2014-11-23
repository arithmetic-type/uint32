(function(exports, undefined){

	'use strict';


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

})(typeof exports === 'undefined' ? this['uint32'] = {} : exports);
