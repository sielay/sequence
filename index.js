'use strict';

module.exports = function sequence ( functions, args, callback ) {
    function handle ( error ) {
        if ( error ) {
            return callback( error );
        }
        iterate();
    }

    function iterate () {
        var next = functions.shift();
        if ( !next ) {
            return callback();
        }
        next.apply( null, [].concat( args, [ handle ] ) );
    }

    iterate();
}