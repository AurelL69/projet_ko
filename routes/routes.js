"use strict";

var router = require('express').Router();


router.get( '/', function( request, response ) {
	response.render( 'index.ejs', { 'titre': 'Ma Discographie'} );
})


module.exports = router;