#!/usr/bin/env node

var path = require( 'path' );
var fs = require( 'fs' );
var builder = require( 'systemjs-builder' );

var src = path.join( __dirname, '../src' );
var dist = path.join( __dirname, '../dist' );

builder.build( 'index', {
    baseURL: path.resolve( src )
}, path.join( dist, '/index.js' ) )
    .then( function() {
        console.log( 'Build complete' );
    })
    .catch( function( err ) {
        console.error( err );
    });
